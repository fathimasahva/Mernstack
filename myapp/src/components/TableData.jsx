import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const TableData = () => {

  var[user,setUser]=useState([])
  
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res)=>{
     setUser(res.data)
     console.log(user)
  })



  return (
    
    <div>
      <h1>TABLE</h1>
      <center>
        <TableContainer>
          <table style={{ border: '3px solid black', width: 800, height: 590 }}>
            <TableHead >
                <TableRow>
                    <TableCell><b>name</b></TableCell>
                    <TableCell><b>username</b></TableCell>
                    <TableCell><b>email</b></TableCell>
                    <TableCell><b>city</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {user.map((val)=>{
                  return(
               <TableRow>


              <TableCell align="left">{val.name}</TableCell>
              <TableCell align="left">{val.username}</TableCell>
              <TableCell align="left">{val.email}</TableCell>
              <TableCell align="left">{val.address.city}</TableCell>
              </TableRow>
              
                  )

                })}


            </TableBody>
            </table>
        </TableContainer>
        </center>

    </div>
  )
  }

export default TableData