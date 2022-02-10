// alchemy-token-api/axios-script.js
import axios from 'axios';

// Replace with your Alchemy API key:
const apiKey = "demo";
const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
// Replace with the wallet address you want to query:
const ownerAddr = "0x3f5ce5fbfe3e9af3971dd833d26ba9b5c936f0be";
// Replace with the token contract address you want to query:
const tokenAddr = "0x607f4c5bb672230e8672085532f7e901544a7375";

var data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "alchemy_getTokenBalances",
  "params": [
    `${ownerAddr}`,
    [
      `${tokenAddr}`
    ]
  ],
  "id": 42
});

var config = {
  method: 'post',
  url: baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data, null, 2))
})
.catch(function (error) {
  console.log(error);
});
