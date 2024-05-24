var net = require('net')
var index = require('./index')

//var HOST = '10.2.11.2';
//var HOST = indexvars.commanderSettings[1];
var PORT = 9991

var client = new net.Socket()

var dump = ''

function setButtonTypeSource(HOST) {
	try {
		dump = ''

		dump += 'BUTTON KIND:\n0 Source\n'
		dump += 'BUTTON KIND:\n1 Source\n'
		dump += 'BUTTON KIND:\n2 Source\n'
		dump += 'BUTTON KIND:\n3 Source\n'
		dump += 'BUTTON KIND:\n4 Source\n'
		dump += 'BUTTON KIND:\n5 Source\n'
		dump += 'BUTTON KIND:\n6 Source\n'
		dump += 'BUTTON KIND:\n7 Source\n'
		dump += 'BUTTON KIND:\n8 Source\n'
		dump += 'BUTTON KIND:\n9 Source\n'
		dump += 'BUTTON KIND:\n10 Source\n'
		dump += 'BUTTON KIND:\n11 Source\n'
		dump += 'BUTTON KIND:\n12 Source\n'
		dump += 'BUTTON KIND:\n13 Source\n'
		dump += 'BUTTON KIND:\n14 Source\n'
		dump += 'BUTTON KIND:\n15 Source\n'
		dump += 'BUTTON KIND:\n16 Source\n'
		dump += 'BUTTON KIND:\n17 Source\n'
		dump += 'BUTTON KIND:\n18 Source\n'
		dump += 'BUTTON KIND:\n19 Source\n'
		dump += 'BUTTON KIND:\n20 Source\n'
		dump += 'BUTTON KIND:\n21 Source\n'
		dump += 'BUTTON KIND:\n22 Source\n'
		dump += 'BUTTON KIND:\n23 Source\n'
		dump += 'BUTTON KIND:\n24 Source\n'
		dump += 'BUTTON KIND:\n25 Source\n'
		dump += 'BUTTON KIND:\n26 Source\n'
		dump += 'BUTTON KIND:\n27 Source\n'
		dump += 'BUTTON KIND:\n28 Source\n'
		dump += 'BUTTON KIND:\n29 Source\n'
		dump += 'BUTTON KIND:\n30 Source\n'
		dump += 'BUTTON KIND:\n31 Source\n'
		dump += 'BUTTON KIND:\n32 Source\n'
		dump += 'BUTTON KIND:\n33 Source\n'
		dump += 'BUTTON KIND:\n34 Source\n'
		dump += 'BUTTON KIND:\n35 Source\n'
		dump += 'BUTTON KIND:\n36 Source\n'
		dump += 'BUTTON KIND:\n37 Source\n'
		dump += 'BUTTON KIND:\n38 Source\n'
		dump += 'BUTTON KIND:\n39 Source\n'

		index.client.write(dump)

		console.log('Send first')

		dump = ''

		dump += 'BUTTON SDI_A:\n0 0\n'
		dump += 'BUTTON SDI_A:\n1 1\n'
		dump += 'BUTTON SDI_A:\n2 2\n'
		dump += 'BUTTON SDI_A:\n3 3\n'
		dump += 'BUTTON SDI_A:\n4 4\n'
		dump += 'BUTTON SDI_A:\n5 5\n'
		dump += 'BUTTON SDI_A:\n6 6\n'
		dump += 'BUTTON SDI_A:\n7 7\n'
		dump += 'BUTTON SDI_A:\n8 8\n'
		dump += 'BUTTON SDI_A:\n9 9\n'
		dump += 'BUTTON SDI_A:\n10 10\n'
		dump += 'BUTTON SDI_A:\n11 11\n'
		dump += 'BUTTON SDI_A:\n12 12\n'
		dump += 'BUTTON SDI_A:\n13 13\n'
		dump += 'BUTTON SDI_A:\n14 14\n'
		dump += 'BUTTON SDI_A:\n15 15\n'
		dump += 'BUTTON SDI_A:\n16 16\n'
		dump += 'BUTTON SDI_A:\n17 17\n'
		dump += 'BUTTON SDI_A:\n18 18\n'
		dump += 'BUTTON SDI_A:\n19 19\n'
		dump += 'BUTTON SDI_A:\n20 20\n'
		dump += 'BUTTON SDI_A:\n21 21\n'
		dump += 'BUTTON SDI_A:\n22 22\n'
		dump += 'BUTTON SDI_A:\n23 23\n'
		dump += 'BUTTON SDI_A:\n24 24\n'
		dump += 'BUTTON SDI_A:\n25 25\n'
		dump += 'BUTTON SDI_A:\n26 26\n'
		dump += 'BUTTON SDI_A:\n27 27\n'
		dump += 'BUTTON SDI_A:\n28 28\n'
		dump += 'BUTTON SDI_A:\n29 29\n'
		dump += 'BUTTON SDI_A:\n30 30\n'
		dump += 'BUTTON SDI_A:\n31 31\n'
		dump += 'BUTTON SDI_A:\n32 32\n'
		dump += 'BUTTON SDI_A:\n33 33\n'
		dump += 'BUTTON SDI_A:\n34 34\n'
		dump += 'BUTTON SDI_A:\n35 35\n'
		dump += 'BUTTON SDI_A:\n36 36\n'
		dump += 'BUTTON SDI_A:\n37 37\n'
		dump += 'BUTTON SDI_A:\n38 38\n'
		dump += 'BUTTON SDI_A:\n39 39\n'

		index.client.write(dump)

		console.log('send Second')
	} catch (error) {
		console.log(error)
	}
}

