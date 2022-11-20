import React, { useState } from "react";
import "./EightBall.css"

const EightBall = ({ answers }) => {

    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");
    const [count, setCount] = useState({
        green: 0,
        red: 0,
        goldenrod: 0
    });

    // Function to choose random answer from "answers" ARRAY
    const randomAnswer = () => {
        return answers[Math.floor(Math.random() * answers.length)];
    }

    // Function to set the random msg and color based on randomAnswer function
    const random = () => {
        const { msg, color } = randomAnswer();
        setMsg(msg);
        setColor(color);

        if (color === "red") {
            setCount({
                ...count,
                red : count[color]+1,
            })
        }
        if (color === "green") {
            setCount({
                ...count,
                green : count[color]+1,
            })
        }
        if (color === "goldenrod") {
            setCount({
                ...count,
                goldenrod : count[color]+1,
            })
        }
    }

    // Function to reset the ball to initial state
    const restart = () => {
        setMsg("Think of a Question");
        setColor("black");
        setCount({
            green: 0,
            red: 0,
            goldenrod: 0
        });
    }

    return (
        
        <div className="EightBall">
            <button className="EightBall-ball"
                onClick = {random} style = {{backgroundColor: color}}>
                    {msg}
            </button>
            <button className="EightBall-reset-btn" onClick={restart} >Reset</button>
            
            <h4>Counter of colors: Red - {count.red} Green - {count.green} Goldenrod - {count.goldenrod}</h4>
        </div>
    );
};

export default EightBall;