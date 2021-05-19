const { includes } = require("lodash");

const choicesfile = require('./choices');



module.exports = {
	config_fields() {
		return [
			{
				type: 'text',
				id: 'info',
				width: 12,
				label: '',
				value: 'IP Settings'
			},
			{
				type: 'textinput',
				id: 'controllerIP',
				label: 'Videohub Controller IP',
				width: 6,
				default: '192.168.1.50',
				regex: this.REGEX_IP
			},
			{
				type: 'textinput',
				id: 'companionIP',
				label: 'Companion Instance IP',
				width: 6,
				default: '127.0.0.1',
				regex: this.REGEX_IP
			},
			{
				type: 'textinput',
				id: 'companionPort',
				label: 'Companion Instance Port',
				width: 6,
				default: '8888',
				regex: this.REGEX_PORT
			},
			{
				type: 'text',
				id: 'info',
				width: 12,
				label: '',
				value: 'Button Configuration'
			},
			{
				type: 'dropdown',
				id: 'button1Bank',
				label: 'Button 1',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button1Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button2Bank',
				label: 'Button 2',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button2Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button3Bank',
				label: 'Button 3',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button3Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button4Bank',
				label: 'Button 4',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button4Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button5Bank',
				label: 'Button 5',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button5Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button6Bank',
				label: 'Button 6',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button6Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button7Bank',
				label: 'Button 7',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button7Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button8Bank',
				label: 'Button 8',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button8Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button9Bank',
				label: 'Button 9',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button9Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button10Bank',
				label: 'Button 10',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button10Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button11Bank',
				label: 'Button 11',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button11Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button12Bank',
				label: 'Button 12',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button12Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button13Bank',
				label: 'Button 13',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button13Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button14Bank',
				label: 'Button 14',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button14Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button15Bank',
				label: 'Button 15',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button15Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button16Bank',
				label: 'Button 16',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button16Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button17Bank',
				label: 'Button 17',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button17Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button18Bank',
				label: 'Button 18',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button18Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button19Bank',
				label: 'Button 19',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button19Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button20Bank',
				label: 'Button 20',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button20Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button21Bank',
				label: 'Button 21',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button21Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button22Bank',
				label: 'Button 22',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button22Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button23Bank',
				label: 'Button 23',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button23Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button24Bank',
				label: 'Button 24',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button24Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button25Bank',
				label: 'Button 25',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button25Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button26Bank',
				label: 'Button 26',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button26Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button27Bank',
				label: 'Button 27',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button27Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button28Bank',
				label: 'Button 28',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button28Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button29Bank',
				label: 'Button 29',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button29Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button30Bank',
				label: 'Button 30',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button30Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button31Bank',
				label: 'Button 31',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button31Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button32Bank',
				label: 'Button 32',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button32Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button33Bank',
				label: 'Button 33',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button33Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button34Bank',
				label: 'Button 34',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button34Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button35Bank',
				label: 'Button 35',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button35Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button36Bank',
				label: 'Button 36',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button36Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button37Bank',
				label: 'Button 37',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button37Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button38Bank',
				label: 'Button 38',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button38Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			{
				type: 'dropdown',
				id: 'button39Bank',
				label: 'Button 39',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button39Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},{
				type: 'dropdown',
				id: 'button40Bank',
				label: 'Button 40',
				default: '100',
				width: 6,
				choices: choicesfile.bankchoices
			},
			{
				type: 'dropdown',
				id: 'button40Button',
				default: '100',
				label: '',
				width: 6,
				choices: choicesfile.buttonChoices
			},
			
		];
	}	
}







