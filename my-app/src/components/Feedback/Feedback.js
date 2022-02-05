import React from "react";
import Statistics from "../Statistics/Statistics";
import s from './Feedback.module.css';


class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onGoodBtnClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good +1,
      }
    })
  }
  
  onNeutralBtnClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral +1,
      }
    })
  }

  onBadBtnClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad +1,
      }
    })
  }
  
  // countTotalFeedback()


  // countPositiveFeedbackPercentage()


render (){
  return (
    <div>
        <h2 className={s.title}> Please leave feedback</h2>
        <button type="button"onClick={this.onGoodBtnClick}>Good</button>
        <button type="button"onClick={this.onNeutralBtnClick}>Neutral</button>
      <button type="button" onClick={this.onBadBtnClick}>Bad</button>
      
      <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
      />

        {/* <ul>Statistics
          <li className={s.name}>Good:{this.state.good }</li>
          <li>Neutral:{this.state.neutral }</li>
          <li>Bad:{this.state.bad}</li>
        </ul> */}
    </div>
  )
}}

export default Feedback;