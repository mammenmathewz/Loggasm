import chalk from 'chalk';
import figlet from 'figlet';
import { getRandomLogArt } from '../src/art/logArt.js';

function oopsPrint(message, options = {}) {
  const heading = options.heading || 'LOG-MESSAGE';

  const figletMessage = figlet.textSync(heading, { horizontalLayout: 'default' });

  console.log(chalk.green(getRandomLogArt()));
  console.log(chalk.blueBright(figletMessage)); 
  console.log(chalk.yellow(`[Message]: ${message}`));

  if (options.details) {
    console.log(chalk.gray(`[Details]: ${JSON.stringify(options.details)}`));
  }
}

export { oopsPrint };
