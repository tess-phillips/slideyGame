// import {   globalDrag.colourBeingDragged,
//     globalDrag.colourBeingReplacd,
//     globalDrag.squareIdBeingDragged,
//     globalDrag.squareIdBeingReplaced,
//     globalDrag.classBeingReplaced,
//     globalDrag.classBeingDragged,
//     globalDrag.LoR } from "./variables.js"

export function validMoves(globalDrag, global){
    var leftMove = 0; var rightMove = 0;
    var validMoves = [];
    globalDrag.LoR = null;
    if ((global.squares[globalDrag.squareIdBeingDragged].className == 2 && global.squares[globalDrag.squareIdBeingDragged-1].className == 2)||
        (global.squares[globalDrag.squareIdBeingDragged].className == 3 && global.squares[globalDrag.squareIdBeingDragged-1].className == 3&& global.squares[globalDrag.squareIdBeingDragged-2].className == 3)||
        (global.squares[globalDrag.squareIdBeingDragged].className == 4 && global.squares[globalDrag.squareIdBeingDragged-1].className == 4&& global.squares[globalDrag.squareIdBeingDragged-2].className == 4&& global.squares[globalDrag.squareIdBeingDragged-3].className == 4)){
        globalDrag.LoR ="rightOfBlock";
    } else  if ((global.squares[globalDrag.squareIdBeingDragged].className == 2 && global.squares[globalDrag.squareIdBeingDragged+1].className == 2)||
    (global.squares[globalDrag.squareIdBeingDragged].className == 3 && global.squares[globalDrag.squareIdBeingDragged+1].className == 3&& global.squares[globalDrag.squareIdBeingDragged+2].className == 3)||
    (global.squares[globalDrag.squareIdBeingDragged].className == 4 && global.squares[globalDrag.squareIdBeingDragged+1].className == 4&& global.squares[globalDrag.squareIdBeingDragged+2].className == 4&& global.squares[globalDrag.squareIdBeingDragged+3].className == 4)){
        globalDrag.LoR="leftOfBlock";
    }
    var dir = globalDrag.squareIdBeingReplaced-globalDrag.squareIdBeingDragged;
    if (globalDrag.LoR==null){
        for (let i=1;i<global.width;i++){
            if (global.squares[globalDrag.squareIdBeingDragged-i].className==0 && Math.floor((globalDrag.squareIdBeingDragged-i)/8) == Math.floor((globalDrag.squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                leftMove +=1;
                validMoves.push(globalDrag.squareIdBeingDragged-leftMove);
            }
            else {i=8}
        }
        for (let j=1;j<global.width;j++){
            if (global.squares[globalDrag.squareIdBeingDragged+j].className==0 && Math.floor((globalDrag.squareIdBeingDragged+j)/8) == Math.floor((globalDrag.squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                rightMove +=1;
                validMoves.push(globalDrag.squareIdBeingDragged+rightMove);
            }
            else {j=8}
        }
    }
    else if (globalDrag.LoR == "leftOfBlock"){
        for (let i=1;i<global.width;i++){
            if (global.squares[globalDrag.squareIdBeingDragged-i].className==0 && Math.floor((globalDrag.squareIdBeingDragged-i)/8) == Math.floor((globalDrag.squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                leftMove +=1;
                validMoves.push(globalDrag.squareIdBeingDragged-leftMove);
            }
            else {i=8}
        }
        for (let j=globalDrag.classBeingDragged;j<global.width;j++){
            if (global.squares[globalDrag.squareIdBeingDragged+j].className==0 && Math.floor((globalDrag.squareIdBeingDragged+j)/8) == Math.floor((globalDrag.squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                rightMove +=1;
                validMoves.push(globalDrag.squareIdBeingDragged+rightMove+(globalDrag.classBeingDragged-1));
            }
            else {j=8}
        }
        if (rightMove>0)
        {validMoves.push(globalDrag.squareIdBeingDragged+globalDrag.classBeingDragged-1)}
    }
    else if (globalDrag.LoR == "rightOfBlock"){
        for (let i=globalDrag.classBeingDragged;i<global.width;i++){
            if (global.squares[globalDrag.squareIdBeingDragged-i].className==0 && Math.floor((globalDrag.squareIdBeingDragged-i)/8) == Math.floor((globalDrag.squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                leftMove +=1;
                validMoves.push(globalDrag.squareIdBeingDragged-leftMove-(globalDrag.classBeingDragged-1));
            }
            else {i=8}
        }
        for (let j=1;j<global.width;j++){
            if (global.squares[globalDrag.squareIdBeingDragged+j].className==0 && Math.floor((globalDrag.squareIdBeingDragged+j)/8) == Math.floor((globalDrag.squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                rightMove +=1;
                validMoves.push(globalDrag.squareIdBeingDragged+rightMove);
            }
            else {j=8}
        }
        if (leftMove>0)
        {validMoves.push(globalDrag.squareIdBeingDragged-globalDrag.classBeingDragged+1)}
    }
    var bigList = [validMoves,globalDrag.LoR,dir]
    return bigList
}