import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
const [CryptoVol, setCryptoVol] = useState();
const [CryptoTime, setCryptoTime] = useState();
const [CryptoData, setCryptoData] = useState([]);
let cryptoData = [];
let cryptoTemp = [];
let cryptoVolume = [];
let cryptoTime = "";
function serialDateToNiceDate(date) {
  date = (date/3600/24).toString();
  return new Date(Math.round((date)*86400*1000)).toUTCString();
}
//function myFunction(item, index) {
function myFunction(item) {
  console.log(item);
  item.Data.forEach(processData);
}
function processData(item, index){
  cryptoTemp = [];
  //item.map((item, index) => (
  //  console.log("Index Array :-" + index + item.time + item.volume)
  //  ))
  
  cryptoTemp.push(serialDateToNiceDate(item.time));
  cryptoTemp.push(item.volume);
  cryptoVolume.push(item.volume);
  // console.log("Temp Array :-" + cryptoTemp);
  cryptoData.push(cryptoTemp);
  console.log("Data Array :-" + cryptoData);
}
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
      const data = response.data;
    
    //data.Data.forEach(myFunction);
      resolve(data);
   // CryptoData.map((item, index) => (
     // console.log("Index Array :-" + index + item[0] + item[1])
      //))
    }
    }
  )
  myFunction(response.data)
  //setCryptoData(cryptoData)
  //console.log(CryptoData);
  //const average = cryptoVolume.reduce((a, b) => a + b, 0) / cryptoVolume.length;
  //console.log("Average :- " + average);
  //setCryptoVol(average);
  } 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Crypto Prices
        </p>
      </header>
      <p>Average volume {CryptoVol}</p>
      <table>
      <tbody>
        <tr>
          <th>Time</th>
          <th>Volume</th>
        </tr>
        {CryptoData.map((item, index) => (
          <tr key={index}>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}
export default App;

