export function moveDone(){
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