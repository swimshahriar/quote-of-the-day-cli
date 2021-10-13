#!/usr/bin/env node
const chalk = require('chalk');
const axios = require('axios');

const BASE_URL = 'https://quotes.rest/qod';

// fetching data from api
(async () => {
  try {
    const res = await axios.get(BASE_URL);
    const { quote, author } = res.data.contents.quotes[0];

    const log = chalk.green(`${quote} - ${author}`);
    console.log(log);
  } catch (error) {
    const log = chalk.red(error.response.data.error.message);
    console.log(log);
  }
})();
