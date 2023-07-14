import {   colourBeingDragged,
    colourBeingReplaced,
    squareIdBeingDragged,
    squareIdBeingReplaced,
    classBeingReplaced,
    classBeingDragged,
    LoR } from "./variables.js"
import { validMoves } from "./validMoves.js";
import { colouring } from "../../helpers/pureHelpers/colouring.js";
import { moveDone } from "../moveDone.js";

export function dragEnd(){
    var myList = validMoves()
    var validMove = myList[0];
    var LoRofBlock = myList[1];
    var direction = myList[2];
    if (LoRofBlock==null){ 
        if (validMove.includes(squareIdBeingReplaced)){ 
            for (let k=0; k<classBeingDragged;k++){
                global.squares[squareIdBeingReplaced+k].className = classBeingDragged
                global.squares[squareIdBeingDragged+k].className = classBeingReplaced
            }
            colouring(global)
            moveDone(global)
        }
    } 
    else if(direction<0 && LoRofBlock =="leftOfBlock"){
        if (validMove.includes(squareIdBeingReplaced)){ 
            for (let k=0; k<classBeingDragged;k++){
                global.squares[squareIdBeingReplaced+k].className = classBeingDragged
                global.squares[squareIdBeingDragged+k].className = classBeingReplaced
            }
            colouring(global)
            moveDone(global)
        }
    }
    else if(direction>0 && LoRofBlock =="leftOfBlock"){
        if (validMove.includes(squareIdBeingReplaced)){ 
            for (let k=0; k<classBeingDragged;k++){
                global.squares[squareIdBeingDragged+k].className =0;
                global.squares[squareIdBeingReplaced+k].className = classBeingDragged
            }
            global.squares[squareIdBeingReplaced].className = classBeingDragged
            colouring(global)
            moveDone(global)
        }
    } 
    else if(direction>0 && LoRofBlock=="rightOfBlock"){
        if (validMove.includes(squareIdBeingReplaced)){ 
            for (let k=0; k<classBeingDragged;k++){
                global.squares[squareIdBeingDragged-k].className =0;
                global.squares[squareIdBeingReplaced-k].className = classBeingDragged
            }
            colouring(global)
            moveDone(global)
        }
    }
    else if(direction<0 && LoRofBlock=="rightOfBlock"){
        if (validMove.includes(squareIdBeingReplaced)){ 
            for (let k=0; k<classBeingDragged;k++){
                global.squares[squareIdBeingDragged-k].className =0;
                global.squares[squareIdBeingReplaced-k].className = classBeingDragged
            }
            global.squares[squareIdBeingReplaced].className = classBeingDragged
            colouring(global)
            moveDone(global)
        }
    }
}
