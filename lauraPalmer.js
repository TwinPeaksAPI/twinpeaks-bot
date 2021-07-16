const axios = require('axios');

async function lauraPalmerQuote() {
  const response = await axios('https://damp-cove-34137.herokuapp.com/api/quotes/characters/random/Laura%20Palmer')
  return response.data
}

module.exports = lauraPalmerQuote