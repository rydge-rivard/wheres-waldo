import waldo from "../assets/waldo.jpeg";
import "./Picture.css";
import { useState, useEffect } from "react";

export default function Picture() {
  const [game, setGame] = useState();
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [characters, setCharacters] = useState([
    { x_location: undefined, y_location: undefined },
  ]);

  async function getCharacters() {
    try {
      const response = await fetch(`http://localhost:8080`);
      const characters = await response.json();
      setCharacters(characters);
    } catch (err) {
      console.log(err);
    }
  }

  async function postNewGame(data) {
    try {
      const response = await fetch(`http://localhost:8080/game`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const gameResp = await response.json();
      console.log(gameResp);
      setGame(gameResp);
    } catch (err) {
      console.log(err);
    }
  }

  async function postGameUpdate(data) {
    try {
      const response = await fetch(`http://localhost:8080/game/won`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const gameResp = await response.json();
      console.log(gameResp);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCharacters();
    postNewGame({ start: Date() });
  }, []);

  function targetBox(x, y) {
    setCoordinates({ x: x, y: y });
  }

  function checkMatch(x, y) {
    if (
      characters[0].x_location - x < 15 &&
      characters[0].x_location - x > -15 &&
      characters[0].y_location - y < 25 &&
      characters[0].y_location - y > -35
    ) {
      resetGame();
    } else {
      console.log("No match.");
    }
  }

  function resetGame() {
    alert("You found Waldo!");
    postGameUpdate({ end: Date(), game: game });
    postNewGame({ start: Date() });
    setCoordinates({ x: 0, y: 0 });
  }

  checkMatch(coordinates.x, coordinates.y);

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
