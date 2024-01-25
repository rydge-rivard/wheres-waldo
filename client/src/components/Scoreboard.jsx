import { useState, useEffect } from "react";

export default function Scoreboard() {
  const [scores, setScores] = useState();

  async function getScores() {
    try {
      const response = await fetch(`http://localhost:8080/scores`);
      const scoresResp = await response.json();
      setScores(scoresResp);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getScores();
  }, []);

  return (
    <>
      <ol>
        <li></li>
      </ol>
    </>
  );
}
