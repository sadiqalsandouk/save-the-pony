import axios from 'axios'
import { createMaze, getMazeCurrentState, makeNextMove, printMaze } from './ponyChallenge'

jest.mock('axios')
describe('Pony Challenge API', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  const mazeParams = {
    'maze-width': 15,
    'maze-height': 15,
    'maze-player-name': 'Applejack',
    difficulty: 1,
  }
  const mazeId = '5630aab8-c307-4b60-971c-703c784d4525'
  const mockMazeState = {
    "pony": [
      121
    ],
    "domokun": [
      218
    ],
    "end-point": [
      164
    ],
    "size": [
      15,
      15
    ],
    "difficulty": 1,
    "data": [
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "west",
        "north"
      ],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "west",
        "north"
      ],
      [
        "west",
        "north"
      ],
      [],
      [
        "west"
      ],
      [],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [],
      [
        "west"
      ],
      [
        "west"
      ],
      [],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [],
      [
        "west",
        "north"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "west",
        "north"
      ],
      [],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [],
      [
        "west",
        "north"
      ],
      [],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [],
      [
        "west",
        "north"
      ],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [],
      [
        "west"
      ],
      [],
      [
        "west",
        "north"
      ],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [],
      [
        "west"
      ],
      [],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "west",
        "north"
      ],
      [],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "west",
        "north"
      ],
      [],
      [
        "west"
      ],
      [
        "west"
      ],
      [],
      [
        "west"
      ],
      [
        "north"
      ],
      [],
      [
        "west",
        "north"
      ],
      [],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "west",
        "north"
      ],
      [],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "west",
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [],
      [
        "west"
      ],
      [],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [],
      [
        "west",
        "north"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "west"
      ],
      [
        "north"
      ],
      [],
      [
        "west"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [
        "north"
      ],
      [],
      []
    ],
    "maze_id": "5630aab8-c307-4b60-971c-703c784d4525",
    "game-state": {
      "state": "Active",
      "state-result": "Successfully created"
    }
  }

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('createMaze should create a new maze', async () => {

    mockedAxios.post.mockResolvedValueOnce({ data: { maze_id: 'mockedMazeId' } })

    const mazeId = await createMaze(mazeParams)

    expect(mazeId).toEqual('mockedMazeId')
    expect(mockedAxios.post).toHaveBeenCalledWith(
      'https://ponychallenge.trustpilot.com/pony-challenge/maze',
      mazeParams
    )
  })

  it('getMazeCurrentState should get the current state of the maze', async () => {


    mockedAxios.get.mockResolvedValueOnce({ data: mockMazeState })

    const mazeState = await getMazeCurrentState(mazeId)

    expect(mazeState).toEqual(mockMazeState)
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://ponychallenge.trustpilot.com/pony-challenge/maze/${mazeId}`
    )
  })

  it('makeNextMove should make the next move in the maze', async () => {
    
    const direction = "north"
      const mockMazeDirection = {
        "state": "active",
        "state-result": "Can't walk in there"
      }

    mockedAxios.post.mockResolvedValueOnce({ data: mockMazeDirection })

    const response = await makeNextMove(mazeId, direction)

    expect(response).toEqual(mockMazeDirection)
    expect(mockedAxios.post).toHaveBeenCalledWith(
      `https://ponychallenge.trustpilot.com/pony-challenge/maze/${mazeId}`,
      { direction }
    )
  })

  it('printMaze should print the maze', async () => {
    const mazeId = 'mockedMazeId'
    const mockMazeContent = 
    `+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
    |       |   |                                           |   |
    +---+   +   +   +---+---+---+---+---+---+   +---+---+   +   +
    |       |       |                       |   |       |       |
    +   +---+   +---+   +---+---+---+---+---+   +   +   +---+   +
    |   |   |   |       |                       |   |   |       |
    +   +   +   +---+   +   +---+   +---+---+---+   +   +   +---+
    |   |           |   |       |   |           |   |   |   |   |
    +   +---+---+   +   +---+   +---+   +---+   +---+   +   +   +
    |           |   |       |           |   |       |       |   |
    +---+---+   +   +   +---+---+---+---+   +---+   +   +---+   +
    |           |   |               |           |   |           |
    +   +---+---+   +---+   +---+   +---+   +   +   +---+---+   +
    |           |           |           |   |   |   |           |
    +---+---+   +---+---+   +---+---+   +   +   +   +---+---+---+
    |           |       |   |       |       |   |               |
    +   +---+---+---+   +   +   +   +---+---+   +---+---+---+   +
    |     P         |       |   |   |           |               |
    +---+---+---+   +---+---+   +   +---+   +---+   +---+---+   +
    |   |           |       |   |       |       |   |       |   |
    +   +   +---+---+   +   +   +---+   +---+   +   +   +   +---+
    |   |   |           |       |   |   |       |       |     E |
    +   +   +---+---+   +---+---+   +   +---+---+   +---+---+   +
    |   |   |       |       |       |           |       |       |
    +   +   +   +   +---+   +---+   +---+---+   +   +---+   +   +
    |   |       |           |       |       |   |   |       |   |
    +   +---+---+---+---+---+   +   +   +   +   +---+   +---+   +
    |           |               |       |   |           |   |   |
    +   +   +---+   +   +---+---+---+---+---+---+---+---+   +   +
    |   |           |                     D                     |
    +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+`

    mockedAxios.get.mockResolvedValueOnce({ data: mockMazeContent })

    const mazeContent = await printMaze(mazeId)

    expect(mazeContent).toEqual(mockMazeContent)
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://ponychallenge.trustpilot.com/pony-challenge/maze/${mazeId}/print`
    )
  })
  
})
