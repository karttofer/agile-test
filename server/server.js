const express = require('express');
const mockProducts = require('./mock.json');
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/get-related', (req, res) => {
  res.json(mockProducts);
});
