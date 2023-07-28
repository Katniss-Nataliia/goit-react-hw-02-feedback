import React, {Component} from "react";

export class FeedbackWidget extends Component {

    constructor(props){
        super(props);
        this.state = {
            good:0,
            neutral:0,
            bad:0,
            
        }
        
    }
    handleIncrementGood = () => {
        this.setState({good: this.state.good + 1})
    }
    handleIncrementNeutral = () => {
        this.setState({neutral: this.state.neutral + 1})
    }
    handleIncrementBad = () => {
        this.setState({bad: this.state.bad + 1})
    }
    countTotalFeedback = () => {
        const total = [...this.state.]

    }

   
    render() {
      return (
        <div>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={this.handleIncrementGood}>Good</button>
          <button type="button" onClick={this.handleIncrementNeutral}>Neutral</button>
          <button type="button" onClick={this.handleIncrementBad}>Bad</button>
        
            <h1>Statistics</h1>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: {this.total}</p>
        </div>
      );
    }
  }
  
