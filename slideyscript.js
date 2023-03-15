"use strict";  // used to enable strict mode in JavaScript. This mode helps developers write more secure and optimized code.
 const canvas = document.getElementById("slidey");  
 const context = canvas.getContext("2d");  
 context.scale(20, 20);


 
function createMatrix(w, h) { //  is a function that creates a matrix (a two-dimensional array) with width w and height h, initialized to all 0s.
    var matrix = [];  
    while (h--) {  
     matrix.push(new Array(w).fill(0));  
    }  
    // console.log(matrix)
    return matrix;
}

let arena = createMatrix(8, 10);  

function generateRow(){
    var i=0;
    var row = [];
    var randomNum= Math.floor(Math.random()*5);
    while (i<5){
        randomNum = Math.floor(Math.random()*5);
        console.log(i,randomNum)
        if (randomNum==0){
            row[i]=randomNum;
            i +=1;
        }
        else{
            for (let j=0; j< randomNum; j++) {
                row[i]=randomNum;
                i+=1;
            }
        }
    }
    if (i==5){
        randomNum = Math.floor(Math.random()*4);
        if (randomNum==0){
            row[i]=randomNum;
            i +=1;
        }
        else{
            for (let j=0; j< randomNum; j++) {
                row[i]=randomNum;
                i+=1;
            }
        }
    }
    if (i==6){
        randomNum = Math.floor(Math.random()*3);
        if (randomNum==0){
            row[i]=randomNum;
            i +=1;
        }
        else{
            for (let j=0; j< randomNum; j++) {
                row[i]=randomNum;
                i+=1;
            }
        }
    }
    if (i==7){
        randomNum = Math.floor(Math.random()*2);
        if (randomNum==0){
            row[i]=randomNum;
            i +=1;
        }
        else{
            for (let j=0; j< randomNum; j++) {
                row[i]=randomNum;
                i+=1;
            }
        }
    }
    console.log(i)
    return row;
}
var row = generateRow()
console.log(row)
//  const player = {  
//   pos: { x: 0, y: 0 },  
//   matrix: null,  
//   score: 0,  
//  };  
//  playerReset();  
//  updateScore();  
//  update();  