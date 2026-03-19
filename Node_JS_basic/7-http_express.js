const express = require('express')
const countStudents = require('./3-read_file_async')
const app = express()
const port = 1245

app.get('/', (req, res) => {
  res.send(' Hello Holberton School!')
})

app.get('/students', (req, res) => {
  res.send(' This is the list of our students')
  res.send(countStudents('database.csv'))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
