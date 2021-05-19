var configurator = require('../configurator');

module.exports = {
	initActions() {
		const actions = {
			'flash': {
				label: 'Flash Controller',
				options: []
			},
			'unlock': {
				label: 'Unlock Controller',
				options: []
			},
			'lock': {
				label: 'Lock Controller',
				options: []
			},
			'sendConfig': {
				label: 'Send Config To Controller',
				options: []
			}
		};
	
		this.setActions(actions);
	},
	
	action(action) {
		if (this.config.controllerIP) {
	
			switch (action.action) {
				case 'flash':
					console.log("Flashing");
					break;
				case 'sendConfig':
					console.log("Unlocking");
					try {
						configurator.setButtonTypeSource(this.config.controllerIP);
					} catch (error) {
						this.log('error', 'There was an error sending the configuration to the device. Are you alredy connected to it with VideoHub Hardware Configuration Software?')
					}
					break;
				case 'lock':
					console.log("locking");
					break;
			}

		}
	}	
}
