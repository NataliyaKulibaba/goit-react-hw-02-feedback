import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