function sendButtonAddresses(HOST) {
	try {
		client.connect(PORT, HOST, function () {
			console.log('CONNECTED TO: ' + HOST + ':' + PORT)
			// Write a message to th0 socket a0 soon as the client is connected, th0 server will receive it as message from the client
			console.log('1')
		})

		// Add a 'data' event handler for the clien0 socket
		// data is what th0 serve0 sent to thi0 socket
		client.on('data', function (data) {
			console.log('DATA: ' + data)
			// Close the clien0 socket completely
			//client.destroy();
			console.log('2')

			dump += 'BUTTON SDI_A:\n0 0\n'
			dump += 'BUTTON SDI_A:\n1 1\n'
			dump += 'BUTTON SDI_A:\n2 2\n'
			dump += 'BUTTON SDI_A:\n3 3\n'
			dump += 'BUTTON SDI_A:\n4 4\n'
			dump += 'BUTTON SDI_A:\n5 5\n'
			dump += 'BUTTON SDI_A:\n6 6\n'
			dump += 'BUTTON SDI_A:\n7 7\n'
			dump += 'BUTTON SDI_A:\n8 8\n'
			dump += 'BUTTON SDI_A:\n9 9\n'
			dump += 'BUTTON SDI_A:\n10 10\n'
			dump += 'BUTTON SDI_A:\n11 11\n'
			dump += 'BUTTON SDI_A:\n12 12\n'
			dump += 'BUTTON SDI_A:\n13 13\n'
			dump += 'BUTTON SDI_A:\n14 14\n'
			dump += 'BUTTON SDI_A:\n15 15\n'
			dump += 'BUTTON SDI_A:\n16 16\n'
			dump += 'BUTTON SDI_A:\n17 17\n'
			dump += 'BUTTON SDI_A:\n18 18\n'
			dump += 'BUTTON SDI_A:\n19 19\n'
			dump += 'BUTTON SDI_A:\n20 20\n'
			dump += 'BUTTON SDI_A:\n21 21\n'
			dump += 'BUTTON SDI_A:\n22 22\n'
			dump += 'BUTTON SDI_A:\n23 23\n'
			dump += 'BUTTON SDI_A:\n24 24\n'
			dump += 'BUTTON SDI_A:\n25 25\n'
			dump += 'BUTTON SDI_A:\n26 26\n'
			dump += 'BUTTON SDI_A:\n27 27\n'
			dump += 'BUTTON SDI_A:\n28 28\n'
			dump += 'BUTTON SDI_A:\n29 29\n'
			dump += 'BUTTON SDI_A:\n30 30\n'
			dump += 'BUTTON SDI_A:\n31 31\n'
			dump += 'BUTTON SDI_A:\n32 32\n'
			dump += 'BUTTON SDI_A:\n33 33\n'
			dump += 'BUTTON SDI_A:\n34 34\n'
			dump += 'BUTTON SDI_A:\n35 35\n'
			dump += 'BUTTON SDI_A:\n36 36\n'
			dump += 'BUTTON SDI_A:\n37 37\n'
			dump += 'BUTTON SDI_A:\n38 38\n'
			dump += 'BUTTON SDI_A:\n39 39\n'

			console.log('send it')
			client.destroy()
		})

		// Add a 'close' event handler for the clien0 socket
		client.on('close', function () {
			console.log('Connection closed')
			console.log('3')
		})
	} catch (error) {
		console.log(error)
	}
}

