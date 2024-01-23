import waldo from "../assets/waldo.jpeg";
import "./Picture.css";
import { useState } from "react";

// Waldo is between 1133 and 1193 on the pageX axis
// and 667 / 731 on the pageY axis
// if click is in that box, then the game is won

export default function Picture() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  function targetBox(x, y) {
    setCoordinates({ x: x, y: y });
  }
  console.log(coordinates);

  return (
    <>
      <img src={waldo} alt="" onClick={(e) => targetBox(e.pageX, e.pageY)} />
      <div
        className="target-box"
        style={{ left: coordinates.x - 30, top: coordinates.y - 30 }}
      ></div>
    </>
  );
}
