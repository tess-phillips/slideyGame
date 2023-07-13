import { colouring } from "./colouring.js";

export function fillDown(global){
    var doneSomething = false;
    for (let i=0;i<(global.height*global.width)-(global.width*2)+1;i++){

        if (global.squares[i].className==1&& global.squares[i+8].className==0){
            global.squares[i+8].className=1;
            global.squares[i].className=0;
                doneSomething = true;
                colouring(global)
            }
        
        else if (global.squares[i].className==2 && global.squares[i+1].className==2){
            if (global.squares[i+8].className!=0 || global.squares[i+9].className!=0){
                i+=1
            }
            else if (global.squares[i+8].className==0 && global.squares[i+9].className==0){
                global.squares[i+8].className=2
                global.squares[i+9].className=2
                global.squares[i].className=0
                global.squares[i+1].className=0
                doneSomething = true;
                colouring(global)
            }
        }

        else if (global.squares[i].className==3 && global.squares[i+1].className==3&& global.squares[i+2].className==3){
            if (global.squares[i+8].className!=0 || global.squares[i+9].className!=0 || global.squares[i+10].className!=0){
                i+=2
            }
            else if (global.squares[i+8].className==0 && global.squares[i+9].className==0 && global.squares[i+10].className==0){
                global.squares[i+8].className=3
                global.squares[i+9].className=3
                global.squares[i+10].className=3
                global.squares[i].className=0
                global.squares[i+1].className=0
                global.squares[i+2].className=0
                doneSomething = true;
                colouring(global)

            }
        }

        else if (global.squares[i].className==4&& global.squares[i+1].className==4&& global.squares[i+2].className==4&& global.squares[i+3].className==4){
            if (global.squares[i+8].className!=0 || global.squares[i+9].className!=0 || global.squares[i+10].className!=0|| global.squares[i+11].className!=0){
                i+=3
            }
            else if (global.squares[i+8].className==0 && global.squares[i+9].className==0 && global.squares[i+10].className==0 && global.squares[i+11].className==0){
                global.squares[i+8].className=4
                global.squares[i+9].className=4
                global.squares[i+10].className=4
                global.squares[i+11].className=4
                global.squares[i].className=0
                global.squares[i+1].className=0
                global.squares[i+2].className=0
                global.squares[i+3].className=0
                // i=0
                doneSomething = true;
                colouring(global)

            }
        }

    } 
    if (doneSomething==true){}
}