export function generateRow(){ //can make this shorter with || 
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