import React, { useRef, useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';


const TicTacToe = () => {
  let [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  
  // Keep titleRef for dynamic winner message
  let titleRef = useRef(null);

  // 🛑 Removed all individual box refs (box1...box9)

  // 1. Core Toggle Logic
  const toggle = (num) => {
    if (lock || data[num] !== "") {
      return;
    }
    
    // Create a copy of the state array to modify (immutability)
    const newData = [...data];

    if (count % 2 === 0) {
      newData[num] = "x";
    } else {
      newData[num] = "o";
    }
    
    // Update state to trigger re-render
    setData(newData); 
    setCount(count + 1);
    
    // Check win condition based on the *new* data
    checkWin(newData);
  };

  // 2. Win Checker
  const checkWin = (currentData) => {
    if (
      (currentData[0] === currentData[1] && currentData[1] === currentData[2] && currentData[2] !== "") ||
      (currentData[3] === currentData[4] && currentData[4] === currentData[5] && currentData[5] !== "") ||
      (currentData[6] === currentData[7] && currentData[7] === currentData[8] && currentData[8] !== "") ||
      (currentData[0] === currentData[3] && currentData[3] === currentData[6] && currentData[6] !== "") ||
      (currentData[1] === currentData[4] && currentData[4] === currentData[7] && currentData[7] !== "") ||
      (currentData[2] === currentData[5] && currentData[5] === currentData[8] && currentData[8] !== "") ||
      (currentData[0] === currentData[4] && currentData[4] === currentData[8] && currentData[8] !== "") ||
      (currentData[2] === currentData[4] && currentData[4] === currentData[6] && currentData[6] !== "")
    ) {
      // Find the winner from any winning line
      const winner = currentData[0] || currentData[3] || currentData[6] || currentData[1] || currentData[2];
      won(winner);
    } else if (count === 8) { // Check for draw after the 9th move (count = 8 before the final state update)
      setLock(true);
      titleRef.current.innerHTML = "It's a Draw! 🤝";
    }
  };

  // 3. Winner Handler
  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations : <img src=${cross_icon} alt="X wins"/>`;
    } else {
      titleRef.current.innerHTML = `Congratulations : <img src=${circle_icon} alt="O wins"/>`;
    }
  };

  // 4. Reset Function
  const reset = () => {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]); // Reset state array
    setCount(0);
    titleRef.current.innerHTML = 'Tic Tac Toe In <span>React</span>';
  };
  
  const renderBoxContent = (index) => {
    if (data[index] === 'x') {
      return <img src={cross_icon} alt="cross" />;
    } else if (data[index] === 'o') {
      return <img src={circle_icon} alt="circle" />;
    }
    return null;
  };

  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}>
        TicTacToe Game In <span>React</span>
      </h1>

      <div className='board'>
        <div className="row1">
          {/* Use the index in onClick, and render content from state */}
          <div className="boxes" onClick={() => toggle(0)}>{renderBoxContent(0)}</div>
          <div className="boxes" onClick={() => toggle(1)}>{renderBoxContent(1)}</div>
          <div className="boxes" onClick={() => toggle(2)}>{renderBoxContent(2)}</div>
        </div>
        
        <div className="row2">
          <div className="boxes" onClick={() => toggle(3)}>{renderBoxContent(3)}</div>
          <div className="boxes" onClick={() => toggle(4)}>{renderBoxContent(4)}</div>
          <div className="boxes" onClick={() => toggle(5)}>{renderBoxContent(5)}</div>
        </div>

        <div className="row3">
          <div className="boxes" onClick={() => toggle(6)}>{renderBoxContent(6)}</div>
          <div className="boxes" onClick={() => toggle(7)}>{renderBoxContent(7)}</div>
          <div className="boxes" onClick={() => toggle(8)}>{renderBoxContent(8)}</div>
        </div>
      </div>
      
      <button className='reset' onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
