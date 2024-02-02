import {Total} from './Total.jsx';
import {Header} from './Header.jsx';
import {Content} from './Content.jsx';  
const App = () => {
  const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  const exercises1 = 10
  // const part2 = 'Using props to pass data'
  const exercises2 = 7
  // const part3 = 'State of a component'
  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14}
  ]
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App
