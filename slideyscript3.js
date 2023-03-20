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
                if (squares[(y*8)+x].className == '0'){
                    rowCount +=1;
                }
            }
            if (rowCount ==width){
                console.log("fullRowCheck",y)
                return y
            }
        }
        console.log("fullRowCheck","notFull")
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
        console.log("row deleted")
        colouring()
        }   
    }



function colouring(){
    for (let i=0;i<squares.length;i++){
        squares[i].backgroundColor=colours[squares[i].className][0]
        if (i>70){
            squares[i].backgroundColor=colours[squares[i].className][1]
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
            let i=squares[(y*8)+x] //x,y
            let j=squares[(y*8)+x+8]  //x,y+1
            let k=squares[(y*8)+x+9]; // x+1,y+1
            let l=squares[(y*8)+x+10]; //x+2, y+1
            let m=squares[(y*8)+x+1]; //x+1,y
            let n=squares[(y*8)+x+2]; // x+2,y
            let o=squares[(y*8)+x+11]; // x+3,y+1
            let p=squares[(y*8)+x+3]; // x+3,y
            if (i.className ==1 && j.className==0){
                j.className=i.className;
                i=0;
                doneSomething =true;
             }
            if (i.className ==2 && m.className==2 && j.className==0&& k.className==0){
                j.className=i.className;
                k.className=i.className
                i.className=0;
                m.className=0;
                x+=1;
                doneSomething =true;
            }
            if (i.className && m.className==3 && n.className==3 && j.className==0&& k.className==0&& l.className==0){
                j.className=i.className;
                k.className=i.className;
                l.className=i.className;
                i.className=0;
                m.className=0;
                n.className=0;
                x+=2;
                doneSomething =true;
            }
            if (i.className&& m.className==4 && n.className==4 && p.className==4 && j.className==0&& k.className==0&& l.className==0&& o.className==0){
                j.className=i.className;
                k.className=i.className;
                l.className=i.className;
                o.className=i.className;
                i.className=0;
                m.className=0;
                n.className=0;
                p.className=0;
                x+=3;
                doneSomething =true;
            }
            }
    }
    
    // setTimeout(() => {
    if (doneSomething==true){
        console.log("filled down")
        colouring()
    }

}    
    function moveDone(){
        fillDown();
        var check = fullRowCheck();
        console.log(check, "check")
        while (check !=="notFull"){
            console.log(check,"not full check")
            deleteRow(check);
            fillDown();
            check = fullRowCheck();
        }
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
    