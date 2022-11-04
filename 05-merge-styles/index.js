const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const styles = path.join(__dirname, 'styles');
const bundle = path.join(__dirname, 'project-dist', 'bundle.css');

function createBundle() {
  fs.writeFile(bundle, '', err => {
    if (err) throw err;
  });
  console.log(chalk.green(`Bundle created.`));
};
createBundle();

function searchCSS() {
  fs.readdir(styles, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      const pathFile = path.join(styles, file);
      if (path.extname(pathFile) === '.css') {
        console.log(chalk.yellow(`--CSS file founded ${file}`));
        readAndFill(pathFile, file);
      };
    });
  });
};
searchCSS();

function readAndFill(file, name) {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(chalk.cyan(`----Read file ${name}`));
    fillBundle(data, name);
  });
};

function fillBundle(data, name) {
  fs.appendFile(bundle, `${data}\n`, err => {
    if (err) throw err;
    console.log(chalk.green(`------Record file ${name}`));
  });
};