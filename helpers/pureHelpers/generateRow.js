export function generateRow() {
    var row = [];
    var randomNum;
    var i = 0;
  
    while (i < 8) {
      if (i === 5) {
        randomNum = Math.floor(Math.random() * 4);
      } else if (i === 6) {
        randomNum = Math.floor(Math.random() * 3);
      } else if (i === 7) {
        randomNum = Math.floor(Math.random() * 2);
      } else {
        randomNum = Math.floor(Math.random() * 5);
      }
  
      if (randomNum === 0) {
        row[i] = randomNum;
        i += 1;
      } else {
        for (let j = 0; j < randomNum; j++) {
          row[i] = randomNum;
          i += 1;
        }
      }
    }
  
    return row;
  }