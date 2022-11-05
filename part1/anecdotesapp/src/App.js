import {useState} from "react"

//const
const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]

//components
const MaxVotedAnect = ({bestAnect,anecdotes,maxVotes}) => <><h1>Anecdote with the most votes</h1><h3>{anecdotes[bestAnect]}</h3><h3>Has {maxVotes} votes</h3></>
const Anecdote= ({anecdote,votes,handleNext,handleVote}) =><><h1>{anecdote}</h1><h3>Has {votes} votes</h3><button onClick={handleNext}>Next Anecdote</button><button onClick={handleVote}>Vote</button></>


//Main Component
const App= () => {

  //States
  const [select,setSelect]=useState(0)
  const [vote,setVote]=useState({0:0,1:0,2:0,3:0,4:0,5:0,6:0,})
  const maxVotes=Math.max(...Object.values(vote))
  const bestAnect= [...Object.values(vote)].indexOf(maxVotes)

  //Handles
  const handleClick = () => {
    let newNum;
    do
    newNum = Math.floor(Math.random() * anecdotes.length)
    while (newNum===select)
    setSelect(newNum)  //update State
  }
  const handleVote = () => {
  const newVotes={...vote}  //newVotes=localVar(temp)
  newVotes[select]+=1 
  setVote(newVotes)      //update State
  }

  //Display APP
  return (
    <div>
      <Anecdote anecdote={anecdotes[select]} votes={vote[select]} handleNext={handleClick} handleVote={handleVote}/>
      <MaxVotedAnect bestAnect={bestAnect} maxVotes={maxVotes} anecdotes={anecdotes}/>
    </div>
  )

}

//exports
export default App;