import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Temp from './temp'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Temp />
   </>
  )
}

export default App
