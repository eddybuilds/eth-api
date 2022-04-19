import Web3 from 'web3';
import express from 'express';

const web3 = new Web3("http://0.0.0.0:8545");

const app = express();
const port = 3000;

app.get('/version', (req, res) => {
  res.json({ Result: Web3.version });
})

app.get('/blockHead', async (req, res, next) => {
  try {
    let blockNumber = await web3.eth.getBlockNumber();
    res.json({ Result: blockNumber });
  }
  catch (error) {
    return next(error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})