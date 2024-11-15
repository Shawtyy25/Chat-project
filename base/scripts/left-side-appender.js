export function leftSideAppender(parent, itemName, imgName, src, infoName, textName, amount){
    let count = 0
    while (count < amount){
        const item = document.createElement("div")
        item.className = `${itemName}`
    
        const img = document.createElement("img")
        img.className = `${imgName}`
        img.src = `${src}`
        item.appendChild(img)
        
        const text = document.createElement("div")
        text.className = `${textName}`
    
        const info = document.createElement("div")
        info.classList.add(`${infoName}`)
        info.classList.add("hidden")

        info.appendChild(text)
        item.appendChild(info)
    
        parent.appendChild(item)

        count += 1
    }
}