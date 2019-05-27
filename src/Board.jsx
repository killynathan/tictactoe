import React from "react";
import Square from "./Square";

const Board = ({ boardState, onPlayerMove }) => {
  return (
    <div style={styles.container}>
      {boardState.map((column, x) => (
        <div style={styles.column} key={x}>
          {column.map((square, y) => (
            <Square
              content={square}
              borderRight={x < 2}
              borderBottom={y < 2}
              onClick={() => {
                onPlayerMove(x, y);
              }}
              key={y}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    height: 500,
    width: 500,
    display: "flex",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  },
  column: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  }
};

export default Board;
