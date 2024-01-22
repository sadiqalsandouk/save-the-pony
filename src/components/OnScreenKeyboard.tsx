// OnScreenKeyboard.tsx
import React from "react";
import { ArrowKeysContainer, ArrowKeyButton } from "../components/GameScreen.styles";

interface OnScreenKeyboardProps {
  onArrowClick: (direction: string) => void;
}

const OnScreenKeyboard: React.FC<OnScreenKeyboardProps> = ({ onArrowClick }) => {
  const handleArrowClick = (direction: string) => {
    onArrowClick(direction);
  };

  return (
    <ArrowKeysContainer>
      <ArrowKeyButton onClick={() => handleArrowClick("ArrowUp")}>↑</ArrowKeyButton>
      <div>
        <ArrowKeyButton onClick={() => handleArrowClick("ArrowLeft")}>←</ArrowKeyButton>
        <ArrowKeyButton onClick={() => handleArrowClick("ArrowRight")}>→</ArrowKeyButton>
      </div>
      <ArrowKeyButton onClick={() => handleArrowClick("ArrowDown")}>↓</ArrowKeyButton>
    </ArrowKeysContainer>
  );
};

export default OnScreenKeyboard;
