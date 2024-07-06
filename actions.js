//var simfunc = require('./src/lib/simulatorfunctions')
//const sim = require('./src/simulator')

module.exports = {
	initActions(self) {
		const actions = {
			sendRawCommand: {
				name: 'Send Raw Command To Clocks',
				options: [
					{
						type: 'textinput',
						label: 'Command',
						id: 'cmd',
						default: 'SETGLOBAL:0:1',
					},
				],
				callback: async (action) => {
					self.log('debug', 'Running:')
					self.log('debug', JSON.stringify(self.sim.Simulator))
					await self.sim.Simulator.sendRawClientMessage(self, action.options['cmd'])
				},
			},
			setLandscape: {
				name: 'Set Orientation',
				options: [
					{
						type: 'dropdown',
						label: 'Orientation',
						id: 'landscape',
						choices: [
							{ id: 1, label: 'Landscape' },
							{ id: 0, label: 'Portrait' },
						],
						default: 1,
					},
				],
				callback: async (action) => {
					await self.sim.Simulator.updateSendGlobalData(self, 'SETGLOBAL', action.options)
				},
			},
			setScreensaver: {
				name: 'Set Screensaver',
				options: [
					{
						type: 'dropdown',
						label: 'Screensaver',
						id: 'screensaver',
						choices: [
							{ id: 1, label: 'On' },
							{ id: 0, label: 'Off' },
						],
						default: 1,
					},
				],
				callback: async (action) => {
					await self.sim.Simulator.updateSendGlobalData(self, 'SETGLOBAL', action.options)
				},
			},
			setProfileName: {
				name: 'Set Profile Name',
				options: [
					{
						type: 'textinput',
						label: 'Profile Name',
						id: 'name',
						default: 'Test Profile',
					},
				],
				callback: async (action) => {
					// TODO(Peter): Block/strip colons
					await self.sim.Simulator.updateSendGlobalData(self, 'SETPROFILE', action.options)
				},
			},
			setRegionCount: {
				name: 'Set Region Count',
				options: [
					{
						type: 'textinput',
						label: 'Region Count',
						id: 'count',
						default: '2',
					},
				],
				callback: async (action) => {
					// TODO(Peter): Ensure its a number
					await self.sim.Simulator.updateSendGlobalData(self, 'SETREGIONCOUNT', action.options)
				},
			},
		}

		this.setActionDefinitions(actions)
	},
}
