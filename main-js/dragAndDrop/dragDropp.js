// import {   globalDrag.colourBeingDragged,
//     globalDrag.colourBeingReplacd,
//     globalDrag.squareIdBeingDragged,
//     globalDrag.squareIdBeingReplaced,
//     globalDrag.classBeingReplaced,
//     globalDrag.classBeingDragged,
//     globalDrag.LoR } from "./variables.js"

export function dragDropp(globalDrag, thisElt){
    console.log("drop")
    globalDrag.classBeingReplaced = parseInt(thisElt.className)
    globalDrag.colourBeingReplacd = thisElt.style.backgroundColor
    globalDrag.squareIdBeingReplaced = parseInt(thisElt.id)
}