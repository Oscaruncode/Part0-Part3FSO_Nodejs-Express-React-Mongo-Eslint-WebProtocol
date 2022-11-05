import React from "react";


//components
const Header = ({course}) => (<><h1>{course}</h1></>);
const Content = ({parts}) => ( <> {parts.map(part=><Part key={part.id} part={part}/>)} </> );
const Part= ({part}) => (<p>{part.name} {part.exercises}</p>);
const Total = ({parts}) =>(<h2> Total of {parts.reduce((prev,act)=>prev+act.exercises,0)} exercises</h2>);
//Main Comp
const Course = ({courses}) =>
    <>
        <Header course={courses.name}/>
        <Content parts={courses.parts}/>
        <Total parts={courses.parts}/>
    </>;


export default Course