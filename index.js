const fs = require('fs');
const path = require('path');

module.exports = fs.readdirSync(__dirname)
  .filter(fileName => path.extname(fileName) === '.xml')
  .map((fileName) => {
    return `${__dirname}/${fileName}`;
  });
