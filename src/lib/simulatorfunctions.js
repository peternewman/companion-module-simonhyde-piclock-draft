var indexfile = require('../../index')

function handleSocketData(data) {
	console.log('Got data: ' + data.toString())

	//this.data += data.toString()
	var blocks = this.data.split('\n\n')

	// process blocks
	if (indexfile.serverIsActive == true) {
		while (blocks.length > 1) {
			// block is a update request block
			var block = blocks.splice(0, 1)
			var lines = block[0].split('\n')
			if (lines[0] == '')
				// remove initial blank line
				lines.splice(0, 1)
			if (lines[0] == 'PING:') {
				this.write('ACK\n\n')
			} else {
				// the block header given is unimplemented or non-standard
				// and should be ignored (according to spec)
			}
		}
		this.data = blocks[0]
	}
}

function sendRawClientMessage(self, message) {
	// send it to all the clients
	console.log('Sending: ' + message)
	//console.log(JSON.stringify(self))
	//console.log(JSON.stringify(self.sim.Simulator))
	console.log('Got ' + self.sim.Simulator.sockets.size + ' sockets')
	for (const s of self.sim.Simulator.sockets.keys()) {
		console.log(JSON.stringify(s))
		console.log('Sent to :' + s)
		s.write(message + '\r')
	}
	console.log('Done sending')
}

function updateData(self, command, update) {
	self.log('debug', 'Pre Data: ' + JSON.stringify(self.sim.Simulator.data))
	self.log('debug', 'Data: ' + JSON.stringify(update))
	for (const opt of Object.keys(update)) {
		self.log('debug', 'Checking option:' + opt + ' (' + update[opt] + ')')
		for (var prop of self.sim.Simulator.data[command]) {
			self.log('debug', 'Looking at: ' + JSON.stringify(prop))
			self.log('debug', 'Looking at: ' + prop['id'] + ' = ' + prop['value'])
			if (opt === prop['id']) {
				prop['value'] = update[opt]
				self.log('debug', 'New: ' + prop['id'] + ' = ' + prop['value'])
				break // We've updated, stop searching
			}
		}
	}
	//self.sim.Simulator.data['SETGLOBAL']['landscape'] = action.options['landscape']
	self.log('debug', 'Post data: ' + JSON.stringify(self.sim.Simulator.data))
	//await self.sim.Simulator.sendRawClientMessage(self, action.options['cmd'])
}

function sendGlobalCommand(self, command) {
	self.log('debug', 'Sending: ' + command)
	self.log('debug', 'Data: ' + JSON.stringify(self.sim.Simulator.data))
	var message =
		command +
		':' +
		self.sim.Simulator.data[command]
			.map((opt) => {
				return opt['value']
			})
			.join(':')
	self.log('debug', 'Msg: ' + message)
	sendRawClientMessage(self, message)
}

function updateSendGlobalData(self, command, update) {
	updateData(self, command, update)
	sendGlobalCommand(self, command)
}

module.exports = {
	handleSocketData,
	sendRawClientMessage,
	updateData,
	sendGlobalCommand,
	updateSendGlobalData,
}
