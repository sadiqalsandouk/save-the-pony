import axios from 'axios'
import { MazeParams } from './ponyChallengeSchemas'

// TODO: User input
const mazeParams = {
  "maze-width": 15,
  "maze-height": 15,
  "maze-player-name": "Applejack",
  "difficulty": 1
}

const validatedMazeParams = MazeParams.parse(mazeParams)

export const createMaze = async () => {
  try {
    const response = await axios.post('https://ponychallenge.trustpilot.com/pony-challenge/maze', validatedMazeParams)
    const mazeId = response.data.maze_id
    console.log(`Maze created. ID: ${mazeId}`)
    return mazeId
  } catch (error) {
    console.error('Error creating maze:', error)
    throw error
  }
}

const mazeId = await createMaze()

export const getMazeCurrentState = async () => {
  if (mazeId) {
    try {
      const response = await axios.get(`https://ponychallenge.trustpilot.com/pony-challenge/maze/${mazeId}`)
      const currentState = response.data
      console.log('Current State:', currentState)
    } catch (error) {
      console.error('Error getting maze state:', error)
      throw error
    }
  } else {
    console.error('Maze Id not available.')
  }
}
