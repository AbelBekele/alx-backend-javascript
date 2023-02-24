const fs = require('fs');

const countStudents = (path) => {
  try {
    // Pull data from CSV file
    const fileData = fs.readFileSync(path, 'utf8')
      .split('\n')
      .filter((row) => row !== '')
      .map((student) => student.split(','))
      .slice(1)
      .reduce((total, currentVal) => {
        const eslint = total;
        const subj = currentVal[currentVal.length - 1];
        const firstName = currentVal[0];

        if (typeof eslint[subj] === 'undefined') eslint[subj] = [firstName];
        else eslint[subj].push(firstName);

        return eslint;
      }, {});

    // Prepare Print Statements
    let totalStudents = 0;
    let output = '';

    for (const field in fileData) {
      if (fileData.hasOwnProperty) {
        totalStudents += fileData[field].length;
        output += `Number of students in ${field}: ${fileData[field].length}. List: ${fileData[field].join(', ')}\n`;
      }
    }

    // Print necessary print statements
    console.log(`Number of students: ${totalStudents}`);
    const p = output.split('\n').slice(0, -1);
    for (const str of p) console.log(str);
  } catch (e) {
    throw Error('Cannot load the database');
  }
};
module.exports = countStudents;
