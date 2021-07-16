const axios = require('axios');

async function getQuotes(id) {
  const response = await axios(`https://damp-cove-34137.herokuapp.com/api/users/${id}`)

  const results = response.data;

  const quoteArray = results.map(quote => quote.quoteText + '----! End of Quote ----!')

  return quoteArray
}

module.exports = getQuotes