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

// Quotes
const quoteNumbers = [];
for (let i = 1; i <= 100; i++) {
  quoteNumbers.push(i);
}
const quoteRandomNumber = Math.floor(
  Math.random() * quoteNumbers.length
).toString();

// Author
const authorNumbers = [];
for (let i = 1; i <= 20; i++) {
  authorNumbers.push(i);
}
const authorRandomNumber = Math.floor(
  Math.random() * authorNumbers.length
).toString();

const url = {
  quotes: `https://quotepark.com/quotes/recently-liked/?page=${quoteRandomNumber}`,
  author: `https://quotepark.com/authors/?page=${authorRandomNumber}`,
  author_qoutes: '',
  base: 'https://quotepark.com',
};

//Quote
const quotes = [];
axios.get(url.quotes).then((res) => {
  const html = res.data;
  const $ = cheerio.load(html);

  $('.quote-body', html).each(function () {
    const text = $(this).find('.blockquote-text').find('a').text();
    const quoteContent = text.trim();
    const quoteSource = $(this)
      .find('.blockquote')
      .find('.blockquote-text')
      .find('a')
      .attr('href');
    const authorThumbnail = $(this)
      .find('.quote-thumbnail')
      .find('.lazy')
      .attr('data-src');
    const authorLink = $(this).find('.quote-thumbnail').attr('href');
    const authorName = $(this)
      .find('.blockquote')
      .find('.blockquote-origin')
      .find('a')
      .text();
    const quoteTags = {
      link: $(this).find('._gtm_quote_tag').first().attr('href'),
      tags: $(this).find('._gtm_quote_tag').text().trim().split(' '),
    };
    quotes.push({
      quoteContent,
      quoteSource: `${url.base}${quoteSource}`,
      authorLink: `${url.base}${authorLink}`,
      authorName,
      authorThumbnail: `${url.base}${authorThumbnail}`,
      quoteTags: {
        link: `${url.base}${quoteTags.link}`,
        tags: quoteTags.tags,
      },
    });
  });
});
app.get('/quotes', (request, response) => {
  response.json(quotes);
});

//Author
axios.get(url.author).then((res) => {
  const html = res.data;
  const $ = cheerio.load(html);

  $('.media-author', html).each(function () {
    const name = $(this)
      .find('.media-body')
      .find('.media-author-name')
      .find('a')
      .text();
    const authorLink = $(this)
      .find('.media-body')
      .find('.media-author-name')
      .find('a')
      .attr('href');
    const image_thumbnail = $(this)
      .find('.media-author-img')
      .find('img')
      .attr('data-src');
    author.push({
      name,
      authorLink: `${url.base}${authorLink}`,
      image_thumbnail: `${url.base}${image_thumbnail}`,
    });
  });
});
const author = [];
app.get('/author', (request, response) => {
  response.json(author);
});

// Specific Author Quotes

app.get('/author_quote', (request, response) => {
  const name = [...author];
  console.log(name);
  const authorIndividualQuotes = name.map((individual) =>
    individual.name
      .toLowerCase()
      .trim()
      .replace(/ /g, '-')
      .replace('.', '')
      .replace(/[\u0300-\u036f]/g, '')
  );
  response.json(authorIndividualQuotes);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
