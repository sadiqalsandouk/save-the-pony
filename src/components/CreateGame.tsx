import React, { useState, ChangeEvent, FormEvent } from 'react'
import { createMaze } from '../api/ponyChallenge'
import { Avatar, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

const CreateGame: React.FC = () => {
  const [mazeParams, setMazeParams] = useState({
    'maze-width': '15',
    'maze-height': '15',
    'maze-player-name': 'Applejack',
    'difficulty': '1',
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setMazeParams((prevParams) => ({
      ...prevParams,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const numericParams = {
        ...mazeParams,
        'maze-width': parseInt(mazeParams['maze-width']),
        'maze-height': parseInt(mazeParams['maze-height']),
        difficulty: parseInt(mazeParams.difficulty),
      }

      const mazeId = await createMaze(numericParams)
      console.log(mazeId)
    } catch (error) {
        return (
            <h1>Error</h1>
        )
    }
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
        bgcolor: 'background.paper',
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
          <Select name="maze-player-name" value={mazeParams['maze-player-name']} onChange={handleInputChange}>
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
    </Box>
  )
}

export default CreateGame