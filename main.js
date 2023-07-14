import { colouring } from "./helpers/pureHelpers/colouring.js";
import { moveDone } from "./main-js/moveDone.js";
import { createBoard } from "./main-js/createBoard.js";


document.addEventListener('DOMContentLoaded',()=>{
    const global = {
        height: 10,
        width:8,
        squares: [],
        colours: [  
            ['grey','grey'] ,
            ["#FF0D72", "#D3D3D3"],
            ["#0DC2FF",  "#D3D3D3"],
            ["#0DFF72", "#D3D3D3"], 
            ["#FF8E0D",  "#D3D3D3"]
           ],
        score:0
    }

    const resetButton = document.getElementById("reset");
    const modal = document.getElementById("myModal");
    const instructionsButton = document.getElementById("instructions");
    const span = document.getElementsByClassName("close")[0];
    const span2 = document.getElementsByClassName("close2")[0];


    resetButton.addEventListener("click", () => {
        location.reload();
    });
    
    instructionsButton.addEventListener("click", () => {
        modal.style.display = "block";
    });
    
    span.addEventListener("click", () => {
        modal.style.display = "none";
    });

    span2.addEventListener("click", () => {
    location.reload();
    }); 
    
    createBoard(global)
    moveDone(global)
    
    let colourBeingDragged 
    let colourBeingReplaced
    let squareIdBeingDragged
    let squareIdBeingReplaced
    let classBeingReplaced
    let classBeingDragged
    let LoR
    
    function dragStart(){
        colourBeingDragged = this.style.backgroundColor
        classBeingDragged = parseInt(this.className)
        squareIdBeingDragged = parseInt(this.id)
    }

    function dragOver(e){
        e.preventDefault()
    }
    function dragEnter(e){
        e.preventDefault()
    }
    function dragLeave(){    
    }

    function validMoves(){
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
    
    function dragEnd(){
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

    function dragDropp(){
        classBeingReplaced = parseInt(this.className)
        colourBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
    }
    
    global.squares.forEach(btn =>btn.addEventListener('dragstart',dragStart))
    global.squares.forEach(btn =>btn.addEventListener('dragend',dragEnd))
    global.squares.forEach(btn =>btn.addEventListener('dragover',dragOver))
    global.squares.forEach(btn =>btn.addEventListener('dragenter',dragEnter))
    global.squares.forEach(btn =>btn.addEventListener('dragleave',dragLeave))
    global.squares.forEach(btn =>btn.addEventListener('drop',dragDropp))
    
    })
    