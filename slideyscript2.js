document.addEventListener('DOMContentLoaded',()=>{
const grid = document.querySelector('.grid');
const width = 8;
const height = 10;
const squares = [];
const arena = [];
let score=0;

var colours = [  
    ['grey','grey'] ,
    ["#FF0D72", "#D3D3D3"],
    ["#0DC2FF",  "#D3D3D3"],
    ["#0DFF72", "#D3D3D3"], 
    // "#F538FF",  
    ["#FF8E0D",  "#D3D3D3"],
    // "#FFE138",  
    // "#3877FF",  
   ];  

  // (13, 194, 255)blue
   // (13, 255, 114) green
   // rgb(255, 13, 114) pink
   // rgb(255, 142, 13)
// function colour2number(colour){
//     console.log(colour)
//     if (colour == "grey") {return 0}
//     else if (colour = "rgb(255,13,114)"  )  {return 1}
//     else if (colour = "rgb(13, 194, 255)"  )  {return 2}
//     else if (colour = "rgb(13, 255, 114)"  )  {return 3}
//     else if (colour = "rgb(255, 142, 13)" )  {return 4}
//     else {return 5}
// }

   function generateRow(){ //can make this shorter with || 
    //can add the "non-empty clause to this function so all new rows not full" 
    // i.e  if (i>7 && fullRowCheck(row)=="notFull") {return row;} else {return }
    var i=0;
    var row = [];
    var randomNum= Math.floor(Math.random()*5);
    while (i<5){
        randomNum = Math.floor(Math.random()*5);
        if (randomNum==0){
            row[i]=randomNum;
            i +=1;
        }
        else{
            for (let j=0; j< randomNum; j++) {
                row[i]=randomNum;
                i+=1;
            }
        }
    }
    if (i==5){
        randomNum = Math.floor(Math.random()*4);
        if (randomNum==0){
            row[i]=randomNum;
            i +=1;
        }
        else{
            for (let j=0; j< randomNum; j++) {
                row[i]=randomNum;
                i+=1;
            }
        }
    }
    if (i==6){
        randomNum = Math.floor(Math.random()*3);
        if (randomNum==0){
            row[i]=randomNum;
            i +=1;
        }
        else{
            for (let j=0; j< randomNum; j++) {
                row[i]=randomNum;
                i+=1;
            }
        }
    }
    if (i==7){
        randomNum = Math.floor(Math.random()*2);
        if (randomNum==0){
            row[i]=randomNum;
            i +=1;
        }
        else{
            for (let j=0; j< randomNum; j++) {
                row[i]=randomNum;
                i+=1;
            }
        }
    }
    if (i>7) {return row;}
}

function generateRowNotFull(){
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

function squares2arena(){
    var row=[]; 
    console.log(arena)
    // console.log(arena,"before")
    let arenabefore = arena;
    var value=0;
    for (let counter=0; counter<height;counter++){
        for (let i = 0; i <width; i++){
            value=squares[(counter*8)+i].className;
            row.push(value)
        }
        arena[counter]=row;
        row=[];
    }

    if (arenabefore == arena){
        console.log("no change in arena")
    } else {console.log("change in arena")}
}

function arena2squares(){
    // console.log(arena,"arena2squares start")
    var squareColouring = arena.flat(Infinity) 
    for (let i=0;i<arena.length ;i++){
        // squares[i].setAttribute("id",i)
        squares[i].className = squareColouring[i];
        squares[i].style.backgroundColor = colours[squareColouring[i]][0]
        if (squareColouring[i] !==0 && i<72){
            squares[i].setAttribute("draggable",true)
        } else if (i>71){
        squares[i].style.backgroundColor = colours[squareColouring[i]][0]
        squares[i].setAttribute("draggable",false)
        } else {
            squares[i].setAttribute("draggable",false)
        }
    }
}

 function fullRowCheck(){ //arena[y][x]
    squares2arena();
    //checks the arena for any full rows to be deleted
    for (let y=0; y< height; y++) {
        var rowCount =0;
        for (let x=0; x< width; x++){
            if (arena[y][x]!== '0'){
                rowCount +=1;
            }
        }
        if (rowCount ==width){
            //return y
            // colouring(arena)
            console.log("fullRowCheck",y)
            return y
        }
    }
    // colouring(arena)
    console.log("fullRowCheck","notFull")
    return "notFull"
}

function deleteRow(fullRow){
    squares2arena();
    // console.log(arena)
    arena[fullRow]=[0,0,0,0,0,0,0,0];
    for (let i=fullRow;i>0;i--){
        arena[i]=arena[i-1];
        arena[i-1]=[0,0,0,0,0,0,0,0];
    }
    console.log("row deleted")
    arena2squares();
}

function fillDown(){
    // var fullRow= fullRowCheck(arena);
    // if (fullRow !== "notFull"){
    //     alert("something not right")
    // }
    squares2arena();
    var doneSomething = false;//may need to go through and delete if don't end up using it
    for (let y=0; y< height-2; y++) {
        for (let x=0; x< width; x++){ 
            if (arena[y][x] ==1 && arena[y+1][x]==0){
                arena[y+1][x]=arena[y][x];
                arena[y][x]=0;
                doneSomething =true;
             }
            if (arena[y][x] ==2 && arena[y][x+1]==2 && arena[y+1][x]==0&& arena[y+1][x+1]==0){
                arena[y+1][x]=arena[y][x];
                arena[y+1][x+1]=arena[y][x]
                arena[y][x]=0;
                arena[y][x+1]=0;
                x+=1;
                doneSomething =true;
            }
            if (arena[y][x] ==3 && arena[y][x+1]==3 && arena[y][x+2]==3 && arena[y+1][x]==0&& arena[y+1][x+1]==0&& arena[y+1][x+2]==0){
                arena[y+1][x]=arena[y][x];
                arena[y+1][x+1]=arena[y][x];
                arena[y+1][x+2]=arena[y][x];
                arena[y][x]=0;
                arena[y][x+1]=0;
                arena[y][x+2]=0;
                x+=2;
                doneSomething =true;
            }
            if (arena[y][x] ==4 && arena[y][x+1]==4 && arena[y][x+2]==4 && arena[y][x+3]==4 && arena[y+1][x]==0&& arena[y+1][x+1]==0&& arena[y+1][x+2]==0&& arena[y+1][x+3]==0){
                arena[y+1][x]=arena[y][x];
                arena[y+1][x+1]=arena[y][x];
                arena[y+1][x+2]=arena[y][x];
                arena[y+1][x+3]=arena[y][x];
                arena[y][x]=0;
                arena[y][x+1]=0;
                arena[y][x+2]=0;
                arena[y][x+3]=0;
                x+=3;
                doneSomething =true;
            }
            }
    }
    
    // setTimeout(() => {

    if (doneSomething==true){console.log("filled down")}
    arena2squares();
    // return arena
}   
function moveDone(){
    squares2arena();
    fillDown();
    var check = fullRowCheck();
    console.log(check, "check")
    while (check !=="notFull"){
        console.log(check,"not full check")
        deleteRow(check);
        fillDown();
        check = fullRowCheck();
    }
    arena2squares()
}

function createBoard(){//to add a fill down and delete
    var index1 = 0;
    var counter =0;
    // var arena = [[0, 0, 0, 0, 0, 0, 0, 0],
    //             [0, 0, 0, 0, 0, 0, 0, 0],
    //             [0, 0, 0, 0, 0, 0, 0, 0],
    //             [0, 0, 0, 0, 0, 0, 0, 0],
    //             [0, 0, 0, 0, 0, 0, 0, 0],
    //             [0, 0, 0, 0, 0, 0, 0, 0],
    //             [0, 0, 0, 0, 0, 0, 0, 0],
    //             [0, 0, 0, 0, 0, 0, 0, 0],
    //             [0, 0, 0, 0, 0, 0, 0, 0],
    //             [0, 0, 0, 0, 0, 0, 0, 0]]    
    for (let i=0;i<height;i++){
        if (i<7){
            var rowColouring = [0,0,0,0,0,0,0,0]
        }
        else if (i==9){
            var rowColouring = generateRowNotFull()
            index1 = 1;
        }
        else {
            var rowColouring = generateRowNotFull()
        }
        for (let j=0;j<width;j++){
            const square = document.createElement("div");
            var squareColourIndex = rowColouring[j]
            // var idjoin=[j,i];
            square.setAttribute("id",counter)
            counter +=1
            square.style.backgroundColor = colours[squareColourIndex][index1];
            square.className = squareColourIndex;
            // arena[i][j]=squareColourIndex;
            if (colours[squareColourIndex][index1] !=='grey' && index1==0){
                square.setAttribute("draggable",true)
            }
            else{
                square.setAttribute("draggable",false)
            }
            grid.appendChild(square)
            squares.push(square)
        }
    }
    // squares2arena()
    // console.log(arena)
    // return arena
}

createBoard()
moveDone()
// var x = squares2arena(squares)
// console.log(arena2squares(x))

let colourBeingDragged 
let colourBeingReplaced
let squareIdBeingDragged
let squareIdBeingReplaced
let classBeingReplaced
let classBeingDragged

function dragStart(){
    colourBeingDragged = this.style.backgroundColor
    squareIdBeingDragged = parseInt(this.id)
    console.log(colourBeingDragged)
    console.log(this.id,"dragstart")
}
function dragOver(e){
    e.preventDefault()
    console.log(this.id,"dragover")
    moveDone()
}
function dragEnter(e){
    e.preventDefault()
    console.log(this.id,"dragenter")
    moveDone()
}
function dragLeave(){
    console.log(this.id,"dragleave")
    moveDone()

}
function dragEnd(){
    console.log(this.id,"dragend")
    // var leftMove1 = squareIdBeingDragged - 10;

    //add an if (colour is what it is then) but for now just doing 1
    let validMoves = [
        squareIdBeingDragged-1, 
        squareIdBeingDragged +1]

    let validMove = validMoves.includes(squareIdBeingReplaced)
    if (squareIdBeingReplaced && validMove){
        squares[squareIdBeingReplaced].setAttribute("draggable",true)
        if (squares[squareIdBeingDragged].style.backgroundColor === 'grey'){
            squares[squareIdBeingDragged].setAttribute("draggable",false)
        } 
        squareIdBeingReplaced = null
    } else if (squareIdBeingReplaced && !validMove){
        squares[squareIdBeingReplaced].style.backgroundColor = colourBeingReplaced
        squares[squareIdBeingDragged].style.backgroundColor = colourBeingDragged
        squares[squareIdBeingReplaced].className = classBeingReplaced
        squares[squareIdBeingDragged].className = classBeingDragged
        squares[squareIdBeingReplaced].setAttribute("draggable",false)
    } else {
        squares[squareIdBeingDragged].style.backgroundColor = colourBeingDragged
        squares[squareIdBeingDragged].className = classBeingDragged
        squares[squareIdBeingReplaced].setAttribute("draggable",false)
    }
    moveDone()
    // console.log(arena[8][0],80,arena)
}
function dragDropp(){
    console.log(this.id,"dragdrop")
    colourBeingReplaced = this.style.backgroundColor
    squareIdBeingReplaced = parseInt(this.id)
    // var y1 = squareIdBeingDragged % 10;
    // var y2 = squareIdBeingReplaced % 10;
    // console.log(y1,y2)
    // if (y1==y2){
    this.style.backgroundColor = colourBeingDragged
    this.className = classBeingDragged
    squares[squareIdBeingDragged].style.backgroundColor = colourBeingReplaced// if this colour is grey make draggable false
    squares[squareIdBeingDragged].className = classBeingReplaced
    // moveDone()
    // console.log(arena[8][0])

}


squares.forEach(btn =>btn.addEventListener('dragstart',dragStart))
squares.forEach(btn =>btn.addEventListener('dragend',dragEnd))
squares.forEach(btn =>btn.addEventListener('dragover',dragOver))
squares.forEach(btn =>btn.addEventListener('dragenter',dragEnter))
squares.forEach(btn =>btn.addEventListener('dragleave',dragLeave))
squares.forEach(btn =>btn.addEventListener('drop',dragDropp))




























//end doc
})
