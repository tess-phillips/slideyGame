import { generateRowNotFull } from "./generateRowNotFull.js";
import { colouring } from "./pureHelpers/colouring.js";

export function allUp(global){
    var rowColouring = generateRowNotFull()
    const modal2 = document.getElementById("myModal2");
    for (let i = 0; i<global.width*global.height; i++){
        if (i<72){
            global.squares[i].className= global.squares[i+8].className
        }
        else {
            global.squares[i].className = rowColouring[i-72]
        }
        for (let j = 0; j<global.width; j++){ //game over
            if (global.squares[i].className != 0 && i<8){
                modal2.style.display = "block";
                document.getElementById("scorefinal").innerHTML = global.score;
                break
            }
        }
    colouring(global)
    }
}  