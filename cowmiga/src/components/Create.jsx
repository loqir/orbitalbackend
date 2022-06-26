import React from 'react';
import { useState } from 'react';
import Stock from './Stock';
import Gauge from './Gauge';

const Create = () => {
    const [ticker, setTicker] = useState("aapl")
    const [score, setScore] = useState(0.000)


    const handleSubmit = (e) => {
        e.preventDefault();
        const info = { ticker };

        fetch('http://localhost:8000/stocksearch', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info)
        }).then((result) => result.json()).then(value => setScore(value))

            .catch(err => {
                console.log("error:", err);
            });



    }

    return (
        <div className="app">
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
                <p>Ticker : {ticker}</p>
                <p>Score : {score}</p>
            </form>
            <Gauge score={score * 100} />
            <Stock ticker={ticker} />

        </div>
    );
}

export default Create;