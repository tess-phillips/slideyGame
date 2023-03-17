document.addEventListener('DOMContentLoaded',()=>{
const grid = document.querySelector('.grid');
const width = 8;
const height = 10;
const squares = [];
let score=0;
// for (let i=0;i<height;i++){
//     const `squares-$height` = [];
// }
var colours = [  
    ['grey','grey'] ,
    ["#FF0D72", "#ff5a9f"],
    ["#0DC2FF",  "#5ad5ff"],
    ["#0DFF72", "#5aff9f"], 
    // "#F538FF",  
    ["#FF8E0D",  "#ffb25a"],
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
        notFull == true;
        return row}
    }
}   

function squares2arena(squares){
    var row=[];
    var arena=[];
    var counter=0;
    var x=0;
    while (counter<squares.length){
        for (let i = counter; i < counter+8; i++){
            x=squares[i].className;
            row.push(x)
        }
        arena.push(row);
        row=[];
        counter=counter+8;
    }
    return arena
}

function arena2squares(arena){
    var squares = arena.flat();
    return squares
}

//  function fullRowCheck(squares){ //arena[y][x]
//     var arena = squares2arena(squares);
//     //checks the arena for any full rows to be deleted
//     for (let y=0; y< 11; y++) {
//         var rowCount =0;
//         for (let x=0; x< 8; x++){
//             if (arena[y][x]!== 0){
//                 rowCount +=1;
//             }
//         }
//         if (rowCount ==8){
//             //return y
//             colouring(arena)
//             return y
//         }
//     }
//     // colouring(arena)
//     return "notFull"
// }

// function deleteRow(squares, fullRow){
//     var arena = squares2arena(squares);
//     // console.log(arena)
//     arena[fullRow]=[0,0,0,0,0,0,0,0];
//     for (let i=fullRow;i>0;i--){
//         arena[i]=arena[i-1];
//         arena[i-1]=[0,0,0,0,0,0,0,0];
//     }
//     console.log("row deleted")
//     squares = arena2squares(arena);
//     return squares
// }

// function fillDown(squares){
//     // var fullRow= fullRowCheck(arena);
//     // if (fullRow !== "notFull"){
//     //     alert("something not right")
//     // }
//     var arena = squares2arena(squares);
//     var doneSomething = false;//may need to go through and delete if don't end up using it
//     for (let y=0; y< 9; y++) {
//         for (let x=0; x< 8; x++){ 
//             if (arena[y][x] ==1 && arena[y+1][x]==0){
//                 arena[y+1][x]=arena[y][x];
//                 arena[y][x]=0;
//                 doneSomething =true;
//              }
//             if (arena[y][x] ==2 && arena[y][x+1]==2 && arena[y+1][x]==0&& arena[y+1][x+1]==0){
//                 arena[y+1][x]=arena[y][x];
//                 arena[y+1][x+1]=arena[y][x]
//                 arena[y][x]=0;
//                 arena[y][x+1]=0;
//                 x+=1;
//                 doneSomething =true;
//             }
//             if (arena[y][x] ==3 && arena[y][x+1]==3 && arena[y][x+2]==3 && arena[y+1][x]==0&& arena[y+1][x+1]==0&& arena[y+1][x+2]==0){
//                 arena[y+1][x]=arena[y][x];
//                 arena[y+1][x+1]=arena[y][x];
//                 arena[y+1][x+2]=arena[y][x];
//                 arena[y][x]=0;
//                 arena[y][x+1]=0;
//                 arena[y][x+2]=0;
//                 x+=2;
//                 doneSomething =true;
//             }
//             if (arena[y][x] ==4 && arena[y][x+1]==4 && arena[y][x+2]==4 && arena[y][x+3]==4 && arena[y+1][x]==0&& arena[y+1][x+1]==0&& arena[y+1][x+2]==0&& arena[y+1][x+3]==0){
//                 arena[y+1][x]=arena[y][x];
//                 arena[y+1][x+1]=arena[y][x];
//                 arena[y+1][x+2]=arena[y][x];
//                 arena[y+1][x+3]=arena[y][x];
//                 arena[y][x]=0;
//                 arena[y][x+1]=0;
//                 arena[y][x+2]=0;
//                 arena[y][x+3]=0;
//                 x+=3;
//                 doneSomething =true;
//             }
//             }
//     }
    
//     // setTimeout(() => {

//     if (doneSomething==true){console.log("filled down")}
//     squares = arena2squares(arena);
//     return squares
// }   

// function moveDone(squares){
//     var arena = squares2arena(squares);
//     arena = fillDown(arena);
//     var check = fullRowCheck(arena);
//     while (check !=="notFull"){
//         console.log(check,"not full check")
//         arena = deleteRow(arena,check);
//         arena = fillDown(arena);
//         check = fullRowCheck(arena);
//     }
// }

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
    // console.log(arena)
    // return arena
}

createBoard()
// moveDone(squares)
// var x = squares2arena(squares)
// console.log(arena2squares(x))

let colourBeingDragged 
let colourBeingReplaced
let squareIdBeingDragged
let squareIdBeingReplaced

function dragStart(){
    colourBeingDragged = this.style.backgroundColor
    squareIdBeingDragged = parseInt(this.id)
    console.log(colourBeingDragged)
    console.log(this.id,"dragstart")
}
function dragOver(e){
    e.preventDefault()
    console.log(this.id,"dragover")
}
function dragEnter(e){
    e.preventDefault()
    console.log(this.id,"dragenter")
}
function dragLeave(){
    console.log(this.id,"dragleave")
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
        squares[squareIdBeingReplaced].setAttribute("draggable",false)
    } else {
        squares[squareIdBeingDragged].style.backgroundColor = colourBeingDragged
        squares[squareIdBeingReplaced].setAttribute("draggable",false)
    }
}
function dragDrop(){
    console.log(this.id,"dragdrop")
    colourBeingReplaced = this.style.backgroundColor
    squareIdBeingReplaced = parseInt(this.id)
    // var y1 = squareIdBeingDragged % 10;
    // var y2 = squareIdBeingReplaced % 10;
    // console.log(y1,y2)
    // if (y1==y2){
    this.style.backgroundColor = colourBeingDragged
    squares[squareIdBeingDragged].style.backgroundColor = colourBeingReplaced// if this colour is grey make draggable false

}


squares.forEach(btn =>btn.addEventListener('dragstart',dragStart))
squares.forEach(btn =>btn.addEventListener('dragend',dragEnd))
squares.forEach(btn =>btn.addEventListener('dragover',dragOver))
squares.forEach(btn =>btn.addEventListener('dragenter',dragEnter))
squares.forEach(btn =>btn.addEventListener('dragleave',dragLeave))
squares.forEach(btn =>btn.addEventListener('drop',dragDrop))




























//end doc
})
