import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li className={s.name}>Good: {good}</li>
      <li className={s.name}>Neutral: {neutral}</li>
      <li className={s.name}>Bad: {bad}</li>
      <li className={s.name}>Total: {total}</li>
      <li className={s.name}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;
