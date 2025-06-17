import { useState } from 'react';

const Button = ({ onClick, text }) =>{
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all, avg, positive}) => {
  if(all==0) {
    return (
      <h3>No Feedback given</h3>
    )
  } else {
    return (
      <>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neuteral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text='All' value={all} />
        <StatisticLine text="Average" value={avg} />
        <StatisticLine text="Positive value" value={`${positive} %`} />
      </>
    )
  }
} 

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral]= useState(0);
  const [bad, setBad] = useState(0);
  const all =good+neutral+bad;
  const avg = (good-bad)/all;
  const positive = (good / all) * 100;

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral"/>
      <Button onClick={handleBadClick} text="Bad"/>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} positive={positive}/>
        </tbody>
      </table>
    </div>
  )

}

export default App;