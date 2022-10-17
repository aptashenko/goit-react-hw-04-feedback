import React from "react";
import Title from "./Title/Title";
import Buttons from "./Buttons/Buttons";
import Statistic from "./Body/Statistic";
import Notification from "./Notif/Notification";

class App extends React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

  handleClick = (item) => {
    this.setState(prevState => ({
      [item]: prevState[item] += 1,
    }))
    this.countTotalFeedback();
  }

  countTotalFeedback = () => {
    const buttonsValues = Object.values(this.state);
    let totalValue = 0;
    buttonsValues.forEach(item => {
      totalValue += item;
    })
    return totalValue;
  }

  countPositiveFeedbackPercentage = () => {
    if (this.state.good !== 0) {
      const totalFeedBack = this.countTotalFeedback();
      let positiveFeedBack = (this.state.good / totalFeedBack) * 100;
      return positiveFeedBack.toFixed(2);
    } else {
      return 'there is no positive feedback :(';
    }
  }

  render() {
    const buttonsNames = Object.keys(this.state);
    const buttonsValues = Object.values(this.state);
    return (
      <div className="container">
        <Title title="Please,leave your feedback">
            <Buttons buttonsNames={buttonsNames} handleClick={this.handleClick} />
        </Title>
        <Title title="Statistic">
          {this.countTotalFeedback() === 0 ?
            <Notification message="There is no feedback" /> :
            <Statistic buttonsValues={buttonsValues} buttonsNames={buttonsNames} percent={this.countPositiveFeedbackPercentage} count={this.countTotalFeedback} />
        }
        </Title>
      </div>
    )
  }
}

export default App;