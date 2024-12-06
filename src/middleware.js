import chalk from 'chalk';
import figlet from 'figlet';
import { getRandomErrorArt } from './art/errorArt.js';

function OopsWare(dev = false) {
  return (err, req, res, next) => {
    if (dev) {
      console.log(
        chalk.red(figlet.textSync('ERROR!', { horizontalLayout: 'default' }))
      );
      console.log(chalk.red(getRandomErrorArt()));
      console.error(chalk.bgRed(`Error: ${err.message}`));
      console.error(chalk.red(`[Stack]: ${err.stack}`));

      res.status(500).json({
        error: err.message,
        stack: err.stack, 
      });
    } else {
      console.error(chalk.bgRed(`Error: ${err.message}`));
      res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
  };
}

export { OopsWare };

