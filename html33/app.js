const express = require('express');
const axios = require('axios');
const { load } = require('cheerio');
const PORT = 4000;

const app = express();

app.get('/where/:country_name', async (req, res) => {
  const { country_name } = req.params;

  let country_data = [];

  const url = `https://www.aljazeera.com/where/${country_name}`;

  const { data: html } = await axios.get(`${url}`);
  const $ = load(html);

  $('main.container--section-top-grid', html).each(function () {
    const $this = $(this);
    const title = $this.find('.featured-articles-list').find('h3').text();
    const url = $this.find('div.gc__content').find('a').attr();

    country_data.push({ title, url });

    console.log(country_data);
    res.json(country_data);
  });
});

app.listen(PORT, () => {
  console.log('Ready');
});
