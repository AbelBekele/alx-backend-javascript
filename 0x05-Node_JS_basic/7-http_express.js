const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => res.send('Hello Holberton School!'));
app.get('/students', ((req, res) => {
  countStudents(process.argv[2])
    .then((v) => {
      res.writeHead(200);
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${v.counter}\n`);
      let len = 0;
      for (const key in v.inFields) {
        if (Object.prototype.hasOwnProperty.call(v.inFields, key)) {
          res.write(`Number of students in ${key}: ${v.inFields[key].counter}. List: ${v.inFields[key].students}`);
          if (len !== Object.keys(v.inFields).length - 1) res.write('\n');
          len += 1;
        }
      }
      res.end();
    })
    .catch(() => {
      res.write('This is the list of our students\n');
      res.status(404).end('Cannot load the database');
    });
}));

app.listen(port);

module.exports = app;