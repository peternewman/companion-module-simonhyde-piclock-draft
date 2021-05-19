//Test

const instance_skel = require('../../instance_skel');

const net = require('net');

const actions = require('./companion/actions');
const configs = require('./companion/configs');
const vars = require('./src/variables');
const sim = require('./src/simulator');

var enableDestroy = require('server-destroy');
var server = net.createServer(sim.Simulator.handleConnection);

enableDestroy(server);

var client = new net.Socket();
var PORT = 9991;

commanderSettings = [];
buttonSettings = [];

exports.commanderSettings;
exports.buttonSettings;
exports.serverIsActive;
exports.panelIsLocked = false;
exports.client;

class BMDVideoHubControlPanel extends instance_skel {
	
	constructor(system, id, config) {
		super(system, id, config);

		Object.assign(this, {
			...actions,
			...configs
		});

		this.config = config;

		this.initActions();
	}

	init() {
		this.updateConfig();

		exports.serverIsActive = true;
		
		exports.commanderSettings = [
			controllerIP = this.config.controllerIP,
			companionIP = this.config.companionIP,
			companionPort = this.config.companionPort,
		]

		exports.buttonSettings = [
			button1 = [this.config.button1Bank, this.config.button1Button],
			button2 = [this.config.button2Bank, this.config.button2Button],
			button3 = [this.config.button3Bank, this.config.button3Button],
			button4 = [this.config.button4Bank, this.config.button4Button],
			button5 = [this.config.button5Bank, this.config.button5Button],
			button6 = [this.config.button6Bank, this.config.button6Button],
			button7 = [this.config.button7Bank, this.config.button7Button],
			button8 = [this.config.button8Bank, this.config.button8Button],
			button9 = [this.config.button9Bank, this.config.button9Button],
			button10 = [this.config.button10Bank, this.config.button10Button],
			button11 = [this.config.button11Bank, this.config.button11Button],
			button12 = [this.config.button12Bank, this.config.button12Button],
			button13 = [this.config.button13Bank, this.config.button13Button],
			button14 = [this.config.button14Bank, this.config.button14Button],
			button15 = [this.config.button15Bank, this.config.button15Button],
			button16 = [this.config.button16Bank, this.config.button16Button],
			button17 = [this.config.button17Bank, this.config.button17Button],
			button18 = [this.config.button18Bank, this.config.button18Button],
			button19 = [this.config.button19Bank, this.config.button19Button],
			button20 = [this.config.button20Bank, this.config.button20Button],
			button21 = [this.config.button21Bank, this.config.button21Button],
			button22 = [this.config.button22Bank, this.config.button22Button],
			button23 = [this.config.button23Bank, this.config.button23Button],
			button24 = [this.config.button24Bank, this.config.button24Button],
			button25 = [this.config.button25Bank, this.config.button25Button],
			button26 = [this.config.button26Bank, this.config.button26Button],
			button27 = [this.config.button27Bank, this.config.button27Button],
			button28 = [this.config.button28Bank, this.config.button28Button],
			button29 = [this.config.button29Bank, this.config.button29Button],
			button30 = [this.config.button30Bank, this.config.button30Button],
			button31 = [this.config.button31Bank, this.config.button31Button],
			button32 = [this.config.button32Bank, this.config.button32Button],
			button33 = [this.config.button33Bank, this.config.button33Button],
			button34 = [this.config.button34Bank, this.config.button34Button],
			button35 = [this.config.button35Bank, this.config.button35Button],
			button36 = [this.config.button36Bank, this.config.button36Button],
			button37 = [this.config.button37Bank, this.config.button37Button],
			button38 = [this.config.button38Bank, this.config.button38Button],
			button39 = [this.config.button39Bank, this.config.button39Button],
			button40 = [this.config.button40Bank, this.config.button40Button]
		]
		
		try {
			server.listen(9990);
		} catch (error) {
			this.log('error', 'Port is occupied. Are you running another instance of this module? Do you have VideoHub installed on this computer?');
		};

		var HOST = this.config.controllerIP;

		try {
			client.connect(PORT, HOST, function() {
			  console.log('CONNECTED TO: ' + HOST + ':' + PORT);
			  // Write a message to th0 socket a0 soon as the client is connected, th0 server will receive it as message from the client
			  console.log("1");
			});
		  } catch (error) {
			console.log(error);
		  }
		
		

	}

	updateConfig(config) {
		if (config) {
			this.config = config;
		}

		exports.commanderSettings = [
			controllerIP = this.config.controllerIP,
			companionIP = this.config.companionIP,
			companionPort = this.config.companionPort,
		]

		exports.buttonSettings = [
			button1 = [this.config.button1Bank, this.config.button1Button],
			button2 = [this.config.button2Bank, this.config.button2Button],
			button3 = [this.config.button3Bank, this.config.button3Button],
			button4 = [this.config.button4Bank, this.config.button4Button],
			button5 = [this.config.button5Bank, this.config.button5Button],
			button6 = [this.config.button6Bank, this.config.button6Button],
			button7 = [this.config.button7Bank, this.config.button7Button],
			button8 = [this.config.button8Bank, this.config.button8Button],
			button9 = [this.config.button9Bank, this.config.button9Button],
			button10 = [this.config.button10Bank, this.config.button10Button],
			button11 = [this.config.button11Bank, this.config.button11Button],
			button12 = [this.config.button12Bank, this.config.button12Button],
			button13 = [this.config.button13Bank, this.config.button13Button],
			button14 = [this.config.button14Bank, this.config.button14Button],
			button15 = [this.config.button15Bank, this.config.button15Button],
			button16 = [this.config.button16Bank, this.config.button16Button],
			button17 = [this.config.button17Bank, this.config.button17Button],
			button18 = [this.config.button18Bank, this.config.button18Button],
			button19 = [this.config.button19Bank, this.config.button19Button],
			button20 = [this.config.button20Bank, this.config.button20Button],
			button21 = [this.config.button21Bank, this.config.button21Button],
			button22 = [this.config.button22Bank, this.config.button22Button],
			button23 = [this.config.button23Bank, this.config.button23Button],
			button24 = [this.config.button24Bank, this.config.button24Button],
			button25 = [this.config.button25Bank, this.config.button25Button],
			button26 = [this.config.button26Bank, this.config.button26Button],
			button27 = [this.config.button27Bank, this.config.button27Button],
			button28 = [this.config.button28Bank, this.config.button28Button],
			button29 = [this.config.button29Bank, this.config.button29Button],
			button30 = [this.config.button30Bank, this.config.button30Button],
			button31 = [this.config.button31Bank, this.config.button31Button],
			button32 = [this.config.button32Bank, this.config.button32Button],
			button33 = [this.config.button33Bank, this.config.button33Button],
			button34 = [this.config.button34Bank, this.config.button34Button],
			button35 = [this.config.button35Bank, this.config.button35Button],
			button36 = [this.config.button36Bank, this.config.button36Button],
			button37 = [this.config.button37Bank, this.config.button37Button],
			button38 = [this.config.button38Bank, this.config.button38Button],
			button39 = [this.config.button39Bank, this.config.button39Button],
			button40 = [this.config.button40Bank, this.config.button40Button]
		]

		this.status(this.STATUS_OK);
	}

	destroy() {
		server.close();
		server.destroy();
		exports.serverIsActive = false;
	}
}

function discoverSimulatorServer(ip) {
	return tcping.probe(ip, 9990, function(err, available) {
		console.log(available);
	});
}

module.exports = BMDVideoHubControlPanel;
