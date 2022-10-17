import React from "react";
import Title from "./Title/Title";
import Buttons from "./Buttons/Buttons";
import Statistic from "./Body/Statistic";
import Notification from "./Notif/Notification";
import { useState } from "react";

export default function App() {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const feedbackName = ['good', 'neutral', 'bad']

  const handleClick = (data) => {
    switch (data) {
      case 'good':
        setGoodFeedback(s => s + 1);
        break
      case 'neutral':
        setNeutralFeedback(s => s + 1);
        break
      case 'bad':
        setBadFeedback(s => s + 1);
        break
      default:
        return
    }
  }

  const totalReviewsCount = (arrayOfValues) => {
    let totalValue = 0;
    arrayOfValues.forEach(item => {
      totalValue += item;
    })
    return totalValue;
  }

  const totalFeeback = totalReviewsCount([good, neutral, bad])

  const positiveFeedbackRate = (totalFeebackAmount) => {
    if (good !== 0) {
      const totalFeedBack = totalFeebackAmount;
      let positiveFeedBack = (good / totalFeedBack) * 100;
      return positiveFeedBack.toFixed(2);
    } else {
      return 'there is no positive feedback :(';
    }
  }

  const positivePercent = positiveFeedbackRate(totalFeeback);
  

    return (
      <div className="container">
        <Title title="Please,leave your feedback">
            <Buttons buttonsNames={feedbackName} handleClick={handleClick} />
        </Title>
        <Title title="Statistic">
          {totalFeeback === 0 ?
            <Notification message="There is no feedback" /> :
            <Statistic buttonsValues={[good, neutral, bad]} buttonsNames={feedbackName} percent={positivePercent} count={totalFeeback} />
        }
        </Title>
      </div>
    )
}
