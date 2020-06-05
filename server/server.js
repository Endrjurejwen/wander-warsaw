const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'hello form the other side',
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
