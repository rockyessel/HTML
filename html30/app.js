const express = require('express');
const axios = require('axios');
const PORT = process.env.PORT || 4000;

const app = express();

const url = 'https://api.paystack.co/charge/submit_otp';

app.post('/mobile', (request, response) => {
  console.log(response.params);

  const { pin, reference } = response.params;
  console.log(`${(pin, reference)}`);

  const obj = { pin, reference };

  const posts = async () => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
      },
      body: JSON.stringify(obj),
    });

    const data = await response.json();
    console.log(data);
  };
  posts();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
