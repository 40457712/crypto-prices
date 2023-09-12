import React from 'react';

import Crypto from './Crypto';
// import classes from './MoviesList.module.css';

const CryptoList = (props) =>{
   // console.log("CryptoList");
    //console.log({props});
    return (
    //    <ul className={classes['movies-list']}>
        <ul>
          {props.cryptos.map((crypto) => (
            <Crypto  key={crypto.time}
              time={crypto.time}
              volume={crypto.volume}
            />
          ))}
        </ul>
      );
};

export default CryptoList;