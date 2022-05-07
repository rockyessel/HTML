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
  fetchAPI('https://apis-sandbox.fedex.com/');
  res.send('hio');
});

app.get('/api', (req, res) => {
  let arr = [];
  const fetchAPI = async () => {
    const res = await fetch('https://apis-sandbox.fedex.com/oauth/token', {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-locale': 'en_US',
      Authorization: 'Bearer ',
    });

    const data = await res.json();
    arr.push(data);
    console.log(data);
  };
  fetchAPI();
  res.json(arr);
});


app.post('/api', (req, res) => {
  let arr = [];
  const fetchAPI = async () => {
    const res = await fetch(
      'https://apis-sandbox.fedex.com/track/v1/associatedshipments',
      {
        headers: {
          'Content-Type': 'applicaton/json',
          'X-locale': 'en_US',
          Authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJDWFMiLCJTRUNVUkUiXSwiUGF5bG9hZCI6ImFLcEpEZEJ1MXN4WmY3bEpFOUxxd2g3OEFCZ3FCSzcxa2hvdkRnWHpWWUx6bC9mWXZUc1VyemJpL3g3M1R5YThEa2FVbnN1N2FYeUFYZ1FXb3FpUXdJV21tTXo3R2hUZldRT3VBbCtoWm1OSnpXSVAwQlF4UlFsN0FCMjJOdUNwZHVnNTNuV0d0RzVFQTltR3lET2NCcityeSswMkpUd0c4R3RDS1BYa05uRHY4WHJGSU90ajlVbXNRaGJqeG93SzQxS3dzSWVIcWdzYzFQRllqNnA3Q0RVeHY5Y0hzMEIzdnV3cUlRbXFiSlBSVVAyaWljS1JyY3RYTHczOWZqdFZXTHVud1FHZ0xtYk5YMWVyb21oSVEvaHJRQzZMWTJwTHd0bGFaRkdRVzNFPSIsImV4cCI6MTY1MTk2ODkzNSwianRpIjoiNjA1MmJiMjQtNjJlZC00YzU1LTgwMjAtNDFiM2YxMDQzOWVhIiwiY2xpZW50X2lkIjoibDcwMDQ2ZTExMzE0YTk0YmI1YWZkZGNiYjRhZGYwZmQxOSJ9.QbIsTfH_R9oGbHbMd90wicZJBPxuGiS6nQKn6ap0NZyKLEVUXOS9MZydswOHIhjVdccs4x0x1I8poOGJmYnL2Arnr54DqPareZyQesxBfKU8hcOfvdR6QwqKyD7QWpHtBj53tZlJvFi9U-sccaR8W2FsWJa-jVu2VEX14LJ4U8PsGopG9WnHoraGq02YcREhpQDxtpqGZtEIPRD9LAAkuQBewvQxxEorHi3qNY5mLoYAkFkiqk3M3YNi15B_kja91n1xDaDgKAAsngFOnXgRTqVFh6RZTqT9jLKKVfUxjoS9_sTegLWx2zpCKZddr_cF12knnfdChkbkPP86iY-_vozc8E8key6cA4C2eb0_mVFk9kCcVfrnbSIMr4R7A4evS8rVyCXTzKWIIAX4b5STttQcv0BqAZCreCfgt-lIvaOxmXhlTIXBhCxw3SKgPnTyLfUQ4T2tf7OToh2toDeOxc0YjLzGZNYCvWmwBH-cEVxObk3UcC9fnFX4C6iF0TfGOofcqWD5bAtCqefm47AXaieqDO0wQ3NOGf5eIZTD08_o_-QOqMgbUggo7pTVFLkRJ_v454V4yb7KxpzUyUgF746gm5PrjSORg0mXPySjCL2wevzM_x5dxMYNgAyoQHgg2u0y-u8saaMlG5HgJr8St08L7VRJlFrjR-T5OdFW-xM',
        },
      }
    );

    const data = await res.json();
    arr.push(data);
    console.log(data);
  };
  fetchAPI();
  res.json(arr);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
});
