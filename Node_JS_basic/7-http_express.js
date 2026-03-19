const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    const output = [`Number of students: ${students.length}`];

    const fields = {};
    for (const student of students) {
      const columns = student.split(',');
      const firstName = columns[0];
      const field = columns[columns.length - 1].trim();

      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    }

    for (const [field, names] of Object.entries(fields)) {
      output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

    resolve(output.join('\n'));
  });
});

app.get('/students', async (req, res) => {
  try {
    const result = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${result}`);
  } catch (err) {
    res.send(`This is the list of our students\n${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
