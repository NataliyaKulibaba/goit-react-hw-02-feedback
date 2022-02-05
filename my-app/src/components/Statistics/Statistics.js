import React from "react"
import s from './Statistics.module.css';

const Statistics = ({good,neutral,bad,total,positivePersent}) => {
return(
  <ul>
  
    <li className={s.name}>Good:{good}</li>
    <li>Neutral:{neutral}</li>
    <li>Bad:{bad}</li>
    <li>Total:{ total}</li>
    <li>Positive feedback:{ positivePersent}</li>
    </ul>
)
}

export default Statistics;
