const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

copyDir = () => {
  const pathToOriginal = path.join(__dirname, 'files');
  const pathToCopy = path.join(__dirname, 'files-copy');

  fs.access(pathToCopy, error => {
    if (error) {
      createAndCopyFolder();
      console.log(chalk.bgGreen('Folder created!'));
    } else {
      recopyFiles();
      console.log(chalk.bgRed('Warning! The folder has already been created, files will be overwritten!'));
    }
  });

  function createAndCopyFolder() {
    fs.mkdir(pathToCopy, { recursive: true }, err => {
      if (err) throw err;
      copyFiles();
    });
  };

  function recopyFiles() {
    fs.rm(pathToCopy, { recursive: true, force: true }, (err) => {
      if (err) throw err;
      createAndCopyFolder();
    });
  };

  function copyFiles() {
    fs.readdir(pathToOriginal, (err, files) => {
      if (err) throw err;

      files.forEach(file => {
        const fileOriginal = path.join(pathToOriginal, file);
        const fileCopy = path.join(pathToCopy, file);

        fs.copyFile(fileOriginal, fileCopy, err => {
          if (err) throw err;
          console.log(chalk.green(`${file} - Copy completed.`));
        });
      });
    });
  };

};
copyDir();





// fs.readdir(pathToCopy, (err, files) => {
//   if (err) throw err;

//   files.forEach(file => {
//     const fileCopy = path.join(pathToCopy, file);

//     fs.unlink(fileCopy, err => {
//       if (err) throw err;

//     });
//   });

//   copyFiles();
// });