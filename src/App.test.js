import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TicTacToe from "./TicTacToe";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("TicTacToe: Initializes empty board", () => {
  const board = new TicTacToe();
  const boardState = board.getBoardState();
  expect(boardState.length).toEqual(3);
  for (let row of boardState) {
    expect(row.length).toEqual(3);
    for (let col of row) {
      expect(col).toEqual("");
    }
  }
});

it("TicTacToe: Allows user to make a move followed by a computer move", () => {
  let board = new TicTacToe();
  board = board.playerMove(1, 1);
  const boardState = board.getBoardState();
  expect(boardState[1][1]).toEqual("X");
  expect(boardState.some(row => row.some(col => col === "O"))).toBe(true);
});
