import React, {Component} from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions"
import Section from "../Section"
import Notification from "../Notification/Notification";


// import s from './Feedback.module.css';


class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onGoodBtnClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
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

  

  countTotalFeedback = () => {
    const total=this.state.bad + this.state.neutral + this.state.good
      return total
  }



  countPositiveFeedbackPercentage = () => {
     let positiveFeedback = 0;

        if (this.state.good >= 1) {
          positiveFeedback = (this.state.good / (this.state.bad + this.state.neutral + this.state.good)) * 100
          positiveFeedback = Math.round(positiveFeedback)+"%"
        }
     
      return positiveFeedback 
  }


  render() {
    return (<>
    
  
        <FeedbackOptions
        onGoodBtnClick={this.onGoodBtnClick}
        onNeutralBtnClick={this.onNeutralBtnClick}
        onBadBtnClick={this.onBadBtnClick}
      />

      
   <Section title = "Statistics">
      {(this.state.good || this.state.neutral || this.state.bad) ?
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePersent={this.countPositiveFeedbackPercentage()}
        />:<Notification message="There is no feedback"/>
        
      }
      </Section>
</>

  )
}}

export default Feedback;