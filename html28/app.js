const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const app = express();

const corsOptions = {
  origin: 'https://apis-sandbox.fedex.com/track/v1/associatedshipments',
  optionsSuccessStatus: 200,
};
// @desc middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const fetchAPI = async (url) => {
    const response = await fetch(url, {
      method: 'GET',
      'Content-Type': 'application/json',
      'X-local': 'en_US',
      Authorization: 'Bearer',
    });
    const data = await response.json();
    console.log(data);
  };
  fetchAPI('https://apis-sandbox.fedex.com/track/v1/associatedshipments');
  res.send('hio');
});

app.post('/api', (req, res) => {
  const fetchAPI = async () => {
    const res = await fetch('https://apis-sandbox.fedex.com/oauth/token', {
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const data = await res.json();
    console.log(data);
  };
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
});
