// import {   globalDrag.colourBeingDragged,
//     globalDrag.colourBeingReplacd,
//     globalDrag.squareIdBeingDragged,
//     globalDrag.squareIdBeingReplaced,
//     globalDrag.classBeingReplaced,
//     globalDrag.classBeingDragged,
//     globalDrag.LoR } from "./variables.js"]

export function dragStart(globalDrag,thisElt){
    console.log("start")
    globalDrag.colourBeingDragged = thisElt.style.backgroundColor
    globalDrag.classBeingDragged = parseInt(thisElt.className)
    globalDrag.squareIdBeingDragged = parseInt(thisElt.id)
}