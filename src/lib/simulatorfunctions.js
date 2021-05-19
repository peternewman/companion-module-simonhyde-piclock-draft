const { companionCommander } = require('../commander.js');
const { TYPE_SMART_VIDEOHUB } = require('./configs.js');
var videohub = require('./videohub.js');
var v = new videohub.videohub(TYPE_SMART_VIDEOHUB);
var indexfile = require('../../index');


function handleSocketData(data) {
    this.data += data.toString();
    var blocks = this.data.split("\n\n");
    
    // process blocks
    if(indexfile.serverIsActive == true) {
        while (blocks.length > 1) {
            // block is a update request block
            var block = blocks.splice(0, 1);
            var lines = block[0].split("\n");
            if (lines[0] == '') // remove initial blank line
                lines.splice(0, 1);
            if (lines[0] == 'PING:') {
                this.write("ACK\n\n");
            } else if (typeof videohub.blockTitlesDecode[lines[0]] != 'undefined') {
                // this block header is recognized
                var inf = videohub.blockTitlesDecode[lines[0]];
                if (lines.length == 1) {
                    // this is a status request block
                    var statusBlock = generateStatusBlock(this, inf);
                    if (statusBlock) {
                        this.write("ACK\n\n");
                        this.write(statusBlock);
                    }
                } else {
                    // this is an update block
                    lines.splice(0, 1);
                    var hasFailed = false;
                    for (l in lines) {
                        // handle the updates
                        var tl = lines[l];
                        var firstSpace = tl.indexOf(" ");
                        var index = parseInt(tl.substr(0, firstSpace));
                        var value = tl.substr(firstSpace+1);
                        var validUpdate = v.queueUpdate(inf, index, value);
                        console.log(value);
    
                        companionCommander(value);
    
                        if (!validUpdate) break;
                    }
                    if (validUpdate) {
                        this.write("ACK\n\n");
                        v.doUpdate();
    
                        // reset the LED
                        var index = 0
                        var value = 40
                        v.queueUpdate(inf, index, value);
                        this.write("ACK\n\n");
                        v.doUpdate()
                        
                    } else {
                        this.write("NAK\n\n");
                        v.clearUpdates();
                    }
                }
            } else {
                // the block header given is unimplemented or non-standard
                // and should be ignored (according to spec)
            }
        }
        this.data = blocks[0];
    }
    
    
}

function sendClientUpdate(update) {

    // build the update message
    var output = "";
    for (var i = 0; i < 15; i++) { // iterate through all the updated interfaces
        if (update[i].length == 0) continue;
        var inf = i+1;
        output += videohub.blockTitlesEncode[inf]+"\n";
        for (var n = 0; n < v.getInterfaceCount(inf); n++) { // iterate through each port
            if (typeof update[i][n] != 'undefined')
                output += n+" "+v.getInterfacePort(inf, n)+"\n";
        }
        output += "\n";
    }

    // send it to all the clients
    for (s in sockets) {
        sockets[s].write(output);
    }
}

function generateStatusBlock(socket, inf) {
    if (!v.getInterfaceCount(inf)) return false;
    var output = videohub.blockTitlesEncode[inf]+"\n";
    for (var p = 0; p < v.getInterfaceCount(inf); p++) {
        output += p+' '+v.getInterfacePort(inf, p)+"\n";
    }
    output += "\n";
    return output;
}

module.exports = {
    handleSocketData,
    generateStatusBlock,
    sendClientUpdate
};