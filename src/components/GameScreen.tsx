import React, { useEffect, useState } from "react"
import { printMaze, makeNextMove } from "../api/ponyChallenge"
import { GameScreenContainer, MazeRow, MazeCell } from "./GameScreen.styles"

export const GameScreen = ({ mazeId }: { mazeId: string | null }) => {
  const [mazeContent, setMazeContent] = useState<string | null>(null)
  const [gameEnded, setGameEnded] = useState(false)
  const [gameResult, setGameResult] = useState("")

  const fetchAndPrintMaze = async () => {
    if (mazeId) {
      try {
        const content = await printMaze(mazeId)
        setMazeContent(content)
      } catch (error) {
        console.error("Error printing maze:", error)
      }
    }
  }

  useEffect(() => {
    fetchAndPrintMaze()
  }, [mazeId])

  const handleKeyDown: React.KeyboardEventHandler = (event) => {
    const directions = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
    if (mazeId && directions.includes(event.key)) {
      event.preventDefault()
      const directionMap: Record<string, string> = {
        ArrowUp: "north",
        ArrowDown: "south",
        ArrowLeft: "west",
        ArrowRight: "east",
      }
      const direction = directionMap[event.key]
      makeNextMove(mazeId, direction)
        .then((response) => {
          if (response.state === "over" || response.state === "won") {
            setGameEnded(true)
            setGameResult(response["state-result"])
          } else {
            fetchAndPrintMaze()
          }
        })
        .catch((error) => {
          console.error("Error making next move:", error)
        })
    }
  }

  return (
    <GameScreenContainer>
      <div onKeyDown={handleKeyDown} tabIndex={0} style={{ outline: "none" }}>
        {gameEnded ? (
          <div>
            <h2>{gameResult}</h2>
            <button onClick={() => window.location.reload()}>
              Start a new game
            </button>
          </div>
        ) : (
          mazeContent?.split("\n").map((row, rowIndex) => (
            <MazeRow key={rowIndex}>
              {row.split("").map((cell, cellIndex) => (
                <MazeCell key={cellIndex} cell={cell}>
                  {cell}
                </MazeCell>
              ))}
            </MazeRow>
          ))
        )}
      </div>
    </GameScreenContainer>
  )
}
