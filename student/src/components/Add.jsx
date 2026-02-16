import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {

       var navigate=useNavigate()

     var location=useLocation()
     console.log(location.state)

    var[student,setStudent]=useState({Name:"",Age:"",Department:"",Mark:""})





     const AddHandler=(res) => {

      if(location.state !==null){
        axios.put("http://localhost:3004/update/"+location.state.val._id,student)
        .then((res)=>{
          alert(res.data)
          navigate("/view")
        })
      }
      else{
        
   console.log("data added")
         axios.post("http://localhost:3004/add",student)
         .then((res)=>{
             alert(res.data)
             navigate("/view")
         })

      }
     
    }
      

     const HandleInput=(val)=>{
      setStudent({...student,[val.target.name]:val.target.value})
      console.log(student)

     }

     
     if(location.state!==null){
      useEffect(()=>{
        setStudent({...student,
          Name:location.state.val.Name,
          Age:location.state.val.Age,
          Department:location.state.val.Department,
          Mark:location.state.val.Mark,

        })
      },[])
     }


        


  return (
    <div>
        <br/>
        <br/>
        <br/>
                <br/>

        <br/>

<h1>ADD DETAILS</h1>
        
        <TextField label="name" variant="filled"
        name="Name" value={student.Name} onChange={HandleInput}/><br/>        <br/>

        <TextField label="age" variant="filled"
        name="Age" value={student.Age} onChange={HandleInput}/><br/>        <br/>

        <TextField label="department" variant="filled"
        name="Department" value={student.Department} onChange={HandleInput}/><br/>        <br/>

        <TextField label="mark" variant="filled"
        name="Mark" value={student.Mark} onChange={HandleInput}/><br/>        <br/>


        <Button variant="contained" color="info" onClick={AddHandler}>ADD</Button>


    </div>
  )
}

export default Add