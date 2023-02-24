const fs = require('fs');

const readDatabase = (path) => Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) reject(Error('Cannot load the database'));
    const fieldArrayObj = data
      .split('\n')
      .map((studentRow) => studentRow.split(','))
      .slice(1)
      .reduce((fieldArray, currentRow) => {
        const field = currentRow[currentRow.length - 1];
        const fName = currentRow[0];
        const noparamreassign = fieldArray;

        if (typeof noparamreassign[field] === 'undefined') noparamreassign[field] = [fName];
        else noparamreassign[field].push(fName);

        return noparamreassign;
      }, {});

    resolve(fieldArrayObj);
  });
});

module.exports = readDatabase;
