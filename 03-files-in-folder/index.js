const fs = require('fs');
const path = require('path');

const secretPath = path.join(__dirname, 'secret-folder');

fs.readdir(secretPath, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    const eachPath = path.join(secretPath, file);
    const name = path.parse(eachPath).name;
    const ext = path.extname(eachPath);

    fs.stat(eachPath, (err, stat) => {
      if (err) console.log(err);

      const sizeBite = stat.size;
      if (stat.isFile()) {
        console.log(`${name} - ${ext} - ${sizeBite} bytes`);
      };
    });
  });
});