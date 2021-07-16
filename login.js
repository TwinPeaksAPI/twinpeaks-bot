const axios = require('axios');

async function loginFunction(user) {

  await axios.post(`https://damp-cove-34137.herokuapp.com/api/auth/login/${user}`);

}

module.exports = loginFunction
