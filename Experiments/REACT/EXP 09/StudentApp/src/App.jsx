import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'
function App() {
  const students=[
    {name:"yash", age:21},
    {name:"pratik",age:22},
    {name:"satyarth",age:20}
  ]
 
  return (
    <>
      <h1>Student list</h1>
      {students.map((student, index) => (
        <Student key={index} name={student.name} age={student.age} />
      ))}
    </>
  )
}

export default App
