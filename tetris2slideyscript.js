"use strict";  // used to enable strict mode in JavaScript. This mode helps developers write more secure and optimized code.
 const canvas = document.getElementById("slidey");  
 const context = canvas.getContext("2d");  
 context.scale(20, 20); 

 function arenaSweep() {  // is a function that checks for complete rows in the game board and removes them from the board.
  let rowCount = 1;  
  outer: for (let y = arena.length - 1; y > 0; --y) {  
   for (let x = 0; x < arena[y].length; ++x) {  
    if (arena[y][x] === 0) {  
     continue outer;  
    }  
   }  
   const row = arena.splice(y, 1)[0].fill(0);  
   arena.unshift(row);  
   ++y;  
   player.score += rowCount * 10;  
   rowCount *= 2;  
  }  
 }  
 function collide(arena, player) {  // is a function that checks if a piece collides with the game board or another piece.
  const m = player.matrix;  
  const o = player.pos;  
  for (let y = 0; y < m.length; ++y) {  
   for (let x = 0; x < m[y].length; ++x) {  
    if (m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {  
     return true;  
    }  
   }  
  }  
  return false;  
 }  
 function createMatrix(w, h) { //  is a function that creates a matrix (a two-dimensional array) with width w and height h, initialized to all 0s.
  const matrix = [];  
  while (h--) {  
   matrix.push(new Array(w).fill(0));  
  }  
  return matrix;  
 }  
 function createPiece(type) {  // is a function that creates a piece with the specified type.
  if (type === "1") {  
   return [  
    [1],  
   ];  
  } else if (type === "2") {  
   return [  
    [1,1],  
  
   ];  
  } else if (type === "3") {  
   return [  
    [1,1,1],  
 
   ];  
  } else if (type === "4") {  
   return [  
    [1,1,1,1],    
   ];  } 
 }  
 function drawMatrix(matrix, offset) {  //  is a function that draws a matrix on the canvas at the specified offset.
  matrix.forEach((row, y) => {  
   row.forEach((value, x) => {  
    if (value !== 0) {  
     context.fillStyle = colors[value];  
     context.fillRect(x + offset.x, y + offset.y, 1, 1);  
    }  
   });  
  });  
 }  
 function draw() {  // is a function that clears the canvas, draws the game board and the current piece.
  context.fillStyle = "#000";  
  context.fillRect(0, 0, canvas.width, canvas.height);  
  drawMatrix(arena, { x: 0, y: 0 });  
  drawMatrix(player.matrix, player.pos);  
 }  
 function merge(arena, player) {  //is a function that merges the current piece with the game board.
  player.matrix.forEach((row, y) => {  
   row.forEach((value, x) => {  
    if (value !== 0) {  
     arena[y + player.pos.y][x + player.pos.x] = value;  
    }  
   });  
  });  
 }  

 function playerDrop() {  //  is a function that moves the current piece down and merges it with the game board if it collides with something.
  player.pos.y++;  
  if (collide(arena, player)) {  
   player.pos.y--;  
   merge(arena, player);  
   playerReset();  
   arenaSweep();  
   updateScore();  
  }
  dropCounter = 0;
 }

//  playerMove(offset) is a function that moves the current piece horizontally by the specified offset.

// playerReset() is a function that resets the game after a piece has been merged with the game board.

// playerRotate(dir) is a function that rotates the current piece in the specified direction.

// let dropCounter = 0; is a variable that keeps track of the elapsed time since the last drop.

// let dropInterval = 1000; is a variable that sets the drop interval (how often a piece should drop).

// let lastTime = 0; is a variable that keeps track of the last time the game was updated.

// update(time = 0) is the game loop that updates the game state, draws the game and schedules the next update.

// updateScore() updates the score on the HTML page.

//document.addEventListener("keydown", (event) => //{...} listens for keyboard events and updates the game state accordingly. The arrow keys are used to move the current piece horizontally and down, and the space key is used to rotate the current piece.

 function playerMove(offset) {
  player.pos.x += offset;
  if (collide(arena, player)) {
   player.pos.x -= offset;
  }
 }  
 function playerReset() {  
  const pieces = "1234";  
  player.matrix = createPiece(pieces[(pieces.length * Math.random()) | 0]);  
  player.pos.y = 0;  
  player.pos.x =  
   ((arena[0].length / 2) | 0) - ((player.matrix[0].length / 2) | 0);  
  if (collide(arena, player)) {  
   arena.forEach((row) => row.fill(0));  
   player.score = 0;  
   updateScore();  
  }  
 }  
 function playerRotate(dir) {  
  const pos = player.pos.x;  
  let offset = 1;  
  rotate(player.matrix, dir);  
  while (collide(arena, player)) {  
   player.pos.x += offset;  
   offset = -(offset + (offset > 0 ? 1 : -1));  
   if (offset > player.matrix[0].length) {  
    rotate(player.matrix, -dir);  
    player.pos.x = pos;  
    return;  
   }  
  }  
 }  
 let dropCounter = 0;  
 let dropInterval = 1000;  
 let lastTime = 0;  
 function update(time = 0) {  
  const deltaTime = time - lastTime;  
  dropCounter += deltaTime;  
  if (dropCounter > dropInterval) {  
   playerDrop();  
  }  
  lastTime = time;  
  draw();  
  requestAnimationFrame(update);  
 }  
 function updateScore() {  
  document.getElementById("score").innerText = "Score: " + player.score;  
 }  
 document.addEventListener("keydown", (event) => {  
  if (event.keyCode === 37) {  
   playerMove(-1);  
  } else if (event.keyCode === 39) {  
   playerMove(1);  
  } else if (event.keyCode === 40) {  
   playerDrop();  
  } else if (event.keyCode === 81) {  
   playerRotate(-1);  
  } else if (event.keyCode === 87) {  
   playerRotate(1);  
  }  
 });  
 const colors = [  
  null,  
  "#FF0D72",  
  "#0DC2FF",  
  "#0DFF72",  
  "#F538FF",  
  // "#FF8E0D",  
  // "#FFE138",  
  // "#3877FF",  
 ];  
 const arena = createMatrix(8, 10);  
 const player = {  
  pos: { x: 0, y: 0 },  
  matrix: null,  
  score: 0,  
 };  
 playerReset();  
 updateScore();  
 update();  