const express = require('express');
const cors = require('cors');
const axios = require('axios');
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

app.post('/auth/token', (req, res) => {
  const { input } = req.body;

  const data = JSON.stringify(input);

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function() {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open('POST', 'https://apis-sandbox.fedex.com/oauth/token');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(data);
});

// app.post('/api', (req, res) => {
//   const { trackingNumber, shipDateBegin } = req.body;
//   const masterTrackingNumberInfo = {
//     trackingNumber,
//     shipDateBegin,
//   };
//   console.log(trackingNumber);
//   const posts = async () => {
//     const response = await fetch(
//       'https://apis-sandbox.fedex.com/track/v1/associatedshipments',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-locale': 'en-US',
//           Authorization: `Bearer ${process.env.TOKEN}`,
//         },
//         body: JSON.stringify(masterTrackingNumberInfo),
//       }
//     );

//     const data = await response.json();
//     console.log(data);
//   };
//   posts();
// });

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
});
