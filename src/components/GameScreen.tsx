import { useEffect, useState } from 'react'
import { printMaze } from '../api/ponyChallenge'
import {
  GameScreenContainer,
  MazeRow,
  MazeCell,
} from './GameScreen.styles'

export const GameScreen = ({ mazeId }: { mazeId: string | null }) => {
  const [mazeContent, setMazeContent] = useState<string | null>(null)

  useEffect(() => {
    const fetchMazeContent = async () => {
      if (mazeId) {
        try {
          const content = await printMaze(mazeId)
          setMazeContent(content)
        } catch (error) {
          console.error('Error printing maze:', error)
        }
      }
    }

    fetchMazeContent()
  }, [mazeId])

  return (
    <GameScreenContainer>
      <h2>Game Screen</h2>
      <div>
        {mazeContent?.split('\n').map((row, rowIndex) => (
          <MazeRow key={rowIndex}>
            {row.split('').map((cell, cellIndex) => (
              <MazeCell key={cellIndex} cell={cell}>
                {cell}
              </MazeCell>
            ))}
          </MazeRow>
        ))}
      </div>
    </GameScreenContainer>
  )
}