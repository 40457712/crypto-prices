import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import CryptoList from './components/CryptoList';


function App() {

console.log("App Starting")

const livedata = [{time: 1694329200, volume: 773213.97},{time: 1696329200, volume: 893437.99}];

const [crypto, setCrypto] = useState(false);
const [CryptoVol, setCryptoVol] = useState([]);
const [CryptoTime, setCryptoTime] = useState([]);
const [CryptoData, setCryptoData] = useState([]);

let cryptoTemp = [];
let cryptoVolume = [];
let cryptoData = [];

function serialDateToNiceDate(date) {
  date = (date/3600/24).toString();
  return new Date(Math.round((date)*86400*1000)).toUTCString();
}

function fetchCryptoHandler() {
  fetch('https://min-api.cryptocompare.com/data/exchange/histohour?tsym=BCH&limit=30&api_key=518c2b6d6f2d6282006b26e532bfc1e2b9f5d5184731e3ef885a785d473d6fde')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const transformedCrypto = data.results.map((CryptoData) => {
        return {
          time: CryptoData.time,
          volume: CryptoData.volume,
        };
      });
      setCryptoData(transformedCrypto);
    });
}
  
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Crypto Prices
        </p>
      </header>
      <button onClick={fetchCryptoHandler}>Obtain Data</button>
      <section>
        <CryptoList cryptos={CryptoData} />
      </section>
      </React.Fragment>
  );
}
export default App;

