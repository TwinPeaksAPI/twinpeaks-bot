const axios = require('axios');

async function logLadyQuote() {
  const response = await axios('https://damp-cove-34137.herokuapp.com/api/quotes/characters/random/Log%20Lady')
  return response.data.quoteText
}

module.exports = logLadyQuote