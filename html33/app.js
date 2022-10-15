const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const PORT = 4000;

const app = express();

let linkArr = [];
let dataTitle = [];

const getData = async () => {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/business?page=${i}&api-key=062dbc77-1e5d-4f2e-942c-db2dc97a8f22`
    );

    let pushData = response.data.response.results.map((s) => s.webUrl);

    linkArr.push(pushData);

    console.log(linkArr);

    console.log(response.data.response.results.map((s) => s.webUrl));
    return linkArr;
  } catch (error) {
    console.error(error);
  }
};

app.get('/', async function (req, res) {
  const data = await getData();

  res.json(data);
});

app.get('/news/:number', async function (req, res) {
  try {
    const number = req.params.number;

    let getAllData = [];

    console.log('number: ', number);

    const response = await axios.get(
      `https://content.guardianapis.com/business?page=${number}&api-key=062dbc77-1e5d-4f2e-942c-db2dc97a8f22`
    );

    const pushData = response.data.response.results.map((s) => {
      return { url: s.webUrl };
    });

    const responseAll = await Promise.allSettled(
      pushData.map(async (url) => {
        axios.get(url.url).then((information) => {
          const { data: html } = information;
          const $ = cheerio.load(html);
          let allInfo = [];

          $('main', html).each(function () {
            const title = $(this).find('h1').text();
            allInfo.push({ title });
            console.log('allInfo', allInfo);
          });
          const { title: on } = allInfo;
        });
        res.json(on);
      })
    );

    console.log('responseAll', responseAll);
  } catch (error) {
    console.log({
      error: error.message || error,
    });
  }
});

app.get('/aljazeera', async function (req, res) {
  const data = await axios.get(`https://www.aljazeera.com/tag/entertainment/`);

  res.json(JSON.stringify(data.data));
});

app.get('/info', async function (req, res) {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/business?page=1&api-key=062dbc77-1e5d-4f2e-942c-db2dc97a8f22`
    );

    let pushData = response.data.response.results.map((s) => s.webUrl)[0];

    await axios.get(`${pushData}`).then((information) => {
      const { data: html } = information;
      const $ = cheerio.load(html);

      $('main', html).each(function () {
        const title = $(this).find('h1').text();
        // .find('article')
        // .find('div.dcr-1s837k5')
        // .find('div.dcr-1nupfq9')
        // .find('div.dcr-13a2edo')
        // .find('h1.dcr-125vfar')
        // .text();

        dataTitle.push({ title });
      });

      res.status(200).json(dataTitle);
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`ready`);
});
