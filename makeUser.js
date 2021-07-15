const axios = require('axios');

async function makeUser(id) {
  const response = await axios(`https://damp-cove-34137.herokuapp.com/api/auth/signup/${id}`)
  return response.body
}

module.exports = makeUser
