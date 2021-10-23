const express = require('express')

const createServer = () => {
  const app = express()
  const port = 3001
  app.listen(port, () => {
    console.log(`Server connected in the port ${port}`)
  })
}

module.exports = createServer