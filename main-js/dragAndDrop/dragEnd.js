// import {   globalDrag.colourBeingDragged,
//     globalDrag.colourBeingReplacd,
//     globalDrag.squareIdBeingDragged,
//     globalDrag.squareIdBeingReplaced,
//     globalDrag.classBeingReplaced,
//     globalDrag.classBeingDragged,
//     globalDrag.LoR } from "./variables.js"
import { validMoves } from "./validMoves.js";
import { colouring } from "../../helpers/pureHelpers/colouring.js";
import { moveDone } from "../moveDone.js";

export function dragEnd(globalDrag,global){
    console.log("end")
    var myList = validMoves(globalDrag,global)
    var validMove = myList[0];
    var LoRofBlock = myList[1];
    var direction = myList[2];
    if (LoRofBlock==null){ 
        if (validMove.includes(globalDrag.squareIdBeingReplaced)){ 
            for (let k=0; k<globalDrag.classBeingDragged;k++){
                global.squares[globalDrag.squareIdBeingReplaced+k].className = globalDrag.classBeingDragged
                global.squares[globalDrag.squareIdBeingDragged+k].className = globalDrag.classBeingReplaced
            }
            colouring(global)
            moveDone(global)
        }
    } 
    else if(direction<0 && LoRofBlock =="leftOfBlock"){
        if (validMove.includes(globalDrag.squareIdBeingReplaced)){ 
            for (let k=0; k<globalDrag.classBeingDragged;k++){
                global.squares[globalDrag.squareIdBeingReplaced+k].className = globalDrag.classBeingDragged
                global.squares[globalDrag.squareIdBeingDragged+k].className = globalDrag.classBeingReplaced
            }
            colouring(global)
            moveDone(global)
        }
    }
    else if(direction>0 && LoRofBlock =="leftOfBlock"){
        if (validMove.includes(globalDrag.squareIdBeingReplaced)){ 
            for (let k=0; k<globalDrag.classBeingDragged;k++){
                global.squares[globalDrag.squareIdBeingDragged+k].className =0;
                global.squares[globalDrag.squareIdBeingReplaced+k].className = globalDrag.classBeingDragged
            }
            global.squares[globalDrag.squareIdBeingReplaced].className = globalDrag.classBeingDragged
            colouring(global)
            moveDone(global)
        }
    } 
    else if(direction>0 && LoRofBlock=="rightOfBlock"){
        if (validMove.includes(globalDrag.squareIdBeingReplaced)){ 
            for (let k=0; k<globalDrag.classBeingDragged;k++){
                global.squares[globalDrag.squareIdBeingDragged-k].className =0;
                global.squares[globalDrag.squareIdBeingReplaced-k].className = globalDrag.classBeingDragged
            }
            colouring(global)
            moveDone(global)
        }
    }
    else if(direction<0 && LoRofBlock=="rightOfBlock"){
        if (validMove.includes(globalDrag.squareIdBeingReplaced)){ 
            for (let k=0; k<globalDrag.classBeingDragged;k++){
                global.squares[globalDrag.squareIdBeingDragged-k].className =0;
                global.squares[globalDrag.squareIdBeingReplaced-k].className = globalDrag.classBeingDragged
            }
            global.squares[globalDrag.squareIdBeingReplaced].className = globalDrag.classBeingDragged
            colouring(global)
            moveDone(global)
        }
    }
}
