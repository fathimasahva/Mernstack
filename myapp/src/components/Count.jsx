import { Button } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
    var [count, setCount] = useState(0)
    const buttonPositive=()=>{
        setCount(count+1)
    }
    const buttonNegative=()=>{
        setCount(count-1)
    }

    
  return (
    <div>
        
      <h1>Count {count}</h1>
      <Button variant="contained" color="info" onClick={buttonPositive}>+</Button>&nbsp;
      <Button variant="contained" color="secondary" onClick={buttonNegative}>-</Button>


    </div>
  )
}

export default Count