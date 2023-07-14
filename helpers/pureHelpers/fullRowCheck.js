export function fullRowCheck(global){ //arena[y][x]
    //checks the arena for any full rows to be deleted
    for (let y=0; y< global.height; y++) {
        var rowCount =0;
        for (let x=0; x< global.width; x++){
            if (global.squares[(y*8)+x].className !== '0'){
                rowCount +=1;
            }
        }
        if (rowCount == global.width){
            return y
        }
    }
    return "notFull"
}