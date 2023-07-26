import React, {Component} from "react";
// import ReactDOM from "react";

export class FeedbackWidget extends Component {
    state = {
      good:0,
      neutral:0,
      bad:0
    };
  
    render() {
      const { good, neutral, bad } = this.state;
      
  
      return (
        <div>
            <h1>Please leave feedback</h1>
          <button type="button" onClick={event => console.log(good)}>Good{good}</button>
          <button type="button">Neutral {neutral}</button>
          <button type="button">Bad{bad}</button>
        
            <h1>Statistics</h1>
            <p>Good:{this.props.good}</p>
            <p>Neutral:</p>
            <p>Bad:</p>
        </div>
      );
    }
  }
  
