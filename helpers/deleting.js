import { fullRowCheck } from "./pureHelpers/fullRowCheck.js";
import { delay } from "./pureHelpers/delay.js";
import { deleteRow } from "./deleteRow.js";
import { fillDown } from "./fillDown.js";

export async function deleting(global,delay_length){
    var check = fullRowCheck(global);
    while (check !== "notFull") {
        await delay(delay_length); // Delay before turning full row grey
        for (let x=0; x<global.width; x++){
            global.squares[(check*8)+x].style.backgroundColor = "grey"
        }
        await delay(delay_length); // Delay before executing the deleteRow function
        deleteRow(global, check);
    
        await delay(delay_length); // Delay before filling down after deleting a row
        fillDown(global);
    
        check = fullRowCheck(global);
    }
}