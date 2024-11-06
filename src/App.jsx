import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './komponenten/Header'
import Body from './komponenten/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Body></Body>
    </>
  )
}

export default App
