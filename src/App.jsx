import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Admin } from './admin'
import { Home } from './home'
function App() {
  const [count, setCount] = useState(0)

  return (
    
      
          <BrowserRouter>
            <Routes>
              <Route element={<Home/>} path='/'/>
              <Route element={<Admin />} path="/admin" />
            </Routes>
          </BrowserRouter>
       
    
  )
}

export default App
