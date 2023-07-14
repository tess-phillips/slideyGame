import { fillDown } from "../helpers/fillDown.js";
import { allUp } from "../helpers/allUp.js";
import { fullRowCheck } from "../helpers/pureHelpers/fullRowCheck.js";
import { deleteRow } from "../helpers/deleteRow.js";

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