import { useEffect, useState } from "react"
import axios from "axios"


function App() {

const [jokes, setJokes] = useState([])

const getJokes = () => {
  axios.get("/api/jokes")
  .then(response => {
    console.log(response)
  })
}

useEffect(() => {
  getJokes();
},[])

  return (
    <h1 style={{color: "white"}}>Hello World !</h1>
  )
}

export default App
