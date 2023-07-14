import { generateRowNotFull } from "./generateRowNotFull.js";

export function createBoard(global){//to add a fill down and delete
    document.getElementById("score").innerHTML = global.score;
        const grid = document.querySelector('.grid');
    var index1 = 0;
    var counter =0;    
    for (let i=0;i<global.height;i++){
        if (i<7){
            var rowColouring = [0,0,0,0,0,0,0,0]
        }
        else if (i==9){
            var rowColouring = generateRowNotFull()
            index1 = 1;
        }
        else {
            var rowColouring = generateRowNotFull()

        }
        for (let j=0;j<global.width;j++){
            const square = document.createElement("div");
            var squareColourIndex = rowColouring[j]
            square.setAttribute("id",counter)
            counter +=1
            square.style.backgroundColor = global.colours[squareColourIndex][index1];
            square.className = squareColourIndex;
            if (global.colours[squareColourIndex][index1] !=='grey' && index1==0){
                square.setAttribute("draggable",true)
            }
            else{
                square.setAttribute("draggable",false)
            }
            grid.appendChild(square)
            global.squares.push(square)
        }
    }
}