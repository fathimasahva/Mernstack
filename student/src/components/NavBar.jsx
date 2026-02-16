import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>  <AppBar>
        
            <Toolbar>
                <h3>STUDENT</h3> &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/">
                <Button variant="contained" color='info'>Add</Button> </Link>&nbsp;&nbsp;&nbsp;
               
                <Link to="/view">
                <Button variant="contained" color='info'>View</Button>
                </Link>&nbsp;&nbsp;
                


            </Toolbar>
                        
        </AppBar></div>
  )
}

export default NavBar