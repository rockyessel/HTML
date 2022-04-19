const express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 4000;
const cheerio = require('cheerio');

app.get('/', (request, response) => {
  response.json({
    msg: 'It works',
  });
});

const container = [];

axios
  .get('https://www.hellenicshippingnews.com/tag/top-stories/')
  .then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    // console.log(html);

    $(`a:contains("shipping")`, html).each(function () {
      const text = $(this).text();
      const title = text.trim();
      const url = $(this).attr('href');
      container.push({
        title,
        url,
      });
    });
  });

app.get('/shipping-news', (request, response) => {
  response.json(container);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
 