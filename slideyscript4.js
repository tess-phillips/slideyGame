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

    const resetButton = document.getElementById("reset");
    const modal = document.getElementById("myModal");
    const instructionsButton = document.getElementById("instructions");
    const span = document.getElementsByClassName("close")[0];
    const modal2 = document.getElementById("myModal2");
    const span2 = document.getElementsByClassName("close2")[0];


    resetButton.addEventListener("click", () => {
        location.reload();
    });
    
    instructionsButton.addEventListener("click", () => {
        modal.style.display = "block";
    });
    
    span.addEventListener("click", () => {
        modal.style.display = "none";
    });

    span2.addEventListener("click", () => {
    location.reload();
    });
    
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
        colouring()
        } 
        score+=1;
        console.log("updated score")
        document.getElementById("score").innerHTML = score;
        // newscore.innerHTML = score;
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
        var doneSomething = false;
        for (let i=0;i<(height*width)-(width*2)+1;i++){

            if (squares[i].className==1&& squares[i+8].className==0){
                    squares[i+8].className=1;
                    squares[i].className=0;
                    doneSomething = true;
                    colouring()
                }
            
            else if (squares[i].className==2 && squares[i+1].className==2){
                if (squares[i+8].className!=0 || squares[i+9].className!=0){
                    i+=1
                }
                else if (squares[i+8].className==0 && squares[i+9].className==0){
                    squares[i+8].className=2
                    squares[i+9].className=2
                    squares[i].className=0
                    squares[i+1].className=0
                    doneSomething = true;
                    colouring()
                }
            }

            else if (squares[i].className==3 && squares[i+1].className==3&& squares[i+2].className==3){
                if (squares[i+8].className!=0 || squares[i+9].className!=0 || squares[i+10].className!=0){
                    i+=2
                }
                else if (squares[i+8].className==0 && squares[i+9].className==0 && squares[i+10].className==0){
                    squares[i+8].className=3
                    squares[i+9].className=3
                    squares[i+10].className=3
                    squares[i].className=0
                    squares[i+1].className=0
                    squares[i+2].className=0
                    doneSomething = true;
                    colouring()

                }
            }

            else if (squares[i].className==4&& squares[i+1].className==4&& squares[i+2].className==4&& squares[i+3].className==4){
                if (squares[i+8].className!=0 || squares[i+9].className!=0 || squares[i+10].className!=0|| squares[i+11].className!=0){
                    i+=3
                }
                else if (squares[i+8].className==0 && squares[i+9].className==0 && squares[i+10].className==0 && squares[i+11].className==0){
                    squares[i+8].className=4
                    squares[i+9].className=4
                    squares[i+10].className=4
                    squares[i+11].className=4
                    squares[i].className=0
                    squares[i+1].className=0
                    squares[i+2].className=0
                    squares[i+3].className=0
                    // i=0
                    doneSomething = true;
                    colouring()

                }
            }

        } 
        if (doneSomething==true){}
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
            for (let j = 0; j<width; j++){ //game over
                if (squares[i].className != 0 && i<8){
                    modal2.style.display = "block";
                    document.getElementById("scorefinal").innerHTML = score;
                    break
                }
            }
        colouring()
        }
    }   

    function moveDone(){
        fillDown()
        allup()
        var check = fullRowCheck();
        while (check !=="notFull"){
            deleteRow(check);
            fillDown();
            check = fullRowCheck();
        }
        fillDown() 
        fillDown()
    }
    
    function createBoard(){//to add a fill down and delete
        document.getElementById("score").innerHTML = score;
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
    let LoR
    
    function dragStart(){
        colourBeingDragged = this.style.backgroundColor
        classBeingDragged = parseInt(this.className)
        squareIdBeingDragged = parseInt(this.id)
    }

    function dragOver(e){
        e.preventDefault()
    }
    function dragEnter(e){
        e.preventDefault()
    }
    function dragLeave(){    
    }

    function validMoves(){
            var leftMove = 0; rightMove = 0;
            var validMoves = [];
            LoR = null;
            if ((squares[squareIdBeingDragged].className == 2 && squares[squareIdBeingDragged-1].className == 2)||
                (squares[squareIdBeingDragged].className == 3 && squares[squareIdBeingDragged-1].className == 3&& squares[squareIdBeingDragged-2].className == 3)||
                (squares[squareIdBeingDragged].className == 4 && squares[squareIdBeingDragged-1].className == 4&& squares[squareIdBeingDragged-2].className == 4&& squares[squareIdBeingDragged-3].className == 4)){
                LoR ="rightOfBlock";
            } else  if ((squares[squareIdBeingDragged].className == 2 && squares[squareIdBeingDragged+1].className == 2)||
            (squares[squareIdBeingDragged].className == 3 && squares[squareIdBeingDragged+1].className == 3&& squares[squareIdBeingDragged+2].className == 3)||
            (squares[squareIdBeingDragged].className == 4 && squares[squareIdBeingDragged+1].className == 4&& squares[squareIdBeingDragged+2].className == 4&& squares[squareIdBeingDragged+3].className == 4)){
                LoR="leftOfBlock";
            }
            var dir = squareIdBeingReplaced-squareIdBeingDragged;
            if (LoR==null){
                for (let i=1;i<width;i++){
                    if (squares[squareIdBeingDragged-i].className==0 && Math.floor((squareIdBeingDragged-i)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                        leftMove +=1;
                        validMoves.push(squareIdBeingDragged-leftMove);
                    }
                    else {i=8}
                }
                for (let j=1;j<width;j++){
                    if (squares[squareIdBeingDragged+j].className==0 && Math.floor((squareIdBeingDragged+j)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                        rightMove +=1;
                        validMoves.push(squareIdBeingDragged+rightMove);
                    }
                    else {j=8}
                }
            }
            else if (LoR == "leftOfBlock"){
                for (let i=1;i<width;i++){
                    if (squares[squareIdBeingDragged-i].className==0 && Math.floor((squareIdBeingDragged-i)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                        leftMove +=1;
                        validMoves.push(squareIdBeingDragged-leftMove);
                    }
                    else {i=8}
                }
                for (let j=classBeingDragged;j<width;j++){
                    if (squares[squareIdBeingDragged+j].className==0 && Math.floor((squareIdBeingDragged+j)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                        rightMove +=1;
                        validMoves.push(squareIdBeingDragged+rightMove+(classBeingDragged-1));
                    }
                    else {j=8}
                }
                if (rightMove>0)
                {validMoves.push(squareIdBeingDragged+classBeingDragged-1)}
            }
            else if (LoR == "rightOfBlock"){
                for (let i=classBeingDragged;i<width;i++){
                    if (squares[squareIdBeingDragged-i].className==0 && Math.floor((squareIdBeingDragged-i)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                        leftMove +=1;
                        validMoves.push(squareIdBeingDragged-leftMove-(classBeingDragged-1));
                    }
                    else {i=8}
                }
                for (let j=1;j<width;j++){
                    if (squares[squareIdBeingDragged+j].className==0 && Math.floor((squareIdBeingDragged+j)/8) == Math.floor((squareIdBeingDragged)/8)){//AND ON THE SAME ROW?
                        rightMove +=1;
                        validMoves.push(squareIdBeingDragged+rightMove);
                    }
                    else {j=8}
                }
                if (leftMove>0)
                {validMoves.push(squareIdBeingDragged-classBeingDragged+1)}
            }
            var bigList = [validMoves,LoR,dir]
            return bigList
    }
    
    function dragEnd(){
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
        } 
        else if(direction<0 && LoRofBlock =="leftOfBlock"){
            if (validMove.includes(squareIdBeingReplaced)){ 
                for (let k=0; k<classBeingDragged;k++){
                    squares[squareIdBeingReplaced+k].className = classBeingDragged
                    squares[squareIdBeingDragged+k].className = classBeingReplaced
                }
                colouring()
                moveDone()
            }
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
        }
        else if(direction<0 && LoRofBlock=="rightOfBlock"){
            if (validMove.includes(squareIdBeingReplaced)){ 
                for (let k=0; k<classBeingDragged;k++){
                    squares[squareIdBeingDragged-k].className =0;
                    squares[squareIdBeingReplaced-k].className = classBeingDragged
                }
                squares[squareIdBeingReplaced].className = classBeingDragged
                colouring()
                moveDone()
            }
        }
    }

    function dragDropp(){
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
    
    })
    