export function sideAppender(parent, src, amount, alt, type){
    let count = 0
    while (count < amount){
        const item = document.createElement(`${type}`)

        if (type === "div"){
            item.className = `${alt}`
            parent.appendChild(item)
            
        } else if (type === "img"){
            item.className = `${alt}`
            item.src = `${src}`
            item.alt = `${alt}`
            parent.appendChild(item)
        }

        count += 1
    }
}