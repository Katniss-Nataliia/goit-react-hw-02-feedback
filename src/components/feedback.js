import React, { Component } from "react";
import {
    MainContainer,
    Buttns
} from './feedback.styled'


export class FeedbackWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,

        }

    }
    handleIncrementGood = () => {
        this.setState({ good: this.state.good + 1 })
    }
    handleIncrementNeutral = () => {
        this.setState({ neutral: this.state.neutral + 1 })
    }
    handleIncrementBad = () => {
        this.setState({ bad: this.state.bad + 1 })
    }

    // Function to calculate the total feedback count
    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;

    }
    // function to calculate the % of positive feedback

    countPositivePercentage = () => {
        const totalFeedback = this.countTotalFeedback();
        if (totalFeedback === 0) {
            // to avoid devision by zero, let's check if totalFeedback is not 0
            return 0;
        } else {

            return Math.round((this.state.good / totalFeedback) * 100)

        }


    }

    render() {
        //destructure the state properties
        const { good, neutral, bad } = this.state;

        //destructure the functions from the component
        const { countTotalFeedback, countPositivePercentage } = this

        const FeedbackOptions = () => {
            return (
                <div><MainContainer>
                    <h1>Please leave feedback</h1>
                    <Buttns type="button" onClick={this.handleIncrementGood}>Good</Buttns>
                    <Buttns type="button" onClick={this.handleIncrementNeutral}>Neutral</Buttns>
                    <Buttns type="button" onClick={this.handleIncrementBad}>Bad</Buttns>
                    </MainContainer>
                </div>
            )
        }

        const Statistics = () => {
            return (
                <div><MainContainer>
                    {countTotalFeedback() === 0 ? (
                        //if there is no feedback, display the following:
                        <p>No feedback</p>
                    ) : (
                        //if there is feedback - display statistics
                        <>
                            <h1>Statistics</h1>
                            <p>Good: {good}</p>
                            <p>Neutral: {neutral}</p>
                            <p>Bad: {bad}</p>
                            <p>Total:{countTotalFeedback()}</p>
                            <p>Positive Percentage: {countPositivePercentage()}%</p>
                        </>
                    )}
                    </MainContainer>
                </div>
            )
        }
        return (
            <div>
                <FeedbackOptions></FeedbackOptions>
                <Statistics></Statistics>
            </div>
        )

    }
}


