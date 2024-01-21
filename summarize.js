const axios = require('axios');
require('dotenv').config();
const secret = process.env.ACCESS_TOKEN;


async function summarizetext(text) {
  let data = JSON.stringify({
    "inputs": text,
    "parameters": {
      "max_length": 100,
      "min_length": 30
    }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${secret}`
    },
    data: data
  };

  try {
    const response = await axios.request(config); 
    return response.data[0].summary_text; 
  }
  catch (error) {
    console.log(error);
  }

}

module.exports = summarizetext