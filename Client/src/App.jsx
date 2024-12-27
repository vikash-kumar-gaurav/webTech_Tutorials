import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/button'
import Login from './pages/login'
import SignUp from './pages/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      <SignUp/>
    </>
  )
}

export default App
