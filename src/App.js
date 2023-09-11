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

//function myFunction(item) {
//  console.log("My Function running")
//  console.log(item);
//  const [time, volume] = item;
//  console.log(time);
//}

//function processData(item, index){
  //console.log("Process running")
  //cryptoTemp = [];
  //item.map((item, index) => (
  //  console.log("Index Array :-" + index + item.time + item.volume)
  //  ))
  
  //cryptoTemp.push(serialDateToNiceDate(item.time));
  //cryptoTemp.push(item.volume);
  //cryptoVolume.push(item.volume);
  // console.log("Temp Array :-" + cryptoTemp);
  //cryptoData.push(cryptoTemp);
  //console.log("Data Array :-" + cryptoData);
//}

function obtainData (){
  let response = null;
  new Promise(async (resolve, reject) => {
    try {
     response = await axios.get("https://min-api.cryptocompare.com/data/exchange/histohour?tsym=BCH&limit=30&api_key=518c2b6d6f2d6282006b26e532bfc1e2b9f5d5184731e3ef885a785d473d6fde");
    } catch(ex) {
      response = null;
    // error
      console.log(ex);
      reject(ex);
    }
    if (response) {
    // success
      console.log("Sucess");
      //setCryptoData(livedata);
      //cryptoTemp = [];
      //const data = response.data;
      //console.log(typeof (data.Data));
      //console.log(data.Data);

      //const transformeddata = data.Data.map((cryptoData) => {
      //  return {
      //    time: cryptoData.time
      //  };
      //})

    //  setCryptoData(transformeddata);
      //console.log(typeof (transformeddata));
      
      //data.Data.forEach(key => {
       // const combined = [...CryptoTime,serialDateToNiceDate(key.time)];
      //setCryptoTime(combined);
      //console.log(serialDateToNiceDate(key.time));
      //console.log(combined);
      //setCryptoVol(key.volume);
      //console.log(key.volume);
      //});;
      
      //const [value, setValue] = useState([])
      //setValue([...value, newvalue])


      //setCryptoData(cryptoTemp);
      //setCrypto(true);

      //console.log(CryptoData);
    
    }
    }
  )
  
  } 
  
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Crypto Prices
        </p>
      </header>
      <button onClick={obtainData}>Obtain Data</button>
      <section>
        <CryptoList cryptos={livedata} />
      </section>
      </React.Fragment>
  );
}
export default App;

