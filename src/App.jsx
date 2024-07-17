import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './components/Start'
import Game from './components/Game'



function App() {
  const [gameplay, setgameplay] = useState(false)

  const toggleGameplay = () => {
    setgameplay((prev) => !prev);
  };

  return (
    <>
      {
        gameplay ? <Game toggle ={toggleGameplay}/> : <Start  toggle ={toggleGameplay}/>
      }
    </>
  )
}

export default App
