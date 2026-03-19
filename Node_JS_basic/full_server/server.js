const express = require('express')
const app = express()
const port = 1245

app.use('/', router)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

export default app;
