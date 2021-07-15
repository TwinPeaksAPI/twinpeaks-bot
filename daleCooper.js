const axios = require('axios');

async function daleCooperQuote() {
  const response = await axios('https://damp-cove-34137.herokuapp.com/api/quotes/characters/random/Dale%20Cooper')
  return response.data.quoteText
}

module.exports = daleCooperQuote