const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');
const colors = require('colors');

const getFormattedValue = require('./helpers/get-formatted-currency');

const allowedCurrencies = ['real', 'dollar', 'eur'];

(async () => {
  console.log('### Currency Bot Conversor 🤖💰 ###'.blue.bold.bgWhite);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const baseCurrency = readlineSync.question(`[*] Type the desired currency to convert [${allowedCurrencies}]: `) || 'dolar';
  const finalCurrency = readlineSync.question(`[*] Type the desired final currency [${allowedCurrencies}]: `) || 'real';

  const url = `https://www.google.com/search?q=${baseCurrency}+to+${finalCurrency}`;

  await page.goto(url);

  const convertedCurrency = await page.evaluate(() => {
    const queryValue = document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    return Number(queryValue);
  });

  console.log(`[#] The value of 1 ${baseCurrency.green} in ${finalCurrency.green} is ${getFormattedValue(convertedCurrency, finalCurrency).green}`);

  await browser.close();

})();