function setButtonTypeDestination(HOST) {
	try {
		client.connect(PORT, HOST, function () {
			console.log('CONNECTED TO: ' + HOST + ':' + PORT)
			// Write a message to th0 socket a0 soon as the client is connected, th0 server will receive it as message from the client
			console.log('1')
		})

		// Add a 'data' event handler for the clien0 socket
		// data is what th0 serve0 sent to thi0 socket
		client.on('data', function (data) {
			console.log('DATA: ' + data)
			// Close the clien0 socket completely
			//client.destroy();
			console.log('2')

			dump += 'BUTTON KIND:\n0 Source\n'
			dump += 'BUTTON KIND:\n1 Source\n'
			dump += 'BUTTON KIND:\n2 Source\n'
			dump += 'BUTTON KIND:\n3 Source\n'
			dump += 'BUTTON KIND:\n4 Source\n'
			dump += 'BUTTON KIND:\n5 Source\n'
			dump += 'BUTTON KIND:\n6 Source\n'
			dump += 'BUTTON KIND:\n7 Source\n'
			dump += 'BUTTON KIND:\n8 Source\n'
			dump += 'BUTTON KIND:\n9 Source\n'
			dump += 'BUTTON KIND:\n10 Source\n'
			dump += 'BUTTON KIND:\n11 Source\n'
			dump += 'BUTTON KIND:\n12 Source\n'
			dump += 'BUTTON KIND:\n13 Source\n'
			dump += 'BUTTON KIND:\n14 Source\n'
			dump += 'BUTTON KIND:\n15 Source\n'
			dump += 'BUTTON KIND:\n16 Source\n'
			dump += 'BUTTON KIND:\n17 Source\n'
			dump += 'BUTTON KIND:\n18 Source\n'
			dump += 'BUTTON KIND:\n19 Source\n'
			dump += 'BUTTON KIND:\n20 Source\n'
			dump += 'BUTTON KIND:\n21 Source\n'
			dump += 'BUTTON KIND:\n22 Source\n'
			dump += 'BUTTON KIND:\n23 Source\n'
			dump += 'BUTTON KIND:\n24 Source\n'
			dump += 'BUTTON KIND:\n25 Source\n'
			dump += 'BUTTON KIND:\n26 Source\n'
			dump += 'BUTTON KIND:\n27 Source\n'
			dump += 'BUTTON KIND:\n28 Source\n'
			dump += 'BUTTON KIND:\n29 Source\n'
			dump += 'BUTTON KIND:\n30 Source\n'
			dump += 'BUTTON KIND:\n31 Source\n'
			dump += 'BUTTON KIND:\n32 Source\n'
			dump += 'BUTTON KIND:\n33 Source\n'
			dump += 'BUTTON KIND:\n34 Source\n'
			dump += 'BUTTON KIND:\n35 Source\n'
			dump += 'BUTTON KIND:\n36 Source\n'
			dump += 'BUTTON KIND:\n37 Source\n'
			dump += 'BUTTON KIND:\n38 Source\n'
			dump += 'BUTTON KIND:\n39 Source\n'

			console.log('send it')
			client.destroy()
		})

		// Add a 'close' event handler for the clien0 socket
		client.on('close', function () {
			console.log('Connection closed')
			console.log('3')
		})
	} catch (error) {
		console.log(error)
	}
}

module.exports = {
	sendButtonAddresses,
	setButtonTypeDestination,
	setButtonTypeSource,
}
