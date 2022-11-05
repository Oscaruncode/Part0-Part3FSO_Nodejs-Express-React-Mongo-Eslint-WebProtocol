import { useState } from "react"

//components
const BotonComp = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>
const Stadistic = ({value,text}) => <tr><td style={{border: "1px solid black"}}>{text}</td><td style={{border: "1px solid black"}}>{value}</td></tr>
const Stadistics= ({posFeed,NeuFeed,NegFeed,all,average,positive}) => {

return (<>
<h1>Stadistic</h1>
      {all?
      (
         <table style={{border: "1px solid black"}}>
            <tbody>
               <Stadistic value={posFeed} text="Good" />
               <Stadistic value={NeuFeed} text="Neutral"/>
               <Stadistic value={NegFeed} text="Bad"/>
               <Stadistic value={all} text="All"/>
               <Stadistic value={average} text="Average"/>
               <Stadistic value={positive} text="positive"/>
         </tbody>
         </table>
         )
      :(<h2>No stadistics given</h2>)}
   </>
   );
};


//Main component
const App = () => {

   //use State
   const [posFeed,setPosFeed] = useState(0)
   const [NeuFeed,setNeuFeed] = useState(0)
   const [NegFeed,setNegFeed] = useState(0)
    //handle State
   const handleGoodFeed = () => setPosFeed(posFeed+1)
   const handleNeutralFeed = () => setNeuFeed(NeuFeed+1)
   const handleBadFeed = () => setNegFeed(NegFeed+1)
   //Const
   const all=posFeed+NegFeed+NeuFeed
   const average=(all?(posFeed-NegFeed)/all:0) * 100 + "%"   
   const positive=(all? (posFeed*100)/all : 0) + "%"       


 return (
    <>
            <h1>Give feedback</h1>
            {/* butons components */}
            <BotonComp handleClick={handleGoodFeed} text="Good"/>
            <BotonComp handleClick={handleNeutralFeed} text="Neutral"/>
            <BotonComp handleClick={handleBadFeed} text="Bad"/>
            {/* Stadistics components */}
            <Stadistics posFeed={posFeed} NeuFeed={NeuFeed} NegFeed={NegFeed} average={average} all={all} positive={positive}/>
         
    </>
 )
}



export default App