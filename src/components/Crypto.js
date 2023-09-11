import React from 'react';

//import classes from './Movie.module.css';

const Crypto = (props) => {
  return (
//    <li className={classes.movie}>
    <li>
      <h2>{props.time}</h2>
      <h3>{props.volume}</h3>
    </li>
  );
};

export default Crypto;