const puppeteer = require('puppeteer');
const fs = require('fs/promises');

async function start() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('https://learnwebcode.github.io/practice-requests/');
  //   Taking screenshot with puppeteer
  //   await page.screenshot({ path: 'amazing.png' });

  const names = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.info strong')).map(
      (x) => x.textContent
    );
  });
  await fs.writeFile('Names.txt', names.join('\r\n'));

  await browser.close();
}

start();
