import { useEffect, useState } from "react";
import background from "./assets/Flappy_Bird_Background.png";
import pipe from "./assets/pipe.png";

const BOARD_WIDTH = "350px";
const BOARD_HEIGHT = "600px";

function checkColision(bottomPipeHeight: any, pipeLeft: any, top: any) {
  if (pipeLeft <= 80) {
    if (600 - top > bottomPipeHeight && 600 - top < bottomPipeHeight + 200)
      return true;
    else return false;
  }
  return true;
}

function App() {
  const [top, setTop] = useState(320);
  const [pipeLeft, setPipeLeft] = useState(300);
  const [bottomPipeHeight, setBottomPipeHeight] = useState(
    Math.random() * (350 - 50) + 50
  );
  const [highScore, setHighScore] = useState(0);
  const [modal, setModal] = useState(true);
  useEffect(() => {
    const gravity = setTimeout(() => {
      if (top < 560 && !modal && checkColision(bottomPipeHeight, pipeLeft, top))
        setTop(top + 40 > 560 ? 560 : top + 40);
      else setModal(true);
    }, 120);
    return () => clearTimeout(gravity);
  });
  useEffect(() => {
    const pipeMove = setTimeout(() => {
      if (!modal) setPipeLeft(pipeLeft - 25);
      if (pipeLeft < -75) {
        setHighScore(highScore + 1);
        setPipeLeft(300);
        setBottomPipeHeight(Math.random() * (350 - 50) + 50);
      }
    }, 120);
    return () => clearTimeout(pipeMove);
  });
  document.body.style.overflowY = "hidden";
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#F4F4F4",
      }}
    >
      <div
        style={{
          position: "relative",
          width: BOARD_WIDTH,
          height: BOARD_HEIGHT,
          overflow: "hidden",
        }}
      >
        {modal && (
          <div
            style={{
              background: "rgba(0,0,0,0.4)",
              filter: "blur(100%)",
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: "1",
              borderRadius: "10px",
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "120px",
                borderRadius: "20px",
                position: "absolute",
                background: "white",
                top: "40%",
                left: "22%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <p
                style={{
                  fontFamily: "cursive",
                  fontSize: "24px",
                  fontWeight: "bold",
                  margin: "0",
                }}
              >
                High score: {highScore}
              </p>
              <button
                onClick={() => {
                  setModal(false);
                  setTop(320);
                  setPipeLeft(300);
                  setHighScore(0);
                }}
                style={{
                  border: "2px black solid",
                  background: "white",
                  width: "80px",
                  height: "30px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Play
              </button>
            </div>
          </div>
        )}
        <img
          onClick={() => {
            top > 20 &&
              setTop((prev) => {
                return prev - 90;
              });
          }}
          src={background}
          alt=""
          width="100%"
          height="100%"
          style={{ borderRadius: "10px" }}
        />
        <img
          src={pipe}
          alt=""
          style={{
            position: "absolute",
            left: `${pipeLeft}px`,
            top: "0",
            width: "75px",
            height: `${600 - bottomPipeHeight - 200}px`,
            transform: "scaleY(-1)",
          }}
        />
        <img
          src={pipe}
          alt=""
          style={{
            position: "absolute",
            left: `${pipeLeft}px`,
            bottom: "0",
            width: "75px",
            height: `${bottomPipeHeight}px`,
          }}
        />
        <label
          style={{
            position: "absolute",
            top: top,
            left: "40px",
            background: "red",
            width: "40px",
            height: "40px",
            borderRadius: "100%",
            transition: "ease 300ms",
            margin: 0,
          }}
        ></label>
      </div>
    </div>
  );
}

export default App;
