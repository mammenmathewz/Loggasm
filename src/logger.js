import chalk from 'chalk';
import figlet from 'figlet';
import { getRandomLogArt } from '../src/art/logArt.js';

function oopsPrint(message, options = {}) {
  
  if (options.heading) {
    console.log(chalk.green(getRandomLogArt()));
    const figletMessage = figlet.textSync(options.heading, { horizontalLayout: 'default' });
    console.log(chalk.blueBright(figletMessage));
  }
  console.log(chalk.yellow(`[Message]: ${message}`));

  if (options.details) {
    console.log(chalk.gray(`[Details]: ${JSON.stringify(options.details)}`));
  }
}

export { oopsPrint };
