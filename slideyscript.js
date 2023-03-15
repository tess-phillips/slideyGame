"use strict";  // used to enable strict mode in JavaScript. This mode helps developers write more secure and optimized code.
 const canvas = document.getElementById("slidey");  
 const context = canvas.getContext("2d");  
 context.scale(20, 20);


 
// function createMatrix(w, h) { //  is a function that creates a matrix (a two-dimensional array) with width w and height h, initialized to all 0s.
//     var matrix = [];  
//     while (h--) {  
//      matrix.push(new Array(w).fill(0));  
//     }  
//     // console.log(matrix)
//     return matrix;
// }


function generateRow(){
    var i=0;
    var row = [];
    var randomNum= Math.floor(Math.random()*5);
    while (i<5){
        randomNum = Math.floor(Math.random()*5);
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
    if (i>7) {return row;}
}


function fullRowCheck(arena){ //arena[y][x]
    //checks the arena for any full rows to be deleted
    for (let y=0; y< 11; y++) {
        var rowCount =0;
        for (let x=0; x< 8; x++){
            if (arena[y][x]!== 0){
                rowCount +=1;
            }
        }
        if (rowCount ==8){
            return y
        }

    }
    return "notFull"
}

function deleteRow(arena, fullRow){
    //given there is a full row somewhere in the arena, delete it
    while (fullRow>0) {
        arena[fullRow]=arena[fullRow-1];
        fullRow -=1;
    }
    arena[0]=[0,0,0,0,0,0,0,0];
}

function fillDown(arena){
    var fullRow= fullRowCheck(arena);
    if (fullRow !== "notFull"){
        alert("something not right")
    }
    // row 10 is bottom so can't fall
    // row 11 bottom of user interface so can't fall
    // can row 9 fall into 10? 
        // either empty (move to higher row)
        // can't fall into (move to higher row)
        // 9 can fall into 10
            // fall 9 into 10
            // check 10 to see if delete
                //if delete bring everything above down
            //does 8 move because of this? if so
}   

function start(){
    var arena = [[0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]]
    for (let a=8; a<11;a++){
        arena[a]=generateRow();
        var fullRow= fullRowCheck(arena);
        while (fullRow !== "notFull"){
            arena[a]=generateRow();
            fullRow = fullRowCheck(arena);
        }
    }
    console.log(arena)
}

start()

//  const player = {  
//   pos: { x: 0, y: 0 },  
//   matrix: null,  
//   score: 0,  
//  };  
//  playerReset();  
//  updateScore();  
//  update();  