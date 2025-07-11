import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const handleVotes =(index) => {
    const updatedVotes = [...votes];
    updatedVotes[index]+=1;
    setVotes(updatedVotes);
  }

  const displayMaxVote = () => {
    const maxVotes = Math.max(...votes);
    const maxIndex = votes.indexOf(maxVotes);
    return (
      <div>
        {anecdotes[maxIndex]}<br/>
        has {maxVotes} votes
      </div>
    )
  }

  const [selected, setSelected]= useState(0);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br/>
      has {votes[selected]} votes<br/>
      <Button onClick={()=> handleVotes(selected)} text="vote" />
      <Button onClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))}  text={'Next Anecdote'} />
      <h1>Anecdote with the most votes</h1>
      {votes.some(vote => vote>0)?displayMaxVote():"No Votes Yet"}
    </div>
  )
}

export default App
