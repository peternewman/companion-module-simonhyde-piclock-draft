var index = require('../index')
var http = require('http')
const { url } = require('inspector')

function companionCommander(value) {
	companionAddress = index.buttonSettings[value]

	var url =
		'http://' +
		index.commanderSettings[1] +
		':' +
		index.commanderSettings[2] +
		'/press/bank/' +
		companionAddress[0] +
		'/' +
		companionAddress[1]
	console.log(url)

	var options = {
		host:
			'http://' +
			index.commanderSettings[1] +
			':' +
			index.commanderSettings[2] +
			'/press/bank/' +
			companionAddress[0] +
			'/' +
			companionAddress[1],
	}

	var request = http.get(url)

	request.on('error', function (err) {
		console.log('Command Failed')
	})

	request.end()
}

module.exports = { companionCommander }
