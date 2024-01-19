import styled from 'styled-components'

export const GameScreenContainer = styled.div`
  text-align: center;
`;

export const MazeRow = styled.div`
  display: flex;
`;

export const MazeCell = styled.div<{ cell: string }>`
  background-color: ${({ cell }) => getCellBackgroundColor(cell)};
  border: 1px solid #000;
  color: transparent;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const getCellBackgroundColor = (cell: string): string => {
  switch (cell) {
    case '|':
    case '-':
    case '+':
      return '#333';
    case 'P':
      return '#00f';
    case 'D':
      return '#f00';
    case 'E':
      return '#0f0';
    default:
      return '#eee';
  }
};