module.exports = {
	initVariables: function () {
		let self = this

		let variables = []

		// TODO(Peter): Implement this
		//variables.push({ variableId: 'clockCount', name: 'Number of connected clocks' })

		self.setVariableDefinitions(variables)
	},

	checkVariables: function () {
		let self = this

		try {
			self.setVariableValues({
				//clockCount: self.sim.Simulator.sockets
			})
		} catch (error) {
			self.log('error', 'Error setting variables: ' + error)
		}
	},
}
