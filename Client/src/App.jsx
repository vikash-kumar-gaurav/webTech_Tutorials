import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/button'
import Login from './pages/login'
import SignUp from './pages/signup'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Outlet/>
    </>
  )
}

export default App
