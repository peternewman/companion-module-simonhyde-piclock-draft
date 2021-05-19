// TODOS
// build locking support for multiple IPs

// includes
var videohub = require('./lib/videohub.js');
var net = require('net');
var simfunc = require('./lib/simulatorfunctions');
var index = require('../index');

// config
var simType = videohub.TYPE_SMART_VIDEOHUB;

// simulator start
var Simulator = (function (type) {
	var sim = this;
	var v = new videohub.videohub(type);
	var sockets = [];
	v.on('change', simfunc.sendClientUpdate);

	function handleConnection(socket) {
		var address = socket.remoteAddress.split("::ffff:")[1];
		console.log(address);

		if(address == index.commanderSettings[0]) {
			// send protocol preamble
		var dump = "PROTOCOL PREAMBLE:\n";
		dump += "Version: "+videohub.PROTOCOL_VERSION+"\n";
		dump += "\n";

		// send information about device
		dump += "VIDEOHUB DEVICE:\n";
		dump += "Device present: true\n";
		dump += "Model name: "+v.getName()+"\n";
		dump += "Video inputs: "+v.getInterfaceCount(videohub.INTERFACE_LABELS_IN)+"\n";
		dump += "Video processing units: "+v.getInterfaceCount(videohub.INTERFACE_ROUTES_PROCESS)+"\n";
		dump += "Video outputs: "+v.getInterfaceCount(videohub.INTERFACE_LABELS_OUT)+"\n";
		dump += "Video monitoring outputs: "+v.getInterfaceCount(videohub.INTERFACE_LABELS_MON_OUT)+"\n";
		dump += "Serial ports: "+v.getInterfaceCount(videohub.INTERFACE_LABELS_SERIAL)+"\n";
		dump += "\n";

		// send status dump
		for (var inf = 1; inf <= 15; inf++) {
			var block = simfunc.generateStatusBlock(socket, inf);
			if (block)
				dump += block;
		}
		socket.write(dump);

		socket.data = '';
		sockets.push(socket);
		socket.on('end', function () {
			sockets.splice(sockets.indexOf(socket), 1);
		});
		socket.on('data', simfunc.handleSocketData);
		} else {return};
		
	}

	return {
		handleConnection: handleConnection
	}
})(simType);

module.exports = {
	Simulator
};