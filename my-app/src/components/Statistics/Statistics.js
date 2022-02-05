import React from "react"

import s from './Statistics.module.css';

const Statistics = ({good,neutral,bad}) => {
return(
  <ul>Statistics
  
    <li className={s.name}>Good:{good}</li>
    <li>Neutral:{neutral}</li>
    <li>Bad:{bad}</li>
    </ul>
)
}

export default Statistics;