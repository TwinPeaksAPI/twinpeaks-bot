const axios = require('axios');

async function sheriffTrumanQuote() {
  const response = await axios('https://damp-cove-34137.herokuapp.com/api/quotes/characters/random/Sheriff%20Truman')
  return response.data.quoteText
}

module.exports = sheriffTrumanQuote