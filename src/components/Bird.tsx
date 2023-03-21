import { useEffect, useState } from "react";
import "../styles/bird.scss";

function jump(
  top: any,
  modal: any,
  setTop: any,
  setMovement: any,
  height: any,
  setHeight: any
) {
  const gravity = setTimeout(() => {
    if (height > 0 && !modal) {
      setTop(top - 2);
      setHeight(height - 2);
    } else {
      setMovement(false);
      setHeight(100);
    }
  }, 3);
  return () => clearTimeout(gravity);
}

function fall(top: any, modal: any, setModal: any, setTop: any) {
  const gravity = setTimeout(() => {
    if (top < 600 && !modal) setTop(top + 1.3);
    else setModal(true);
  }, 3);
  return () => clearTimeout(gravity);
}

const Bird: React.FC<{
  top: number;
  setTop: (val: number) => void;
  modal: boolean;
  setModal: (val: boolean) => void;
  movement: boolean;
  setMovement: (val: boolean) => void;
}> = ({ top, setTop, modal, setModal, movement, setMovement }) => {
  const [height, setHeight] = useState(100);
  useEffect(() => {
    movement
      ? jump(top, modal, setTop, setMovement, height, setHeight)
      : fall(top, modal, setModal, setTop);
  });

  return <label className="bird" style={{ top: top }}></label>;
};

export default Bird;
