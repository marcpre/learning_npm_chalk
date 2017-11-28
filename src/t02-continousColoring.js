const chalk = require('chalk');
const log = console.log;

async blink
function() {
	while (true) {

		await sleep(3000)
		let randomNumberBetween0and10 = Math.floor(Math.random() * 11);

		if (randomNumberBetween0and10 < 5) {
			chalk.green('Price is good.')
		}
		else {
			chalk.green('Price is bad.')
		}
	}
}

blink()
