import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './components/auth/signin'
import SignUp from './components/auth/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignIn />
      <SignUp />
    </>
  )
}

export default App
