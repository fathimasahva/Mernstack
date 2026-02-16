import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const View = () => {

      var[user,setUser]=useState([])
    
     var navigate=useNavigate()


  
  axios.get("http://localhost:3004/view")
  .then((res)=>{
     setUser(res.data)
     console.log(user)
  })
const HandleDelete=(id) => {


    console.log("data deleted")
    axios.delete("http://localhost:3004/delete/"+id)
    .then((res)=>{
        alert(res.data)
    })

}
const updatehandler=(val)=>{
    console.log("data",val)
    navigate("/",{state:{val}})
    }




  return (
    
    <div>
        <br/><br/>        <br/><br/>

        <center>
            <h1>STUDENT DETAILS</h1>
        <TableContainer>
            <Table style={{border:'5 solid black',width:1000, height:600}}> 
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Mark</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {user.map((val)=>{
                  return(
               <TableRow>


              <TableCell align="left">{val.Name}</TableCell>
              <TableCell align="left">{val.Age}</TableCell>
              <TableCell align="left">{val.Department}</TableCell>
              <TableCell align="left">{val.Mark}</TableCell>
              <Button variant="contained"  color="secondary" onClick={() => updatehandler(val)}>Update</Button>
              <Button variant="contained" color="info" onClick={()=> HandleDelete(val._id)}>Delete</Button>
              </TableRow>   
                )

                })} 
             
            </TableBody> 
            </Table>       

        </TableContainer>
        </center>
    </div>
  )
}

export default View




















