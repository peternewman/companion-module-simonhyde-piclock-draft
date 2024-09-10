const { Regex, InstanceBase, InstanceStatus, runEntrypoint } = require('@companion-module/base')
const UpgradeScripts = require('./src/upgrades')

const net = require('net')

const actions = require('./actions')
const configs = require('./configs')
const vars = require('./src/variables')
const sim = require('./src/simulator')

var enableDestroy = require('server-destroy')
var server = net.createServer(sim.Simulator.handleConnection)

enableDestroy(server)

var client = new net.Socket()
// TODO(Peter): Make the port configurable
var PORT = 6254

class SimonHydePiClockInstance extends InstanceBase {
	constructor(internal) {
		super(internal)

		Object.assign(this, {
			...actions,
			...configs,
		})
	}

	async init(config) {
		this.configUpdated(config)

		this.sim = sim

		//exports.serverIsActive = true

		try {
			server.listen(PORT)

			this.updateStatus(InstanceStatus.Ok)
		} catch (error) {
			this.log('error', 'Port is occupied. Are you running another instance of this module?')
		}
	}

	async configUpdated(config) {
		if (config) {
			this.config = config
		}

		this.initActions(this)
	}

	async destroy() {
		server.close()
		//		server.destroy()
		//exports.serverIsActive = false
	}
}

/*function discoverSimulatorServer(ip) {
	return tcping.probe(ip, 9990, function (err, available) {
		this.log('debug', available)
	})
}*/

runEntrypoint(SimonHydePiClockInstance, UpgradeScripts)
