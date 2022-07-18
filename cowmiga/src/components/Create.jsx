import React from "react";
import { useState } from "react";
import Stock from "./Stock";
import Gauge from "./Gauge";
import GreenArrow from "./GreenArrow";
import RedArrow from "./RedArrow";
import Arrows from "./Arrows";

const Create = () => {
  const [ticker, setTicker] = useState("aapl");
  const [tup, settup] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = { ticker };

    fetch("http://localhost:8000/stocksearch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((result) => result.json())
      .then((a) => {
        settup(JSON.parse(a));
      })
      .catch((err) => {
        console.log("error:", err);
      });
    console.log({ tup });
  };

  return (
    <div className="App" >
      <h2>Input a Ticker</h2>
      <form onSubmit={handleSubmit}>
        <label>Ticker Symbol:</label>
        <input
          type="text"
          required
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
        />
        <button>Search</button>
        {/* <p>Ticker : {ticker}</p>
        <p>SentimentScore : {tup[0]}</p>
        <p>ProbabilityScore : {tup[1]} </p> */}
      </form>
      <div className="App" style={{flexDirection: "row",
    display: 'flex',
    justifyContent: 'center',
    margin: 20
    }}>
        <div className="App" style={{width: 500}}>
          <p className="App" style={{ fontWeight: "bold", fontSize: 50, }}>
            SentimentScore
          </p>
          <Gauge score={tup[0] * 100} />
        
        </div>
        <div className="App" style={{width: 500}}>
          <p className="App" style={{ fontWeight: "bold", fontSize: 50, }}>
            ProbabilityScore
          </p>
          <Arrows probscore={tup[1]} />
        
        </div>
      </div>
        <Stock ticker={ticker} />
    </div>
  );
};

export default Create;
