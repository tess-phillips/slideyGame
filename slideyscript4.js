document.addEventListener('DOMContentLoaded',()=>{
    const grid = document.querySelector('.grid');
    const width = 8;
    const height = 10;
    const squares = [];
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
    
    function fullRowCheck(){ //arena[y][x]
        //checks the arena for any full rows to be deleted
        for (let y=0; y< height; y++) {
            var rowCount =0;
            for (let x=0; x< width; x++){
                if (squares[(y*8)+x].className !== '0'){
                    rowCount +=1;
                }
            }
            if (rowCount ==width){
                // console.log("fullRowCheck",y)
                return y
            }
        }
        // console.log("fullRowCheck","notFull")
        return "notFull"
    }
    
    function deleteRow(fullRow){
        // console.log(arena)
        // squares[fullRow]=[0,0,0,0,0,0,0,0];
        for (let x=0; x<width; x++){
            squares[(fullRow*8)+x].className=0
        }
        for (let i=fullRow;i>0;i--){
            for (let x=0; x<width; x++){
                squares[(i*8)+x].className= squares[(i*8)+x-8].className
                squares[(i*8)+x-8].className=0
            }
        score+=10;
        console.log("row deleted")
        colouring()
        }   
    }



function colouring(){
    for (let i=0;i<72;i++){
        // console.log(squares[i].className)
        squares[i].style.backgroundColor=colours[squares[i].className][0]
        // if (i>71){
        //     squares[i].style.backgroundColor=colours[squares[i].className][1]
        // }
        if (colours[squares[i].className][0]=="grey"){
            squares[i].setAttribute("draggable",false)
        } else {squares[i].setAttribute("draggable",true)
    }
    }
}

function fillDown(){
    // var fullRow= fullRowCheck(arena);
    // if (fullRow !== "notFull"){
    //     alert("something not right")
    // }
    var doneSomething = false;//may need to go through and delete if don't end up using it
    for (let y=0; y< height-2; y++) {
        for (let x=0; x< width; x++){ 
            // let i=squares[(y*8)+x] //x,y
            // let j=squares[(y*8)+x+8]  //x,y+1
            // let k=squares[(y*8)+x+9]; // x+1,y+1
            // let l=squares[(y*8)+x+10]; //x+2, y+1
            // let m=squares[(y*8)+x+1]; //x+1,y
            // let n=squares[(y*8)+x+2]; // x+2,y
            // let o=squares[(y*8)+x+11]; // x+3,y+1
            // let p=squares[(y*8)+x+3]; // x+3,y
            if (squares[(y*8)+x].className ==1 && squares[(y*8)+x+8].className==0){
                squares[(y*8)+x+8].className=squares[(y*8)+x].className;
                squares[(y*8)+x].className=0;
                doneSomething =true;
             }
            if (squares[(y*8)+x].className ==2 && squares[(y*8)+x+1].className==2 && squares[(y*8)+x+8].className==0&& squares[(y*8)+x+9].className==0){
                squares[(y*8)+x+8].className=squares[(y*8)+x].className;
                squares[(y*8)+x+9].className=squares[(y*8)+x].className
                squares[(y*8)+x].className=0;
                squares[(y*8)+x+1].className=0;
                x+=1;
                doneSomething =true;
            }
            if (squares[(y*8)+x].className && squares[(y*8)+x+1].className==3 && squares[(y*8)+x+2].className==3 && squares[(y*8)+x+8].className==0&& squares[(y*8)+x+9].className==0&& squares[(y*8)+x+10].className==0){
                squares[(y*8)+x+8].className=squares[(y*8)+x].className;
                squares[(y*8)+x+9].className=squares[(y*8)+x].className;
                squares[(y*8)+x+10].className=squares[(y*8)+x].className;
                squares[(y*8)+x].className=0;
                squares[(y*8)+x+1].className=0;
                squares[(y*8)+x+2].className=0;
                x+=2;
                doneSomething =true;
            }
            if (squares[(y*8)+x].className&& squares[(y*8)+x+1].className==4 && squares[(y*8)+x+2].className==4 && squares[(y*8)+x+3].className==4 && squares[(y*8)+x+8].className==0&& squares[(y*8)+x+9].className==0&& squares[(y*8)+x+10].className==0&& squares[(y*8)+x+11].className==0){
                squares[(y*8)+x+8].className=squares[(y*8)+x].className;
                squares[(y*8)+x+9].className=squares[(y*8)+x].className;
                squares[(y*8)+x+10].className=squares[(y*8)+x].className;
                squares[(y*8)+x+11].className=squares[(y*8)+x].className;
                squares[(y*8)+x].className=0;
                squares[(y*8)+x+1].className=0;
                squares[(y*8)+x+2].className=0;
                squares[(y*8)+x+3].className=0;
                x+=3;
                doneSomething =true;
            }
            }
    }
    
    // setTimeout(() => {
    if (doneSomething==true){
        for (let i=0; i<width;i++){
            squares[i].className=0
        }
        console.log("filled down")
        colouring()
    }

    }   

function allup(){
    for (let i = 0; i<width*height; i++){
        for (let j = 0; j<width; j++){
            if (squares[i].className != 0 && i<8){
                console.log("game over")
                break
            }  
            if (i>71 ){
                var rowColouring = generateRowNotFull()
                var squareColourIndex = rowColouring[j]
                // squares[i].className = colours[squareColourIndex][1];
                squares[i].className = squareColourIndex
            }
        }
        if (i >7){
            squares[i-8].className= squares[i].className
            squares[i].className=0
        }
        
        }
    colouring()
    console.log("all up")
}
    function moveDone(){
        fillDown();
        var check = fullRowCheck();
        if (check !=="notFull"){
            deleteRow(check)
            allup()
        }
        // console.log(check, "check")
        while (check !=="notFull"){
            // console.log(check,"not full check")
            deleteRow(check);
            fillDown();
            check = fullRowCheck();
        }
    }
    
    function createBoard(){//to add a fill down and delete
        var index1 = 0;
        var counter =0;    
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
                square.setAttribute("id",counter)
                counter +=1
                square.style.backgroundColor = colours[squareColourIndex][index1];
                square.className = squareColourIndex;
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
        classBeingDragged = this.className
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
            // squares[squareIdBeingReplaced].style.backgroundColor = colourBeingReplaced
            // squares[squareIdBeingDragged].style.backgroundColor = colourBeingDragged
            squares[squareIdBeingReplaced].className = classBeingReplaced
            squares[squareIdBeingDragged].className = classBeingDragged
            squares[squareIdBeingReplaced].setAttribute("draggable",false)
        } else {
            // squares[squareIdBeingDragged].style.backgroundColor = colourBeingDragged
            squares[squareIdBeingDragged].className = classBeingDragged
            squares[squareIdBeingReplaced].setAttribute("draggable",false)
        }
        colouring()
        moveDone()
        // console.log(arena[8][0],80,arena)
    }

    function dragDropp(){
        console.log(this.id,"dragdrop")
        classBeingReplaced = this.className
        colourBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
        // var y1 = squareIdBeingDragged % 10;
        // var y2 = squareIdBeingReplaced % 10;
        // console.log(y1,y2)
        // if (y1==y2){
        // this.style.backgroundColor = colourBeingDragged
        this.className = classBeingDragged
        // squares[squareIdBeingDragged].style.backgroundColor = colourBeingReplaced// if this colour is grey make draggable false
        squares[squareIdBeingDragged].className = classBeingReplaced
        colouring()
        moveDone()
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
    