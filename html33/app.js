const express = require('express');
const axios = require('axios');
const PORT = 4000;

const app = express();

const getData = async () => {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/business?page=1&api-key=062dbc77-1e5d-4f2e-942c-db2dc97a8f22`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

app.get('/', async function (req, res) {
  const data = await getData();

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`ready`);
});
