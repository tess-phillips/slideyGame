export function moveDone(){
    fillDown(global)
    allup()
    var check = fullRowCheck(global);
    while (check !=="notFull"){
        deleteRow(global, check);
        fillDown(global);
        check = fullRowCheck(global);
    }
    fillDown(global) 
    fillDown(global)
}