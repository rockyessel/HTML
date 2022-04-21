const express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 4000;
const cheerio = require('cheerio');
const latinize = require('latinize');

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
      native_name: name,
      eng_name: latinize(name),
      slug_name: latinize(
        name
          .trim()
          .toLowerCase()
          .replace(/ /g, '-')
          .replaceAll('.', '')
          .toString()
      ),
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
app.get('/author/:quotes', (request, response) => {
  const { quotes } = request.params;

  const individualName = latinize(
    quotes.trim().toLowerCase().replace(/ /g, '-').replace('.', '').toString()
  );
  let num;
  const address = `https://quotepark.com/authors/${individualName}/`;

  const searchAuthor = [];

  axios.get(address).then((res) => {
    const { data: $html } = res;
    const $ = cheerio.load($html);

    $('.col-lg-8').each(function () {
      const $h1 = $(this).find('h1').text();
      const $name = $(this).find('.col-sm-6').find('.media-heading').text();
      const $img = $(this)
        .find('.col-sm-6')
        .find('div')
        .find('img')
        .attr('src');
      const $description = $(this)
        .find('.col-sm-12')
        .find('.readmore')
        .find('p')
        .text();
      const $quotes = $(this)
        .find('.quote')
        .find('.blockquote')
        .find('.blockquote-text')
        .text()
        .replaceAll('„', '|')
        .replaceAll('“', '')
        .split('|');
      const $number =
        Number($(this).find('.text-center').find('progress').attr('max')) / 20;

      const random = Math.floor(Math.random() * Math.ceil($number));
      // num.push(random);

      searchAuthor.push({
        author_details: {
          header: $h1,
          name: $name,
          img: `${url.base}${$img}`,
          bio: $description,
        },
        quotes: {
          quotes_content: $quotes,
          author: $name,
          number_of_pages: Math.ceil($number),
        },
      });
      response.json(searchAuthor);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
