export function dragStart(globalDrag,thisElt){
    globalDrag.colourBeingDragged = thisElt.style.backgroundColor
    globalDrag.classBeingDragged = parseInt(thisElt.className)
    globalDrag.squareIdBeingDragged = parseInt(thisElt.id)
}