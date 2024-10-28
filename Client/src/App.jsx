import React from 'react'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signin/Signup.jsx' 
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* <Route path='*' element={<NotFound />} />  */}
      </Routes>
      
    </div>

  )
}

export default App