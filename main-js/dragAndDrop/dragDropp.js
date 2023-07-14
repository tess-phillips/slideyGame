import {   colourBeingDragged,
    colourBeingReplaced,
    squareIdBeingDragged,
    squareIdBeingReplaced,
    classBeingReplaced,
    classBeingDragged,
    LoR } from "./variables.js"

export function dragDropp(){
    classBeingReplaced = parseInt(this.className)
    colourBeingReplaced = this.style.backgroundColor
    squareIdBeingReplaced = parseInt(this.id)
}