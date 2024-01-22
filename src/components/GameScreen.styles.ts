import styled, { keyframes } from 'styled-components'
import { applejackImage, twilightsparkleImage, fluttershyImage, rainbowdashImage, rarityImage, domokunImage, exitImage, lineImage, dashImage, dotImage } from '../img/index'

export const ArrowKeysContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`

export const ArrowKeyButton = styled.button`
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
`

export const GameScreenContainer = styled.div`
  text-align: center;
  padding: 1rem;
`

export const MazeRow = styled.div`
  display: flex;
`

export const MazeCell = styled.div<{ cell: string; selectedPony: string }>`
  color: ${({ cell }) => getCellBackgroundColor(cell)};
  width: 0.45rem;
  height: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  background-image: ${({ cell, selectedPony }) => getPonyImage(cell, selectedPony)};
  background-size: contain;
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    width: 0.29rem;
    height: 0.6rem;
  }
`

const getCellBackgroundColor = (cell: string): string => {
  switch (cell) {
    case '|':
      return 'transparent';
    case '-':
      return 'transparent';
    case '+':
      return 'transparent';
    case 'D':
      return 'transparent';
    case 'E':
      return 'transparent';
    case 'P':
      return 'transparent';
    default:
      return '#eee';
  }
}

const getPonyImage = (cell: string, selectedPony: string): string => {
  if (cell === 'P') {
    switch (selectedPony) {
      case 'Applejack':
        return `url(${applejackImage})`;
      case 'Twilight Sparkle':
        return `url(${twilightsparkleImage})`;
      case 'Fluttershy':
        return `url(${fluttershyImage})`;
      case 'Rainbow Dash':
        return `url(${rainbowdashImage})`;
      case 'Rarity':
        return `url(${rarityImage})`;
      default:
        return 'none';
    }
  } else if (cell === 'D') {
    return `url(${domokunImage})`
  } else if (cell === 'E') {
    return `url(${exitImage})`
  } else if (cell === '|') {
    return `url(${lineImage})`
  } else if (cell === '-') {
    return `url(${dashImage})`
  } else if (cell === '+') {
    return `url(${dotImage})`
  }
  return 'none';
}
