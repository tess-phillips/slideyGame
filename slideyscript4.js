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
        ["#FF8E0D",  "#D3D3D3"]  
       ];  
    
    function generateRow(){ //can make this shorter with || 
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
    
    function fullRowCheck(){
        //checks the squares for any full rows to be deleted
        for (let y=0; y< height; y++) {
            var rowCount =0;
            for (let x=0; x< width; x++){
                if (squares[(y*8)+x].className !== '0'){
                    rowCount +=1;
                }
            }
            if (rowCount ==width){
                return y
            }
        }
        return "notFull"
    }
    
    function deleteRow(fullRow){
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
        for (let i=0;i<width*height;i++){
            if (i<72){
                squares[i].style.backgroundColor=colours[squares[i].className][0]
                if (colours[squares[i].className][0]=="grey"){
                    squares[i].setAttribute("draggable",false)
                } else {squares[i].setAttribute("draggable",true)}
        } else {
            squares[i].style.backgroundColor=colours[squares[i].className][1]
            squares[i].setAttribute("draggable",false)
        }

        }
    }

    function fillDown(){
        var wholeblock=true;
        var doneSomething = false;
        var leftnum =0; 
        for (let y=0; y< height-2; y++) {
            for (let x=0; x< width; x++){ 
                // wholeblock =true;
                // if (parseInt(squares[(y*8)+x].className)!=0 && parseInt(squares[(y*8)+x].className)!=1 && parseInt(squares[(y*8)+x+8].className) !=0){
                //     var num = parseInt(squares[(y*8)+x].className)
                //     wholeblock=false
                //     x+=(num-1) // this is definitely not working seamlessly
                //     console.log("false")
                // } WAS WORKING BETTER BEFORE FIND PREVIOUS VERSION

                // if (squares[(y*8)+x].className ==2 && squares[(y*8)+x+1].className==2 && squares[(y*8)+x+8].className==0&& squares[(y*8)+x+9].className==0) {
                //     for (let i=0; i<width;i++){
                //         if (squares[(y*8)+x-i].className ==2){ //AND ON SAME ROW
                //             leftnum +=1
                //         } else {i=8}
                //     }
                //     if (leftnum%2 ==0){
                //         wholeblock = false
                //     }
                // }

                // let i=squares[(y*8)+x] //x,y
                // let j=squares[(y*8)+x+8]  //x,y+1
                // let k=squares[(y*8)+x+9]; // x+1,y+1
                // let l=squares[(y*8)+x+10]; //x+2, y+1
                // let m=squares[(y*8)+x+1]; //x+1,y
                // let n=squares[(y*8)+x+2]; // x+2,y
                // let o=squares[(y*8)+x+11]; // x+3,y+1
                // let p=squares[(y*8)+x+3]; // x+3,y
                if (parseInt(squares[(y*8)+x].className) ==1 && parseInt(squares[(y*8)+x+8].className==0)){
                    squares[(y*8)+x+8].className=squares[(y*8)+x].className;
                    squares[(y*8)+x].className=0;
                    doneSomething =true;
                }
                if ((squares[(y*8)+x].className ==2 && squares[(y*8)+x+1].className==2 && squares[(y*8)+x+8].className==0&& squares[(y*8)+x+9].className==0)&& wholeblock ==true){
                    squares[(y*8)+x+8].className=squares[(y*8)+x].className;
                    squares[(y*8)+x+9].className=squares[(y*8)+x].className
                    squares[(y*8)+x].className=0;
                    squares[(y*8)+x+1].className=0;
                    x+=1;
                    doneSomething =true;
                }
                if ((squares[(y*8)+x].className==3 && squares[(y*8)+x+1].className==3 && squares[(y*8)+x+2].className==3 && squares[(y*8)+x+8].className==0&& squares[(y*8)+x+9].className==0&& squares[(y*8)+x+10].className==0)&& wholeblock==true){
                    squares[(y*8)+x+8].className=squares[(y*8)+x].className;
                    squares[(y*8)+x+9].className=squares[(y*8)+x].className;
                    squares[(y*8)+x+10].className=squares[(y*8)+x].className;
                    squares[(y*8)+x].className=0;
                    squares[(y*8)+x+1].className=0;
                    squares[(y*8)+x+2].className=0;
                    x+=2;
                    doneSomething =true;
                }
                if ((squares[(y*8)+x].className==4&& squares[(y*8)+x+1].className==4 && squares[(y*8)+x+2].className==4 && squares[(y*8)+x+3].className==4 && squares[(y*8)+x+8].className==0&& squares[(y*8)+x+9].className==0&& squares[(y*8)+x+10].className==0&& squares[(y*8)+x+11].className==0)&& wholeblock==true){
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
        
        if (doneSomething==true){
            for (let i=0; i<width;i++){
                squares[i].className=0
            }
            console.log("filled down")
            colouring()
        }
        // NEED TO WORK OUT HOW TO GET A DELAY AT THE END OF THIS FUNCTION (maybe with set timeout)
    }   

    function allup(){
        var rowColouring = generateRowNotFull()
        for (let i = 0; i<width*height; i++){
            if (i<72){
                squares[i].className= squares[i+8].className
            }
            else {
                squares[i].className = rowColouring[i-72]
            }
            for (let j = 0; j<width; j++){
                if (squares[i].className != 0 && i<8){
                    console.log("game over")
                    break
                }
            }              
            }
        colouring()
        console.log("all up")
    }   

    function moveDone(){
        fillDown()
        allup()
        var check = fullRowCheck();
        if (check !=="notFull"){
            deleteRow(check)
            fillDown()
        }
        // console.log(check, "check")
        while (check !=="notFull"){
            deleteRow(check);
            fillDown();
            check = fullRowCheck();
        }
        console.log("move done")
        fillDown()
 
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
    
    let colourBeingDragged 
    let colourBeingReplaced
    let squareIdBeingDragged
    let squareIdBeingReplaced
    let classBeingReplaced
    let classBeingDragged
    let howmany2s
    let LoR
    
    function dragStart(){
        colourBeingDragged = this.style.backgroundColor
        classBeingDragged = parseInt(this.className)
        squareIdBeingDragged = parseInt(this.id)
        console.log(squareIdBeingDragged, "being dragged")
        if (classBeingDragged==2){ // get the leftmost value of the block
            howmany2s = 0;
            for (let i=-width;i<width*2;i++){
                if (squares[squareIdBeingDragged+i].className==2 && Math.floor((squareIdBeingDragged+i)/8) == Math.floor((squareIdBeingDragged)/8) && (squareIdBeingDragged+i)<72 && (squareIdBeingDragged+i)>0){//AND ON THE SAME ROW?
                    howmany2s +=1;
                }
            }
        //     if (howmany2s==2){ //make it the leftmost 2
        //         if (squares[squareIdBeingDragged-1].className == 2){
        //             squareIdBeingDragged -= 1
        //             console.log(squareIdBeingDragged, "being dragged")
        //         }
        //     } else {} //DEAL WITH THIS LATER

            // colourBeingDragged = this.style.backgroundColor
            // classBeingDragged = this.className
            // squareIdBeingDragged = parseInt(this.id)
        }
        
        console.log(classBeingDragged, "class dragged")
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

    function validMoves(){
            var leftMove = 0; rightMove = 0;
            var validMoves = [];
            LoR = null;
            if ((squares[squareIdBeingDragged].className == 2 && squares[squareIdBeingDragged-1].className == 2)||
                (squares[squareIdBeingDragged].className == 3 && squares[squareIdBeingDragged-1].className == 3&& squares[squareIdBeingDragged-2].className == 3)||
                (squares[squareIdBeingDragged].className == 4 && squares[squareIdBeingDragged-1].className == 4&& squares[squareIdBeingDragged-2].className == 4&& squares[squareIdBeingDragged-3].className == 4)){
                LoR ="rightOfBlock";
                console.log(LoR)
            } else  if ((squares[squareIdBeingDragged].className == 2 && squares[squareIdBeingDragged+1].className == 2)||
            (squares[squareIdBeingDragged].className == 3 && squares[squareIdBeingDragged+1].className == 3&& squares[squareIdBeingDragged+2].className == 3)||
            (squares[squareIdBeingDragged].className == 4 && squares[squareIdBeingDragged+1].className == 4&& squares[squareIdBeingDragged+2].className == 4&& squares[squareIdBeingDragged+3].className == 4)){
                LoR="leftOfBlock";
                console.log(LoR)
            }
            var dir = squareIdBeingReplaced-squareIdBeingDragged;
            console.log(dir, "postive if moving right")
            if (LoR==null){
                for (let i=1;i<width;i++){
                    // console.log(squares[squareIdBeingDragged-i].className,"leftclassname")
                    if (squares[squareIdBeingDragged-i].className==0 && Math.floor((squareIdBeingDragged-i)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                        leftMove +=1;
                        console.log(leftMove,"left")
                        validMoves.push(squareIdBeingDragged-leftMove);
                    }
                    else {i=8}
                }
                console.log(classBeingDragged, "classdrag")
                for (let j=1;j<width;j++){
                    if (squares[squareIdBeingDragged+j].className==0 && Math.floor((squareIdBeingDragged+j)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                        rightMove +=1;
                        console.log(rightMove,"right")
                        validMoves.push(squareIdBeingDragged+rightMove);
                    }
                    else {j=8}
                }
            }
            else if (LoR == "leftOfBlock"){
                for (let i=1;i<width;i++){
                    // console.log(squares[squareIdBeingDragged-i].className,"leftclassname")
                    if (squares[squareIdBeingDragged-i].className==0 && Math.floor((squareIdBeingDragged-i)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                        leftMove +=1;
                        console.log(leftMove,"left")
                        validMoves.push(squareIdBeingDragged-leftMove);
                    }
                    else {i=8}
                }
                for (let j=classBeingDragged;j<width;j++){
                    if (squares[squareIdBeingDragged+j].className==0 && Math.floor((squareIdBeingDragged+j)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                        rightMove +=1;
                        console.log(rightMove,"right")
                        validMoves.push(squareIdBeingDragged+rightMove+(classBeingDragged-1));
                    }
                    else {j=8}
                }
                if (rightMove>0)
                {validMoves.push(squareIdBeingDragged+classBeingDragged-1)}
            }
            else if (LoR == "rightOfBlock"){
                for (let i=classBeingDragged;i<width;i++){
                    // console.log(squares[squareIdBeingDragged-i].className,"leftclassname")
                    if (squares[squareIdBeingDragged-i].className==0 && Math.floor((squareIdBeingDragged-i)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                        leftMove +=1;
                        console.log(leftMove,"left")
                        validMoves.push(squareIdBeingDragged-leftMove-(classBeingDragged-1));
                    }
                    else {i=8}
                }
                for (let j=1;j<width;j++){
                    if (squares[squareIdBeingDragged+j].className==0 && Math.floor((squareIdBeingDragged+j)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                        rightMove +=1;
                        console.log(rightMove,"right")
                        validMoves.push(squareIdBeingDragged+rightMove);
                    }
                    else {j=8}
                }
                if (leftMove>0)
                {validMoves.push(squareIdBeingDragged-classBeingDragged+1)}
            }
            console.log(validMoves, "valid moves are")
            var bigList = [validMoves,LoR,dir]
            return bigList
    }
    
    function dragEnd(){
        console.log(this.id,"dragend");
        var myList = validMoves()
        var validMove = myList[0];
        var LoRofBlock = myList[1];
        var direction = myList[2];
        if (LoRofBlock==null){ 
            if (validMove.includes(squareIdBeingReplaced)){ 
                for (let k=0; k<classBeingDragged;k++){
                    squares[squareIdBeingReplaced+k].className = classBeingDragged
                    squares[squareIdBeingDragged+k].className = classBeingReplaced
                }
                colouring()
                moveDone()
            }
            console.log("1block")
        } 
        else if(direction<0 && LoRofBlock =="leftOfBlock"){
            if (validMove.includes(squareIdBeingReplaced)){ 
                console.log("valid")
                for (let k=0; k<classBeingDragged;k++){
                    squares[squareIdBeingReplaced+k].className = classBeingDragged
                    squares[squareIdBeingDragged+k].className = classBeingReplaced
                }
                colouring()
                moveDone()
            }
            console.log("LL")
        }
        else if(direction>0 && LoRofBlock =="leftOfBlock"){
            if (validMove.includes(squareIdBeingReplaced)){ 
                for (let k=0; k<classBeingDragged;k++){
                    squares[squareIdBeingDragged+k].className =0;
                    squares[squareIdBeingReplaced+k].className = classBeingDragged
                }
                squares[squareIdBeingReplaced].className = classBeingDragged
                colouring()
                moveDone()
            }
            console.log("RL")
        } 
        else if(direction>0 && LoRofBlock=="rightOfBlock"){
            if (validMove.includes(squareIdBeingReplaced)){ 
                for (let k=0; k<classBeingDragged;k++){
                    squares[squareIdBeingDragged-k].className =0;
                    squares[squareIdBeingReplaced-k].className = classBeingDragged
                }
                colouring()
                moveDone()
            }
            console.log("RR")
        }
        else if(direction<0 && LoRofBlock=="rightOfBlock"){
            if (validMove.includes(squareIdBeingReplaced)){ 
                console.log("valid")
                for (let k=0; k<classBeingDragged;k++){
                    squares[squareIdBeingDragged-k].className =0;
                    squares[squareIdBeingReplaced-k].className = classBeingDragged
                }
                squares[squareIdBeingReplaced].className = classBeingDragged
                colouring()
                moveDone()
            }
            console.log("LR")
        }
        var emptycount = 0;
        for (let empty=64; empty<width*height;empty++){
            if (squares[64].className=0)
                {emptycount+=1}
            }
        if (emptycount == 8){moveDone()}


    }

    function dragDropp(){
        console.log(this.id,"dragdrop")
        classBeingReplaced = parseInt(this.className)
        colourBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
    }
    
    
    squares.forEach(btn =>btn.addEventListener('dragstart',dragStart))
    squares.forEach(btn =>btn.addEventListener('dragend',dragEnd))
    squares.forEach(btn =>btn.addEventListener('dragover',dragOver))
    squares.forEach(btn =>btn.addEventListener('dragenter',dragEnter))
    squares.forEach(btn =>btn.addEventListener('dragleave',dragLeave))
    squares.forEach(btn =>btn.addEventListener('drop',dragDropp))
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //end doc
    })
    