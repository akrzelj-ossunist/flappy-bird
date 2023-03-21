import { useEffect, useState } from "react";
import pipe from "../assets/pipe.png";
import "../styles/pipes.scss";

function checkColision(bottomPipeHeight: any, pipeLeft: any, top: any) {
  if (pipeLeft <= 80) {
    if (600 - top > bottomPipeHeight && 600 - top < bottomPipeHeight + 150)
      return true;
    else return false;
  }
  return true;
}

const Pipes: React.FC<{
  modal: boolean;
  setModal: (val: boolean) => void;
  highScore: number;
  setHighScore: (val: number) => void;
  pipeLeft: number;
  setPipeLeft: (val: number) => void;
  top: number;
}> = ({
  modal,
  setModal,
  highScore,
  setHighScore,
  pipeLeft,
  setPipeLeft,
  top,
}) => {
  const [bottomPipeHeight, setBottomPipeHeight] = useState(
    Math.random() * (350 - 50) + 50
  );

  useEffect(() => {
    const pipeMove = setTimeout(() => {
      if (!modal && checkColision(bottomPipeHeight, pipeLeft, top))
        setPipeLeft(pipeLeft - 0.75);
      else {
        setModal(true);
      }
      if (pipeLeft < -75) {
        setHighScore(highScore + 1);
        setPipeLeft(300);
        setBottomPipeHeight(Math.random() * (350 - 50) + 50);
      }
    }, 3.5);
    return () => clearTimeout(pipeMove);
  });
  return (
    <>
      <img
        src={pipe}
        className="top-pipe"
        style={{
          left: `${pipeLeft}px`,
          height: `${600 - bottomPipeHeight - 150}px`,
        }}
      />
      <img
        src={pipe}
        className="bottom-pipe"
        style={{
          left: `${pipeLeft}px`,
          height: `${bottomPipeHeight}px`,
        }}
      />
    </>
  );
};

export default Pipes;
