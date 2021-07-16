const axios = require('axios');

async function addQuote(quote, user) {

  await axios({
    method: 'post',
    url: `https://damp-cove-34137.herokuapp.com/api/users/add/${user}`,
    data: {
      quotesId: quote
    }
  });

}

module.exports = addQuote