import { colouring } from "./helpers/pureHelpers/colouring.js";
import { moveDone } from "./main-js/moveDone.js";
import { createBoard } from "./main-js/createBoard.js";
import { dragStart } from "./main-js/dragAndDrop/dragStart.js";
import { dragOver } from "./main-js/dragAndDrop/dragOver.js";
import { dragEnter } from "./main-js/dragAndDrop/dragEnter.js";
import { dragLeave } from "./main-js/dragAndDrop/dragLeave.js";
import { dragEnd } from "./main-js/dragAndDrop/dragEnd.js";
import { dragDropp } from "./main-js/dragAndDrop/dragDropp.js";

document.addEventListener('DOMContentLoaded',()=>{

    const resetButton = document.getElementById("reset");
    const modal = document.getElementById("myModal");
    const instructionsButton = document.getElementById("instructions");
    const span = document.getElementsByClassName("close")[0];
    const span2 = document.getElementsByClassName("close2")[0];

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
    const globalDrag = {
        colourBeingDragged: undefined,
        colourBeingReplacd: undefined,
        squareIdBeingDragged: undefined,
        squareIdBeingReplaced: undefined,
        classBeingReplaced: undefined,
        classBeingDragged: undefined,
        LoR: undefined,
    }

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
    
    global.squares.forEach(btn => btn.addEventListener('dragstart', (event) => {
        dragStart(globalDrag, event.target);
      }));
    global.squares.forEach(btn =>btn.addEventListener('drop', (event) => {
        dragDropp(globalDrag, event.target);
    }));
    global.squares.forEach(btn => btn.addEventListener('dragend', () => {
        dragEnd(globalDrag, global);
    }));
    global.squares.forEach(btn =>btn.addEventListener('dragover',dragOver))
    global.squares.forEach(btn =>btn.addEventListener('dragenter',dragEnter))
    global.squares.forEach(btn =>btn.addEventListener('dragleave',dragLeave))


    // Touch event listeners
    global.squares.forEach(btn => btn.addEventListener('touchstart', (event) => {
        // console.log("start",globalDrag,event.target)
        event.preventDefault(); // Prevent default touch behavior
        dragStart(globalDrag, event.target);
    }));
    global.squares.forEach(btn => btn.addEventListener('touchend', () => {
        // console.log("end",globalDrag)
        dragEnd(globalDrag, global);
    }));
    global.squares.forEach(btn => btn.addEventListener('touchend', (event) => {
        // console.log("drop",globalDrag,event.target);
        event.preventDefault(); // Prevent default touch behavior
        dragDropp(globalDrag, event.target);
    }));
    global.squares.forEach(btn => btn.addEventListener('touchmove', touchMove));
  
    function touchMove(event) {
        event.preventDefault();
      }
})
    