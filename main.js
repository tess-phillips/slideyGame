import { colouring } from "./helpers/pureHelpers/colouring.js";
import { moveDone } from "./main-js/moveDone.js";
import { createBoard } from "./main-js/createBoard.js";
import { dragStart } from "./main-js/dragAndDrop/dragStart.js";
import { dragOver } from "./main-js/dragAndDrop/dragOver.js";
import { dragEnter } from "./main-js/dragAndDrop/dragEnter.js";
import { dragLeave } from "./main-js/dragAndDrop/dragLeave.js";
import { dragEnd } from "./main-js/dragAndDrop/dragEnd.js";
import { dragDropp } from "./main-js/dragAndDrop/dragDropp.js";
import { validMoves } from "./main-js/dragAndDrop/validMoves.js";
// import { variables } from "./main-js/dragAndDrop/variables.js"


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
    
    global.squares.forEach(btn =>btn.addEventListener('dragstart',dragStart))
    global.squares.forEach(btn =>btn.addEventListener('dragend',dragEnd))
    global.squares.forEach(btn =>btn.addEventListener('dragover',dragOver))
    global.squares.forEach(btn =>btn.addEventListener('dragenter',dragEnter))
    global.squares.forEach(btn =>btn.addEventListener('dragleave',dragLeave))
    global.squares.forEach(btn =>btn.addEventListener('drop',dragDropp))
    
    })
    