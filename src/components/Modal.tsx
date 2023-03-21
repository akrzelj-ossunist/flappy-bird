import "../styles/modal.scss";

const Modal: React.FC<{
  setModal: (val: boolean) => void;
  setTop: (val: number) => void;
  setPipeLeft: (val: number) => void;
  setHighScore: (val: number) => void;
  highScore: number;
}> = ({ setModal, setTop, setPipeLeft, setHighScore, highScore }) => {
  return (
    <div className="modal">
      <div className="content">
        <p>Score: {highScore}</p>
        <div>
          <p>High score: {localStorage.getItem("highScore")}</p>
          <button
            onClick={() => {
              setModal(false);
              setTop(320);
              setPipeLeft(300);
              setHighScore(0);
              highScore > Number(localStorage.getItem("highScore")) &&
                localStorage.setItem("highScore", String(highScore));
            }}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
