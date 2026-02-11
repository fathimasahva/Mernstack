import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBAr from './components/NavBAr'
import { Route, Routes } from 'react-router-dom'
import TableData from './components/TableData'
import Statebasics from './components/Statebasics'
import Count from './components/Count'
import ThreeName from './components/ThreeName'
import Lizard from './components/Lizard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBAr/>
    

    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/table" element={<TableData/>
      
}/>
      <Route path="/State" element={<Statebasics/>}/>
      <Route path="/count" element={<Count/>}/>
      <Route path="/name" element={<ThreeName/>}/>
      <Route path="/cards" element={<Lizard/>}/>

      
    </Routes>

    </>
  )
}

export default App
