// import {   globalDrag.colourBeingDragged,
//     globalDrag.colourBeingReplacd,
//     globalDrag.squareIdBeingDragged,
//     globalDrag.squareIdBeingReplaced,
//     globalDrag.classBeingReplaced,
//     globalDrag.classBeingDragged,
//     globalDrag.LoR } from "./variables.js"

export function dragDropp(globalDrag){
    if (globalDrag.classBeingDragged == undefined){return}
    globalDrag.classBeingReplaced = parseInt(this.className)
    globalDrag.colourBeingReplacd = this.style.backgroundColor
    globalDrag.squareIdBeingReplaced = parseInt(this.id)
}