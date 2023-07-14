import { colouring } from "./pureHelpers/colouring.js";

export function fillDown(global) {
  var doneSomething = false;
  var squares = global.squares;
  var width = global.width;

  for (let i = 0; i < (global.height * width) - (width * 2) + 1; i++) {
    const currentSquare = squares[i];
    const nextSquare = squares[i + 1];
    const nextTwoSquares = squares[i + 2];
    const nextThreeSquares = squares[i + 3];
    const nextEightSquares = squares[i + 8];
    const nextNineSquares = squares[i + 9];
    const nextTenSquares = squares[i + 10];
    const nextElevenSquares = squares[i + 11];

    if (currentSquare.className == 1 && nextEightSquares.className == 0) {
      nextEightSquares.className = 1;
      currentSquare.className = 0;
      doneSomething = true;
      colouring(global);
    } else if (
      currentSquare.className == 2 &&
      nextSquare.className == 2 &&
      (nextEightSquares.className == 0 || nextNineSquares.className == 0)
    ) {
      if (nextEightSquares.className == 0 && nextNineSquares.className == 0) {
        nextEightSquares.className = 2;
        nextNineSquares.className = 2;
        currentSquare.className = 0;
        nextSquare.className = 0;
        doneSomething = true;
        colouring(global);
      }
      i += 1;
    } else if (
      currentSquare.className == 3 &&
      nextSquare.className == 3 &&
      nextTwoSquares.className == 3 &&
      (nextEightSquares.className == 0 ||
        nextNineSquares.className == 0 ||
        nextTenSquares.className == 0)
    ) {
      if (
        nextEightSquares.className == 0 &&
        nextNineSquares.className == 0 &&
        nextTenSquares.className == 0
      ) {
        nextEightSquares.className = 3;
        nextNineSquares.className = 3;
        nextTenSquares.className = 3;
        currentSquare.className = 0;
        nextSquare.className = 0;
        nextTwoSquares.className = 0;
        doneSomething = true;
        colouring(global);
      }
      i += 2;
    } else if (
      currentSquare.className == 4 &&
      nextSquare.className == 4 &&
      nextTwoSquares.className == 4 &&
      nextThreeSquares.className == 4 &&
      (nextEightSquares.className == 0 ||
        nextNineSquares.className == 0 ||
        nextTenSquares.className == 0 ||
        nextElevenSquares.className == 0)
    ) {
      if (
        nextEightSquares.className == 0 &&
        nextNineSquares.className == 0 &&
        nextTenSquares.className == 0 &&
        nextElevenSquares.className == 0
      ) {
        nextEightSquares.className = 4;
        nextNineSquares.className = 4;
        nextTenSquares.className = 4;
        nextElevenSquares.className = 4;
        currentSquare.className = 0;
        nextSquare.className = 0;
        nextTwoSquares.className = 0;
        nextThreeSquares.className = 0;
        doneSomething = true;
        colouring(global);
      }
      i += 3;
    }
  }

  if (doneSomething) {}
}