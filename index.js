const config = require('./configuration');
const fetch = require('node-fetch');

// === Gets all positions ======================================================

const getAllPositions = async (deviceID) => {
  try{
    const url = `https://api-v0.blockfolio.com/rest/get_all_positions/${deviceID}`;
    const reqOptions = {
      method: 'GET'
    };
    const response = await fetch(url, reqOptions);
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch(err) {
    const errorString = JSON.stringify(err);
    console.error(`Failed retrieving all positions. Error: ${errorString}`);
  }
};

// === Converts to euro  =======================================================

const convertToEuro = async (amountInUSD) => {
  try{
    const url = `http://api.fixer.io/latest?base=USD&symbols=EUR`;
    const reqOptions = {
      method: 'GET'
    };
    const response = await fetch(url, reqOptions);
    const parsedResponse = await response.json();
    const euroRate = parsedResponse.rates.EUR;
    const valueInEUR = (amountInUSD*euroRate).toFixed(2);
    return valueInEUR;
  } catch(err) {
    const errorString = JSON.stringify(err);
    console.error(`Failed converting to euro. Error: ${errorString}`);
  }
};

// === Executes the request ====================================================

(async function() {
  try{
    const showType = process.argv[2].toLowerCase(); // Can be USD, EUR. BTC for now
    const allPositions = await getAllPositions(config.deviceID);
    const portfolioValueInBTC = allPositions.portfolio.btcValue;
    const portfolioValueInUSD = allPositions.portfolio.usdValue;

    const parsedValueInBTC = parseFloat(portfolioValueInBTC).toFixed(4);
    const parsedValueInUSD = parseFloat(portfolioValueInUSD).toFixed(2);
    const parsedValueInEUR = await convertToEuro(parsedValueInUSD);

    if(showType==='btc'){
      console.log(parsedValueInBTC);
    } else if(showType==='usd'){
      console.log(`$${parsedValueInUSD}`)
    } else if(showType==='eur'){
      console.log(`€${parsedValueInEUR}`)
    } else { //fallback USD
      console.log(parsedValueInBTC);
    }
  } catch(err){
    console.error(`Please provide a currency you want to display your results in. 
      Available options are EUR,USD,BTC.`)
  }
})();