export function classListAdjustal(parent, classRemove, classAdd){
    parent.classList.remove(`${classRemove}`)
    parent.classList.add(`${classAdd}`)
}