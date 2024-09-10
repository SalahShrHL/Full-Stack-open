import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => {
  return(
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
   )  
  }

 

const Statistics = ({good,neutral,bad}) => {

  let all = good + neutral + bad

  if (all === 0) {
    return (
      <h3>
        No feedback given
      </h3>
    )
  }

  return(
    <div>
      <h1>statistics</h1>

      <table>

      <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={all} />
          <StatisticLine text="average" value ={(good - bad) / (all)} />
          <StatisticLine text="positive" value ={good / (all) * 100 + ' % '} />
      </tbody>
      </table>

    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }

  const handleBadClick = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1> give feedback </h1>
      <Button text='good' handleClick={handleGoodClick}/>
      <Button text='neutral' handleClick={handleNeutralClick}/>
      <Button text='bad' handleClick={handleBadClick}/>
      
      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App