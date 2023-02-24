const app = require('express')();

const PORT = 7865;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
