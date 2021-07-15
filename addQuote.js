const axios = require('axios');

async function addQuote(id) {
  const response = await axios(`https://damp-cove-34137.herokuapp.com/api/users/add/${id}`)
  return 'quote added'
}

module.exports = addQuote