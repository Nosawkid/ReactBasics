import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Guest from './Guest/App'
import Admin from "./Admin/App"

const App = () => {
  return (
    <Routes>
      <Route path='/Guest/*' element={<Guest/>}/>
      <Route path = "/Admin/*" element = {<Admin/>} /> 
    </Routes>
  )
}

export default App