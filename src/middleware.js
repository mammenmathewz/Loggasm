import chalk from 'chalk';
import figlet from 'figlet';
import { getRandomErrorArt } from './art/errorArt.js';

function OopsWare(err, req, res, next) {
  console.log(
    chalk.red(figlet.textSync('ERROR!', { horizontalLayout: 'default' }))
  );

  console.log(chalk.red(getRandomErrorArt()));

  console.error(chalk.bgRed(`Error: ${err.message}`));
  console.error(chalk.red(`[Stack]: ${err.stack}`));

  res.status(500).json({ error: err.message });
}

export { OopsWare };
