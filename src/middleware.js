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
      console.error(chalk.bgRed(`Error: ${err?.message || 'Unknown error'}`));
      console.error(chalk.red(`[Stack]: ${err?.stack || 'No stack trace'}`));

      if (res && typeof res.status === 'function') {
        res.status(500).json({
          error: err?.message || 'Unknown error',
          stack: err?.stack || 'No stack trace',
        });
      } else {
        console.error('OopsWare: Response object is undefined or invalid.');
      }
    } else {
      console.error(chalk.bgRed(`Error: ${err?.message || 'Unknown error'}`));

      if (res && typeof res.status === 'function') {
        res.status(500).json({
          error: 'Something went wrong. Please try again.',
        });
      } else {
        console.error('OopsWare: Response object is undefined or invalid.');
      }
    }
    next();
  };
}

export { OopsWare };
