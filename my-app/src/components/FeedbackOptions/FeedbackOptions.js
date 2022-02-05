import React from "react"
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({onGoodBtnClick,onNeutralBtnClick, onBadBtnClick }) => {
  return (  <>
    <button
      type="button"
      className={s.btn}
      onClick={onGoodBtnClick} >Good</button>
      <button type="button"onClick={onNeutralBtnClick} >Neutral</button>
    <button type="button" onClick={onBadBtnClick}>Bad</button>
    </>
)
}

export default FeedbackOptions;

