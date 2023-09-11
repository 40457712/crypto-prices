import React from 'react';

//import classes from './Movie.module.css';

const Crypto = (props) => {
    
    function serialDateToNiceDate(date) {
        date = (date/3600/24).toString();
        return new Date(Math.round((date)*86400*1000)).toUTCString();
      }

  return (
//    <li className={classes.movie}>
    <li>
      {serialDateToNiceDate(props.time)} & {props.volume}
    </li>
  );
};

export default Crypto;