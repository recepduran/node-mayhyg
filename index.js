// run `node index.js` in the terminal

const express = require('express');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('merhabalar olsun');
});

app.listen(process.env.PORT, () => {
  console.log('started nodu');
});
