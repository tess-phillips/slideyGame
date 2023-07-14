export function colouring(global) {
    const squares = global.squares;
    const colours = global.colours;
  
    for (let i = 0; i < squares.length; i++) {
      const squareToColour = squares[i];
      const className = squareToColour.className;
      const classColours = colours[className];
      const isFirstGroup = i < 72;
  
      squareToColour.style.backgroundColor = classColours[isFirstGroup ? 0 : 1];
      squareToColour.setAttribute("draggable", !isFirstGroup || classColours[0] !== "grey");
    }
  }