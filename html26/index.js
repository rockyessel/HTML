const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (request, response) => {

});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
