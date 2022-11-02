const fs = require('fs');
const path = require('path');

const styles = path.join(__dirname, 'styles');
const bundle = path.join(__dirname, 'project-dist', 'bundle.css')

function createBundle() {
  fs.writeFile(bundle, '', err => {
    if (err) throw err;
  });
  console.log(`Bundle created`);
};
createBundle();

function searchCSS() {
  fs.readdir(styles, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      const pathFile = path.join(styles, file);
      if (path.extname(pathFile) === '.css') {
        console.log(`--CSS file founded ${file}`);
        readAndFill(pathFile);
      }
    });
  });
};
searchCSS();

function readAndFill(file) {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(`----Read file ${file}`)
    fillBundle(data);
  });
};

function fillBundle(data) {
  fs.appendFile(bundle, `${data}\n`, err => {
    if (err) throw err;
    // console.log(data);
  });
};