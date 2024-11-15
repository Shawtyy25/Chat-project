export function listSelect(arrayItems, arrayNames, text, info){
    for (let index = 0; index < arrayItems.length; index++) {
        arrayItems[index].addEventListener("mouseover", () =>{
            info[index].classList.remove("hidden")
            info[index].classList.add("active-fx")
            text[index].innerText = arrayNames[index]
        })

        arrayItems[index].addEventListener("mouseout", () =>{
            info[index].classList.remove("active-fx")
            info[index].classList.add("hidden")
            text[index].innerText = ""
        })
    }
}