import React from 'react'
import { Route, Routes } from 'react-router-dom'
import District from './Pages/District'
import Place  from './Pages/Place'
import Category from './Pages/Category'
import UseEffectHook from './Pages/UseEffectHook'


const App = () => {
  return (
    <Routes>
      <Route path="/District" element = {<District/>} />
      <Route path='/Place' element = {<Place/>} />
      <Route path='/Category' element = {<Category/>} />
      <Route path='/UseEffectHook' element = {<UseEffectHook/>} />
    </Routes>
  )
}

export default App