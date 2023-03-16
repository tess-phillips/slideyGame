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


function generateRow(){ //can make this shorter with || 
    //can add the "non-empty clause to this function so all new rows not full" 
    // i.e  if (i>7 && fullRowCheck(row)=="notFull") {return row;} else {return }
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

function generateRowNotFull(){
    var notFull = false;
    var zeroCount = 0;
    var row = generateRow();
    while (notFull==false){
    for (let i=0; i<7;i++){
        if (row[i]==0){
        zeroCount += 1;}
    }
    if (zeroCount == 8 || zeroCount == 0){
        row = generateRow()}
    else {notFull == true;
        return row}
    }
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
            //return y
            colouring(arena)
            return y
        }
    }
    colouring(arena)
    return "notFull"
}

function deleteRow(arena, fullRow){
    console.log(arena)
    arena[fullRow]=[0,0,0,0,0,0,0,0];
    for (let i=fullRow;i>0;i--){
        arena[i]=arena[i-1];
        arena[i-1]=[0,0,0,0,0,0,0,0];
    }
    // arena[10]=generateRow();
    console.log("row deleted")
    return arena
}

function fillDown(arena){
    // var fullRow= fullRowCheck(arena);
    // if (fullRow !== "notFull"){
    //     alert("something not right")
    // }
    var doneSomething = false;//may need to go through and delete if don't end up using it
    for (let y=0; y< 9; y++) {
        for (let x=0; x< 8; x++){ 
            if (arena[y][x] ==1 && arena[y+1][x]==0){
                arena[y+1][x]=arena[y][x];
                arena[y][x]=0;
                doneSomething =true;
             }
            if (arena[y][x] ==2 && arena[y][x+1]==2 && arena[y+1][x]==0&& arena[y+1][x+1]==0){
                arena[y+1][x]=arena[y][x];
                arena[y+1][x+1]=arena[y][x]
                arena[y][x]=0;
                arena[y][x+1]=0;
                x+=1;
                doneSomething =true;
            }
            if (arena[y][x] ==3 && arena[y][x+1]==3 && arena[y][x+2]==3 && arena[y+1][x]==0&& arena[y+1][x+1]==0&& arena[y+1][x+2]==0){
                arena[y+1][x]=arena[y][x];
                arena[y+1][x+1]=arena[y][x];
                arena[y+1][x+2]=arena[y][x];
                arena[y][x]=0;
                arena[y][x+1]=0;
                arena[y][x+2]=0;
                x+=2;
                doneSomething =true;
            }
            if (arena[y][x] ==4 && arena[y][x+1]==4 && arena[y][x+2]==4 && arena[y][x+3]==4 && arena[y+1][x]==0&& arena[y+1][x+1]==0&& arena[y+1][x+2]==0&& arena[y+1][x+3]==0){
                arena[y+1][x]=arena[y][x];
                arena[y+1][x+1]=arena[y][x];
                arena[y+1][x+2]=arena[y][x];
                arena[y+1][x+3]=arena[y][x];
                arena[y][x]=0;
                arena[y][x+1]=0;
                arena[y][x+2]=0;
                arena[y][x+3]=0;
                x+=3;
                doneSomething =true;
            }
            }
    }
    // setTimeout(() => {
    //     colouring(arena)
    //     var a="blah",b="blah";
    //     setTimeout(() => {
    //         if (doneSomething ==true){
    //             [a,b]=fullRowCheckAndDelete(arena)
    //             arena = a;
    //         } 
    //     }, 1000);
    // }, 1000);

    if (doneSomething==true){console.log("filled down")}
    return arena
}   

function colouring(arena){
    arena.forEach((row, y) => {  
    row.forEach((value, x) => {  
        if (value !== 0 && y !== 10) {  
        context.fillStyle = colours[value][0];  
        context.fillRect(x, y, 1, 1);  }
      else if (value !== 0 && y == 10) {
        context.fillStyle = "#A9a9a9";  
        context.fillRect(x, y, 1, 1);
    }
    else{ context.fillStyle = "#202028";  
    context.fillRect(x, y, 1, 1);

    }
    });  
    });  
    return arena
}

function moveDone(arena){
    arena = fillDown(arena);
    var check = fullRowCheck(arena);
    while (check !=="notFull"){
        console.log(check,"not full check")
        arena = deleteRow(arena,check);
        arena = fillDown(arena);
        check = fullRowCheck(arena);
    }
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
    for (let a=8; a<11;a++){ //gives 3 non empty rows
        arena[a]=generateRowNotFull();}
    colouring(arena);
    moveDone(arena);
    colouring(arena);
}

const colours = [  
    null,  
    ["#FF0D72", "#ff5a9f"],
    ["#0DC2FF",  "#5ad5ff"],
    ["#0DFF72", "#5aff9f"], 
    // "#F538FF",  
    ["#FF8E0D",  "#ffb25a"]
    // "#FFE138",  
    // "#3877FF",  
   ];  

start()



//  const player = {  
//   pos: { x: 0, y: 0 },  
//   matrix: null,  
//   score: 0,  
//  };  
//  playerReset();  
//  updateScore();  
//  update();  