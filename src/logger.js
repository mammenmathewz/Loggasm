import chalk from 'chalk';
import figlet from 'figlet';
import { getRandomLogArt } from '../src/art/logArt.js';

function OopsPrint(message, options = {}) {
  console.log(chalk.green(getRandomLogArt()));
  console.log(
    chalk.blueBright(figlet.textSync('LOG-MESSAGE', { horizontalLayout: 'default' }))
  );
  console.log(chalk.yellow(`[Message]: ${message}`));

  if (options.details) {
    console.log(chalk.gray(`[Details]: ${JSON.stringify(options.details)}`));
  }
}

export { OopsPrint };

