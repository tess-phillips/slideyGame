import { generateRow } from "./pureHelpers/generateRow.js";

export function generateRowNotFull(){
    var notFull = false;
    var zeroCount = 0;
    var row = generateRow();
    while (notFull==false){
    for (let i=0; i<7;i++){
        if (row[i]==0){
        zeroCount += 1;}
    }
    if (zeroCount == 8 || zeroCount == 0){
        row = generateRow()}
    else {
        notFull = true;
        return row}
    }
}   