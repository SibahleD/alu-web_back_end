const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1); // Remove header row

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    for (const student of students) {
      const columns = student.split(',');
      const firstName = columns[0];
      const field = columns[columns.length - 1];

      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    }

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

    resolve();
  });
});

module.exports = countStudents;