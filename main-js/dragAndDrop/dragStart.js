import {   colourBeingDragged,
    colourBeingReplaced,
    squareIdBeingDragged,
    squareIdBeingReplaced,
    classBeingReplaced,
    classBeingDragged,
    LoR } from "./variables.js"

export function dragStart(){
    colourBeingDragged = this.style.backgroundColor
    classBeingDragged = parseInt(this.className)
    squareIdBeingDragged = parseInt(this.id)
}