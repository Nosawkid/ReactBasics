import React from 'react'
import User from "./Pages/User"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/User" element={<User/>} />
    </Routes>
  )
}

export default App