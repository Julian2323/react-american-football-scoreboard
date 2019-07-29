//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{score1}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{score2}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown">onClick={()=>setScore1(score1 + 7)}</button>
          <button className="homeButtons__fieldGoal">onClick={()=>setScore1(score1 + 3)}</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown">onClick={()=>setScore2(score2 + 7)}</button>
          <button className="awayButtons__fieldGoal">onClick={()=>setScore2(score2 + 3)}</button>
        </div>
      </section>
    </div>
  );
}

export default App;
