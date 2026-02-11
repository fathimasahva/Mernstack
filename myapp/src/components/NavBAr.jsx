import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBAr = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h3>myapp</h3> &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/login">
                <Button variant="contained" color='info'>LOGIN</Button> </Link>&nbsp;&nbsp;&nbsp;
               
                <Link to="/">
                <Button variant="contained" color='info'>SIGN UP</Button>
                </Link>&nbsp;&nbsp;
                <Link to="/table">
                <Button variant="contained" color='info'>TABLE</Button>
                </Link>&nbsp;&nbsp;
                <Link to="/state">
                <Button variant="contained" color='info'>State</Button>
                </Link>&nbsp;&nbsp;
                 <Link to="/count">
                <Button variant="contained" color='info'>Count</Button>
                </Link>&nbsp;&nbsp;
                <Link to="/name">
                <Button variant="contained" color='info'>Name</Button>
                </Link>&nbsp;&nbsp;
                <Link to="/cards">
                <Button variant="contained" color='info'>Cards</Button>
                </Link>&nbsp;&nbsp;


            </Toolbar>
        </AppBar>
        <br></br>        <br></br>

    </div>
  )
}

export default NavBAr