// import {   globalDrag.colourBeingDragged,
//     globalDrag.colourBeingReplacd,
//     globalDrag.squareIdBeingDragged,
//     globalDrag.squareIdBeingReplaced,
//     globalDrag.classBeingReplaced,
//     globalDrag.classBeingDragged,
//     globalDrag.LoR } from "./variables.js"]

export function dragStart(globalDrag){
    globalDrag.colourBeingDragged = this.style.backgroundColor
    globalDrag.classBeingDragged = parseInt(this.className)
    globalDrag.squareIdBeingDragged = parseInt(this.id)
}