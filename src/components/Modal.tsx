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
        <p>High score: {highScore}</p>
        <button
          onClick={() => {
            setModal(false);
            setTop(320);
            setPipeLeft(300);
            setHighScore(0);
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Modal;
