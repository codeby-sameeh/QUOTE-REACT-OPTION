import { useState } from "react"


function Selector(category){
    const [writer,setWriter]=useState('')
    function category(input){
        setWriter(input.target.value)
      }
    return(<>
     {writer =='' &&<select name="" id="" onChange={category}>
      <option value="Albert Einstein">Albert Einstein</option>
      <option value="Maya Angelou">Maya Angelou</option>
      <option value="Steve Jobs">Steve Jobs</option>
      <option value="Mahatma Gandhi">Mahatma Gandhi</option>
      <option value="Oscar Wilde">Oscar Wilde</option>
      </select>}
    </>)
}

export default Selector