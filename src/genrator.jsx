import { useState } from "react"
import Quotes from "./Qoutes"
import App from "./App"


function Generator(props){
    // let setWriter ={setWriter}
    const filterdQoutes =Quotes.filter(qoute=>qoute.author===props.writer)
    const[q,setQ]=useState(filterdQoutes[0].quote)

    function random(){
        const randomIndex =Math.floor(Math.random()*filterdQoutes.length)
        const randomQoute=filterdQoutes[randomIndex].quote
        
        setQ(randomQoute)
        // console.log(randomQoute)
       }
       function reset(){
        props.setWriter('')
       }
    
    return(<>
    
    <h1>{q}</h1>
    <button onClick={random}>Generate</button>
    <button onClick={reset}>Back</button>
    </>)
}
export default Generator