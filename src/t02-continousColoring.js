const chalk = require('chalk');
const log = console.log;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function blink() {
	while (true) {

		await sleep(3000)
		let randomNumberBetween0and10 = Math.floor(Math.random() * 11);

		if (randomNumberBetween0and10 < 5) {
			log(chalk.white.bgGreen('Price is good.'))
		}
		else {
			log(chalk.white.bgRed('Price is bad.'))
		}
	}
}

blink()
