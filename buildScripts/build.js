/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
      console.log(chalk.red(`${jsonStats.errors.length} ERRORS:`));
      jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
      console.log(chalk.yellow(`${jsonStats.errors.length} WARNINGS:`));
      jsonStats.errors.map(error => console.log(chalk.yellow(error)));
    }

    console.log(`Webpack Stats: ${stats}`);
    console.log(chalk.green('Webpack build completed in /dist'));
    return 1;
  }
  console.log(chalk.green('Production Build Successfull...'));
});
