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
			setAnalogueClock: {
				name: 'Set Analogue Clock',
				options: [
					{
						type: 'dropdown',
						label: 'Analogue Clock',
						id: 'analogue_clock',
						choices: [
							{ id: 1, label: 'On' },
							{ id: 0, label: 'Off' },
						],
						default: 1,
					},
					{
						type: 'dropdown',
						label: 'Analogue Clock Local',
						id: 'analogue_clock_local',
						choices: [
							{ id: 1, label: 'Yes' },
							{ id: 0, label: 'No' },
						],
						default: 1,
					},
					{
						type: 'dropdown',
						label: 'Analogue Clock Numbers Present',
						id: 'numbers_present',
						choices: [
							{ id: 1, label: 'Yes' },
							{ id: 0, label: 'No' },
						],
						default: 1,
					},
					{
						type: 'dropdown',
						label: 'Analogue Clock Numbers Location',
						id: 'numbers_outside',
						choices: [
							{ id: 1, label: 'Outside' },
							{ id: 0, label: 'Inside' },
						],
						default: 1,
					},
				],
				callback: async (action) => {
					await self.sim.Simulator.updateSendGlobalData(self, 'SETLAYOUT', action.options)
				},
			},
			setDigitalClockUtc: {
				name: 'Set Digital Clock UTC',
				options: [
					{
						type: 'dropdown',
						label: 'Digital Clock UTC',
						id: 'digital_clock_utc',
						choices: [
							{ id: 1, label: 'On' },
							{ id: 0, label: 'Off' },
						],
						default: 0,
					},
				],
				callback: async (action) => {
					await self.sim.Simulator.updateSendGlobalData(self, 'SETLAYOUT', action.options)
				},
			},
			setDigitalClockLocal: {
				name: 'Set Digital Clock Local',
				options: [
					{
						type: 'dropdown',
						label: 'Digital Clock Local',
						id: 'digital_clock_local',
						choices: [
							{ id: 1, label: 'On' },
							{ id: 0, label: 'Off' },
						],
						default: 1,
					},
				],
				callback: async (action) => {
					await self.sim.Simulator.updateSendGlobalData(self, 'SETLAYOUT', action.options)
				},
			},
			setDate: {
				name: 'Set Date',
				options: [
					{
						type: 'dropdown',
						label: 'Date',
						id: 'date',
						choices: [
							{ id: 1, label: 'On' },
							{ id: 0, label: 'Off' },
						],
						default: 1,
					},
					{
						type: 'dropdown',
						label: 'Date Local',
						id: 'date_local',
						choices: [
							{ id: 1, label: 'Yes' },
							{ id: 0, label: 'No' },
						],
						default: 1,
					},
				],
				callback: async (action) => {
					await self.sim.Simulator.updateSendGlobalData(self, 'SETLAYOUT', action.options)
				},
			},
		}

		this.setActionDefinitions(actions)
	},
}
