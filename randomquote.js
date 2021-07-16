const axios = require('axios');

async function randomQuote() {
  const response = await axios('https://damp-cove-34137.herokuapp.com/api/quotes/random')
  return response.data
}
module.exports = randomQuote