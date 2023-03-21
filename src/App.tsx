import { useState } from "react";
import background from "./assets/Flappy_Bird_Background.png";
import Bird from "./components/Bird";
import Modal from "./components/Modal";
import Pipes from "./components/Pipes";
import "./styles/index.scss";

function App() {
  const [top, setTop] = useState(320);
  const [pipeLeft, setPipeLeft] = useState(300);
  const [highScore, setHighScore] = useState(0);
  const [modal, setModal] = useState(true);
  return (
    <div className="container">
      <div
        className="game-container"
        onClick={() => {
          top > 20 &&
            !modal &&
            setTop((prev) => {
              return prev - 120;
            });
        }}
      >
        {modal && (
          <Modal
            setModal={setModal}
            setTop={setTop}
            setPipeLeft={setPipeLeft}
            setHighScore={setHighScore}
            highScore={highScore}
          />
        )}
        <img className="background" src={background} />
        <Pipes
          modal={modal}
          setModal={setModal}
          highScore={highScore}
          setHighScore={setHighScore}
          pipeLeft={pipeLeft}
          setPipeLeft={setPipeLeft}
          top={top}
        />
        <Bird top={top} setTop={setTop} modal={modal} setModal={setModal} />
      </div>
    </div>
  );
}

export default App;
