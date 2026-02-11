import { Avatar, Button, TextField } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <div>
        <br/><br/>
      <h1>SignUp page</h1><center>
      <Avatar alt="Fathima sahva" src="https://www.hollywoodreporter.com/wp-content/uploads/2025/02/AvatarKeyArt3-H-2025.jpg?w=1296&h=730&crop=1" sx="width:150px;height:150px;"/></center>
      <br/>
      <TextField label="name" variant="filled" /><br/><br/>
      <TextField label="email" variant="filled" /><br/><br/>
      <TextField label="password" variant="filled" /><br/><br/>


      <Button variant="contained">SignUp</Button>
      </div>
  )
}

export default SignUp