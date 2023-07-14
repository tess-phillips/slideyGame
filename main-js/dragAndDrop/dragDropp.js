export function dragDropp(globalDrag, thisElt){
    globalDrag.classBeingReplaced = parseInt(thisElt.className)
    globalDrag.colourBeingReplacd = thisElt.style.backgroundColor
    globalDrag.squareIdBeingReplaced = parseInt(thisElt.id)
}