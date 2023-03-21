import { useEffect } from "react";
import "../styles/bird.scss";

const Bird: React.FC<{
  top: number;
  setTop: (val: number) => void;
  modal: boolean;
  setModal: (val: boolean) => void;
}> = ({ top, setTop, modal, setModal }) => {
  useEffect(() => {
    const gravity = setTimeout(() => {
      if (top < 560 && !modal) setTop(top + 40 > 560 ? 560 : top + 1.3);
      else setModal(true);
    }, 3);
    return () => clearTimeout(gravity);
  });
  return <label className="bird" style={{ top: top }}></label>;
};

export default Bird;
