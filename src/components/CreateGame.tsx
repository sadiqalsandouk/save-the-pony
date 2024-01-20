import { useState, ChangeEvent, FormEvent } from 'react'
import { createMaze } from '../api/ponyChallenge'
import { Avatar, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { GameScreen } from './GameScreen'

export const CreateGame = () => {
  const [mazeParams, setMazeParams] = useState({
    'maze-width': '15',
    'maze-height': '15',
    'maze-player-name': 'Applejack',
    'difficulty': '1',
  })

  const [gameStarted, setGameStarted] = useState(false)
  const [mazeId, setMazeId] = useState(null)

  const handleInputChange = (e: ChangeEvent<any>) => {
    setMazeParams((prevParams) => ({
      ...prevParams,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target
    setMazeParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      const numericParams = {
        ...mazeParams,
        'maze-width': parseInt(mazeParams['maze-width']),
        'maze-height': parseInt(mazeParams['maze-height']),
        difficulty: parseInt(mazeParams.difficulty),
      }
  
      const mazeId = await createMaze(numericParams)
      setGameStarted(true)
      setMazeId(mazeId)
  }

  const playerNames = ['Applejack', 'Fluttershy', 'Rainbow Dash', 'Twilight Sparkle']

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
        borderRadius: 4,
        boxShadow: 1,
        bgcolor: 'white',
        maxWidth: 400,
        margin: 'auto',
      }}
    >
      <Typography variant="h4" color={'black'} gutterBottom>
        Create Game
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <TextField
        type="number"
        label="Maze Width"
        name="maze-width"
        value={mazeParams['maze-width']}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        inputProps={{ min: 15, max: 25 }}
        />

        <TextField
        type="number"
        label="Maze Height"
        name="maze-height"
        value={mazeParams['maze-height']}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        inputProps={{ min: 15, max: 25 }}
        />

        <TextField
        type="number"
        label="Difficulty"
        name="difficulty"
        value={mazeParams.difficulty}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        inputProps={{ min: 1, max: 10 }}
        />

        <FormControl fullWidth margin="normal">
          <Select name="maze-player-name" value={mazeParams['maze-player-name']} onChange={handleSelectChange}>
            {playerNames.map((name) => (
              <MenuItem key={name} value={name}>
                <Avatar>{name.charAt(0)}</Avatar> {/* TODO: Pony Avatars */}
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 16 }}>
          Start Game
        </Button>
      </form>
      {gameStarted && <GameScreen mazeId={mazeId} />}
    </Box>
  )
}
