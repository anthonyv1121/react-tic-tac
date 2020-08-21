import React, { Component } from "react";
import { Stage } from "react-konva";
import { Board, Squares } from "../styled/TicTacToe";

class TicTacToe extends Component {
  constructor(props) {
    super(props);

    this.winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    this.state = {
      rows: 3,
      gameState: new Array(9).fill(false), // create array with 9 items set to false (9 squares on the board)
      ownMark: "X",
      otherMark: "O",
      gameOver: false,
      yourTurn: true,
      winner: false,
      win: false
    };
  }
  componentWillMount() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let size = height < width ? height * 0.8 : width * 0.8;
    let rows = this.state.rows;
    let unit = size / rows; // size of indivdual square
    let coordinates = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        coordinates.push([x * unit, y * unit]);
      }
    }

    this.setState({
      size,
      rows,
      unit,
      coordinates
    });
  }
  move = (index, marker) => {
    this.setState((prevState, prop) => {
      let { gameState, gameOver, yourTurn, winner } = prevState;
      yourTurn = !yourTurn;
      gameState[index] = marker;

      let foundWin = this.winChecker(gameState);
      console.log(foundWin);

      if (foundWin) {
        winner = gameState[foundWin[0]];
      }
      if (foundWin || !gameState.includes(false)) {
        gameOver = true;
      }
      if (!yourTurn && !gameOver) {
        this.makeAiMove(gameState);
      }
      return {
        gameState,
        gameOver,
        yourTurn,
        win: foundWin || false,
        winner
      };
    });
    // console.log(`Move: ${index}, ${marker}`);
  };

  makeAiMove = gameState => {
    let openSquares = [];
    gameState.forEach((square, index) => {
      if (!square) {
        openSquares.push(index);
      }
    });
    let aiMove = openSquares[this.random(0, openSquares.length)];
    setTimeout(() => {
      this.move(aiMove, this.state.otherMark);
    }, 3000);
  };

  random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) * min;
  };

  winChecker = gameState => {
    let combos = this.winningCombos;
    return combos.find(combo => {
      let [a, b, c] = combo;
      // console.log(gameState[a]);

      return (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      );
    });
  };

  turningTest = () => {};

  recordGame = () => {};
  render() {
    let {
      size,
      rows,
      unit,
      coordinates,
      gameState,
      win,
      gameOver,
      yourTurn,
      ownMark
    } = this.state;
    return (
      <div className="canvas">
        <Stage width={size} height={size}>
          <Board size={size} rows={rows} unit={unit} />
          <Squares
            unit={unit}
            coordinates={coordinates}
            gameState={gameState}
            win={win}
            gameOver={gameOver}
            yourTurn={yourTurn}
            ownMark={ownMark}
            move={this.move}
          />
        </Stage>
      </div>
    );
  }
}

export default TicTacToe;
