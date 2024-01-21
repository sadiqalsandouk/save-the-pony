import styled from 'styled-components';
import { applejackImage, twilightsparkleImage, fluttershyImage, rainbowdashImage, rarityImage, domokunImage, exitImage, lineImage, dashImage, dotImage } from '../img/index';

export const GameScreenContainer = styled.div`
  text-align: center;
  padding: 4rem;
`;

export const MazeRow = styled.div`
  display: flex;
`;

export const MazeCell = styled.div<{ cell: string; selectedPony: string }>`
  color: ${({ cell }) => getCellBackgroundColor(cell)};
  width: 0.5rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  background-image: ${({ cell, selectedPony }) => getPonyImage(cell, selectedPony)};
  background-size: contain;
  background-repeat: no-repeat;
`;

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
};

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
};
