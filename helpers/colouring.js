export function colouring(global){
    for (let i=0;i<global.width*global.height;i++){
        if (i<72){
            global.squares[i].style.backgroundColor=global.colours[global.squares[i].className][0]
            if (global.colours[global.squares[i].className][0]=="grey"){
                global.squares[i].setAttribute("draggable",false)
            } else {global.squares[i].setAttribute("draggable",true)}
    } else {
        global.squares[i].style.backgroundColor=global.colours[global.squares[i].className][1]
        global.squares[i].setAttribute("draggable",false)
    }

    }
}