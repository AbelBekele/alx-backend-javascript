const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response, path) {
    readDatabase(path)
      .then((successObj) => {
        const majorsSorted = successObj.keys().sort();
        let outputString = '';

        outputString += 'This is the list of our students\n';
        for (const major of majorsSorted) {
          outputString += `Number of students in ${major}: 6. List: ${successObj[major].join(', ')}\n`;
        }
        outputString = outputString.slice(0, -1);
        response.status(200).send(outputString);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response, path) {
    const { major } = request.params;
    if (!major || major !== 'CS' || major !== 'SWE') response.status(500).send('Major parameter must be CS or SWE');
    else {
      readDatabase(path)
        .then((successObj) => {
          const arrOfStudents = successObj[major].join(', ');
          response.status(200).send(`List: ${arrOfStudents}`);
        })
        .catch(() => response.status(500).send('Cannot load the database'));
    }
  }
}

module.exports = StudentsController;
