const express = require('express');
const app = express();

const port = 3034;
app.get('/', (req, res) => {
  res.send("message")
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});