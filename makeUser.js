const axios = require('axios');

async function makeUser(id) {
  await axios.post(`https://damp-cove-34137.herokuapp.com/api/auth/signup/${id}`)
}

module.exports = makeUser
