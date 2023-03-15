//main.js
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

function play() {
    board = new Board(ctx);
    console.table(board.grid);
  }

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(x, y, width, height);
