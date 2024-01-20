import styled from 'styled-components';
import ponyImage from './TwilightSparkle.png';

export const GameScreenContainer = styled.div`
  text-align: center;
  padding: 4rem;
`;

export const MazeRow = styled.div`
  display: flex;
`;

export const MazeCell = styled.div<{ cell: string }>`
  color: ${({ cell }) => getCellBackgroundColor(cell)};
  width: 1rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  background-image: ${({ cell }) => (cell === 'P' ? `url(${ponyImage})` : 'none')};
  background-size: contain;
`;

const getCellBackgroundColor = (cell: string): string => {
  switch (cell) {
    case '|':
      return 'red';
    case '-':
      return 'blue';
    case '+':
      return 'green';
    case 'D':
      return '#f00';
    case 'E':
      return '#0f0';
    default:
      return '#eee';
  }
};
