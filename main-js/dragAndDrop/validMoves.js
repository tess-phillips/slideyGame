import {   colourBeingDragged,
    colourBeingReplaced,
    squareIdBeingDragged,
    squareIdBeingReplaced,
    classBeingReplaced,
    classBeingDragged,
    LoR } from "variables.js"

export function validMoves(){
    var leftMove = 0; var rightMove = 0;
    var validMoves = [];
    LoR = null;
    if ((global.squares[squareIdBeingDragged].className == 2 && global.squares[squareIdBeingDragged-1].className == 2)||
        (global.squares[squareIdBeingDragged].className == 3 && global.squares[squareIdBeingDragged-1].className == 3&& global.squares[squareIdBeingDragged-2].className == 3)||
        (global.squares[squareIdBeingDragged].className == 4 && global.squares[squareIdBeingDragged-1].className == 4&& global.squares[squareIdBeingDragged-2].className == 4&& global.squares[squareIdBeingDragged-3].className == 4)){
        LoR ="rightOfBlock";
    } else  if ((global.squares[squareIdBeingDragged].className == 2 && global.squares[squareIdBeingDragged+1].className == 2)||
    (global.squares[squareIdBeingDragged].className == 3 && global.squares[squareIdBeingDragged+1].className == 3&& global.squares[squareIdBeingDragged+2].className == 3)||
    (global.squares[squareIdBeingDragged].className == 4 && global.squares[squareIdBeingDragged+1].className == 4&& global.squares[squareIdBeingDragged+2].className == 4&& global.squares[squareIdBeingDragged+3].className == 4)){
        LoR="leftOfBlock";
    }
    var dir = squareIdBeingReplaced-squareIdBeingDragged;
    if (LoR==null){
        for (let i=1;i<global.width;i++){
            if (global.squares[squareIdBeingDragged-i].className==0 && Math.floor((squareIdBeingDragged-i)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                leftMove +=1;
                validMoves.push(squareIdBeingDragged-leftMove);
            }
            else {i=8}
        }
        for (let j=1;j<global.width;j++){
            if (global.squares[squareIdBeingDragged+j].className==0 && Math.floor((squareIdBeingDragged+j)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                rightMove +=1;
                validMoves.push(squareIdBeingDragged+rightMove);
            }
            else {j=8}
        }
    }
    else if (LoR == "leftOfBlock"){
        for (let i=1;i<global.width;i++){
            if (global.squares[squareIdBeingDragged-i].className==0 && Math.floor((squareIdBeingDragged-i)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                leftMove +=1;
                validMoves.push(squareIdBeingDragged-leftMove);
            }
            else {i=8}
        }
        for (let j=classBeingDragged;j<global.width;j++){
            if (global.squares[squareIdBeingDragged+j].className==0 && Math.floor((squareIdBeingDragged+j)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                rightMove +=1;
                validMoves.push(squareIdBeingDragged+rightMove+(classBeingDragged-1));
            }
            else {j=8}
        }
        if (rightMove>0)
        {validMoves.push(squareIdBeingDragged+classBeingDragged-1)}
    }
    else if (LoR == "rightOfBlock"){
        for (let i=classBeingDragged;i<global.width;i++){
            if (global.squares[squareIdBeingDragged-i].className==0 && Math.floor((squareIdBeingDragged-i)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                leftMove +=1;
                validMoves.push(squareIdBeingDragged-leftMove-(classBeingDragged-1));
            }
            else {i=8}
        }
        for (let j=1;j<global.width;j++){
            if (global.squares[squareIdBeingDragged+j].className==0 && Math.floor((squareIdBeingDragged+j)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                rightMove +=1;
                validMoves.push(squareIdBeingDragged+rightMove);
            }
            else {j=8}
        }
        if (leftMove>0)
        {validMoves.push(squareIdBeingDragged-classBeingDragged+1)}
    }
    var bigList = [validMoves,LoR,dir]
    return bigList
}