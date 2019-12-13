const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

/*
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
*/

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

app.get('/doubling', (req, res) => {
  if (req.query.input !== isNaN) {
    var input = {
      "received": req.query.input,
      "result": req.query.input * 2
    }
  } else if (req.query.input == isNaN) {
    var input = {
      "error": "Please provide an input!"
    }
  }

  res.send(input);
});
