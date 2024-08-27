import { useState } from 'react'

import './App.css'
import Generator from './genrator';

function App() {
  const [writer,setWriter]=useState('')
  function category(input){
    setWriter(input.target.value)
  }
  
  console.log(writer);
  
  return (
    <>
    {/* {writer !== '' && <h1>Your Author is {writer}</h1>} */}
      {writer =='' &&<select name="" id="" onChange={category}>
        <option value="">select option</option>
      <option value="Albert Einstein">Albert Einstein</option>
      <option value="Maya Angelou">Maya Angelou</option>
      <option value="Steve Jobs">Steve Jobs</option>
      <option value="Mahatma Gandhi">Mahatma Gandhi</option>
      <option value="Oscar Wilde">Oscar Wilde</option>
      </select>}
      {/* <button onClick={()=>setWriter(event.target.value)}>click</button> */}
      {writer !=='' && <Generator setWriter={setWriter} writer={writer}  />}
    </>
  )
}

export default App
