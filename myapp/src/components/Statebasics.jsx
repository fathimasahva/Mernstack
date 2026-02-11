import {  Button,TextField } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
  const [name, setName] = useState("sahva")
  const [input, setInput] = useState()
    const inputhandler=(e)=>{
        setInput(e.target.value)

        
    }
    const buttonHandler = () => {
    setName(input)
  }

  return (
    <div>
        <h1>Welcome {name}</h1>
        <TextField variant='outlined'  onChange={inputhandler}/>
        <br></br><br></br>
        <Button variant="contained" onClick={buttonHandler}>submit</Button>
    </div>
  )
}

export default Statebasics