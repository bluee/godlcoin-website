// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const axios = require('axios')

const handler = async (event) => {

  const covalenthqKey = process.env.REACT_APP_COVALENT_KEY
  const covalenthqAPI = "https://api.covalenthq.com/v1"

  const { call , address, page} = event.queryStringParameters

  try {
    
    switch (call) {
      case 'tx':    // GET TX'
        var url = covalenthqAPI + `/1/address/${address}/transactions_v2/?block-signed-at-asc=false&key=${covalenthqKey}&page-number=${page}`
        break;
      case 'ethPrice':      // GET ETH Price
        var url =  covalenthqAPI + `/pricing/volatility/?tickers=ETH&key=${covalenthqKey}`
        break;
      default:
        var url = ''
    }
  
    const { data } = await axios.get(url)

    return{
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (error){
    return { 
        statusCode: 500, 
        body: error.toString() 
      }
  }
}

module.exports = { handler }
