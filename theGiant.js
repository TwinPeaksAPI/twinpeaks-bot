const axios = require('axios');

async function theGiantQuote() {
  const response = await axios('https://damp-cove-34137.herokuapp.com/api/quotes/characters/random/The%20Giant')
  return response.data.quoteText
}

module.exports = theGiantQuote