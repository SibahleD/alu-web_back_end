import fs from 'fs';

const readDatabase = (filepath) => new Promise((resolve, reject) => {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Canot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    const fields = {};
    for (const student of students) {
      const columns = student.split(',');
      const firstName = columns[0].trim();
      const field = columns[columns.length - 1].trim();

      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    }

    resolve(fields);
  });
});

export default readDatabase;
