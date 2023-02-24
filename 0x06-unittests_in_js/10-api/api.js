const express = require('express');
const app = express();

const PORT = 7865;
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.status(200).send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const info = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.status(200).send(info);
});

app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
})

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
