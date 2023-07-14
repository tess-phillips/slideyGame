import { fillDown } from "./fillDown.js";
import { allUp } from "./allUp.js";
import { fullRowCheck } from "./pureHelpers/fullRowCheck.js";
import { deleteRow } from "./deleteRow.js";

export function moveDone(global){
    fillDown(global)
    allUp(global)
    var check = fullRowCheck(global);
    while (check !=="notFull"){
        deleteRow(global, check);
        fillDown(global);
        check = fullRowCheck(global);
    }
    fillDown(global) 
    fillDown(global)
}