// alchemy-token-api/fetch-script.js
import fetch from 'node-fetch';

// Replace with your Alchemy API key:
const apiKey = "demo";
const fetchURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;

// Replace with the wallet address you want to query:
const ownerAddr = "0x3f5ce5fbfe3e9af3971dd833d26ba9b5c936f0be";
// Replace with the token contract address you want to query:
const tokenAddr = "0x607f4c5bb672230e8672085532f7e901544a7375";

var raw = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "alchemy_getTokenBalances",
  "headers": {
    "Content-Type": "application/json"
  },
  "params": [
    `${ownerAddr}`,
    [
      `${tokenAddr}`,
    ]
  ],
  "id": 42
});

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

// Make the request and print the formatted response:
fetch(fetchURL, requestOptions)
  .then(response => response.json())
  .then(response => JSON.stringify(response, null, 2))
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// alchemy-token-api/fetch-script.js
import fetch from 'node-fetch';

// Replace with your Alchemy API key:
const apiKey = "demo";
const fetchURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;

// Replace with the wallet address you want to query:
const ownerAddr = "0x3f5ce5fbfe3e9af3971dd833d26ba9b5c936f0be";
// Replace with the token contract address you want to query:
const tokenAddr = "0x607f4c5bb672230e8672085532f7e901544a7375";

var raw = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "alchemy_getTokenBalances",
  "headers": {
    "Content-Type": "application/json"
  },
  "params": [
    `${ownerAddr}`,
    [
      `${tokenAddr}`,
    ]
  ],
  "id": 42
});

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

// Make the request and print the formatted response:
fetch(fetchURL, requestOptions)
  .then(response => response.json())
  .then(response => JSON.stringify(response, null, 2))
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
