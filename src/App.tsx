import './App.css'
import { createMaze, getMazeCurrentState } from './api/ponyChallenge.ts'


function App() {
  createMaze()
  getMazeCurrentState()

  return (
    <>
    </>
  )
}

export default App
