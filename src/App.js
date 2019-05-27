import React, { useState } from "react";
import "./App.css";
import TicTacToe from "./TicTacToe";
import Board from "./Board";

function App() {
  const [board, setBoard] = useState(new TicTacToe());

  const boardState = board.getBoardState();

  const handlePlayerMove = (x, y) => {
    setBoard(board.playerMove(x, y));
  };

  const handleReset = () => {
    setBoard(board.reset());
  };

  const winner = board.getWinner();
  return (
    <div className="App">
      {winner && (
        <React.Fragment>
          <h1>Winner: {winner} </h1>
          <button onClick={handleReset}>Play Again</button>
        </React.Fragment>
      )}
      <Board boardState={boardState} onPlayerMove={handlePlayerMove} />
    </div>
  );
}

export default App;
