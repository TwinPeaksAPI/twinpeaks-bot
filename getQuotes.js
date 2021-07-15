const axios = require('axios');

async function getQuotes(id) {
  const response = await axios(`https://damp-cove-34137.herokuapp.com/api/users${id}`)
  return response.data
}

module.exports = getQuotes