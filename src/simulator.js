// includes
var net = require('net')
var simfunc = require('./lib/simulatorfunctions')
var index = require('../index')

// simulator start
var Simulator = (function () {
	var sim = this

	sim.sockets = new Map()
	sim.data = {
		SETGLOBAL: [
			{ id: 'landscape', value: 1 },
			{ id: 'screensaver', value: 1 },
		],
		SETPROFILE: [{ id: 'name', value: '' }],
		SETREGIONCOUNT: [{ id: 'count', value: 1 }],
	}

	function handleConnection(socket) {
		var address = socket.remoteAddress.split('::ffff:')[1]
		console.log('Connection from: ' + address)

		var auth = 'CRYPT:12345\r'
		socket.write(auth)
		console.log('Sent: ' + auth)

		console.log(JSON.stringify(sim.data))

		socket.data = ''
		sim.sockets.set(socket, {
			pingTimeout: setInterval(() => {
				socket.write('PING\r')
			}, 4000),
		})
		console.log('Got ' + sim.sockets.size + ' sockets')
		socket.on('end', function () {
			clearTimeout(sim.sockets.get(socket).pingTimeout)
		})
		socket.on('data', simfunc.handleSocketData)
	}

	return {
		sockets: sockets,
		data: data,
		handleConnection: handleConnection,
		sendClientMessage: simfunc.sendClientMessage,
		sendRawClientMessage: simfunc.sendRawClientMessage,
		updateData: simfunc.updateData,
		sendGlobalCommand: simfunc.sendGlobalCommand,
		updateSendGlobalData: simfunc.updateSendGlobalData,
	}
})()

module.exports = {
	Simulator,
}
