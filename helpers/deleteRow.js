import { colouring } from "./colouring.js";

export function deleteRow(global, fullRow){
    for (let x=0; x<global.width; x++){
        global.squares[(fullRow*8)+x].className=0
    }
    for (let i=fullRow;i>0;i--){
        for (let x=0; x<global.width; x++){
            global.squares[(i*8)+x].className= global.squares[(i*8)+x-8].className
            global.squares[(i*8)+x-8].className=0
        }
    colouring(global)
    } 
    global.score+=1;
    console.log("updated score")
    document.getElementById("score").innerHTML = global.score;
}
