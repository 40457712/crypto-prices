import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import CryptoList from './components/CryptoList';
import Barchart from './components/Barchart';


function App() {

console.log("App Starting")

// Dummy Data const livedata = [{time: 1694329200, volume: 773213.97},{time: 1696329200, volume: 893437.99}];

const [CryptoVol, setCryptoVol] = useState([]);
const [CryptoData, setCryptoData] = useState([]);



function serialDateToNiceDate(date) {
  date = (date/3600/24).toString();
  return new Date(Math.round((date)*86400*1000)).toUTCString();
}

function fetchCryptoHandler() {
  let response = null;
  new Promise(async (resolve, reject) => {
    try {
     response = await axios.get("https://min-api.cryptocompare.com/data/exchange/histohour?tsym=WAX&limit=30&api_key=518c2b6d6f2d6282006b26e532bfc1e2b9f5d5184731e3ef885a785d473d6fde");
    } catch(ex) {
      response = null;
    // error
      console.log(ex);
      reject(ex);
    }
    if (response) {
    // success
      const data = response.data;
      console.log(data.Data.reverse());
      setCryptoData(data.Data);
    }
}
  )}
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Crypto Prices
        </p>
        <button onClick={fetchCryptoHandler}>Obtain Data</button>
      </header>
      <section className="App-section">
        <Barchart data={CryptoData} />
      </section>
      <section className="App-section">
        <CryptoList cryptos={CryptoData} />
      </section>
      </React.Fragment>
  );
}

export default App;

