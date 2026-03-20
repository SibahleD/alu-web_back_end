import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const dbFile = process.argv[2];
      const fields = await readDatabase(dbFile);

      const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      const lines = ['This is the list of our students'];
      for (const field of sortedFields) {
        const names = fields[field];
        lines.push(
          `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
        );
      }

      res.status(200).send(lines.join('\n'));
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const dbFile = process.argv[2];
      const fields = await readDatabase(dbFile);

      const names = fields[major] || [];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
