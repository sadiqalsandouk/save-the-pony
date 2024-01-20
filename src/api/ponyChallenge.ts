import axios from 'axios'
import { MazeParams, MazeParamsType } from './ponyChallengeSchemas'

export const createMaze = async (mazeParams: MazeParamsType) => {
    try {
      const validatedMazeParams = MazeParams.parse(mazeParams)
      const response = await axios.post('https://ponychallenge.trustpilot.com/pony-challenge/maze', validatedMazeParams)
      const mazeId = response.data.maze_id
      return mazeId
    } catch (error) {
      console.error('Error creating maze:', error)
      throw error
    }
  }

export const getMazeCurrentState = async (mazeId: string) => {
  if (mazeId) {
    try {
      const response = await axios.get(`https://ponychallenge.trustpilot.com/pony-challenge/maze/${mazeId}`)
      return response.data
    } catch (error) {
      console.error('Error getting maze state:', error)
      throw error
    }
  } else {
    console.error('Maze Id not available.')
  }
}

export const makeNextMove = async (mazeId: string, direction: string) => {
  try {
    const moveData = {
      direction: direction,
    }

    const response = await axios.post(`https://ponychallenge.trustpilot.com/pony-challenge/maze/${mazeId}`, moveData)
    return response.data
  } catch (error) {
    console.error('Error making next move:', error)
    throw error
  }
}

export const printMaze = async (mazeId: string) => {
    try {
      const response = await axios.get(`https://ponychallenge.trustpilot.com/pony-challenge/maze/${mazeId}/print`)
      return response.data
    } catch (error) {
      console.error('Error printing maze:', error)
      throw error
    }
  }

