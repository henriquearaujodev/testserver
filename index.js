const express = require('express')

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'Hello World'
  })
})

app.listen(80, () => console.log('Server running'))