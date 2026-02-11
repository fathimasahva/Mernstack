import { Button } from '@mui/material'
import React, { useEffect,useState } from 'react'

const ThreeName = () => {

        const [name, setName] = useState("")
        const buttonEmpty=()=>{
            setName("guyss")
        }

        const buttonSahva=()=>{
            setName("Sahva")
        }
        const buttonAswani=()=>{
            setName("Aswani")
        }
        const buttonSinu=()=>{
           setName("Sinu")
        }
     useEffect(()=>{
       buttonEmpty()
     },[])
  return (
    <div>
        <h1>Welcome {name}</h1>
      <Button variant="contained" color="info" onClick={buttonSahva}>Sahva</Button>&nbsp;
      <Button variant="contained" color="secondary" onClick={buttonAswani}>Aswani</Button>&nbsp;
      <Button variant="contained" color="info" onClick={buttonSinu}>Sinu</Button>

    </div>
  )
}
export default ThreeName
