const fs = require('fs');
const path = require('path');
const readline = require('readline');
const chalk = require('chalk');

const newFile = path.join(__dirname, 'text.txt');
fs.writeFile(newFile, '', (err) => {
  if (err) throw err
  console.clear();
  console.log(chalk.blue('Please enter the text:'));
});


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', answer => {
  if (answer === 'exit') doExit();
  fs.appendFile(newFile, `${answer}\n`, (err) => {
    if (err) throw err;
  });
}).on('close', doExit);

function doExit() {
  console.log(chalk.red(`Thanks for testing. Everything works. I'm happy.`));
  process.exit(0);
}