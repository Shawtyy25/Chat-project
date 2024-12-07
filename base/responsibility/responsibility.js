import { classListAdjustal } from "../functions/class-adjustal.js"
import { userlistAdjustal } from "../scripts/userlist-adjustal.js"

export function responsibility(){
    const media1200px = matchMedia("(max-width: 1200px)")
    mediumScreen(media1200px)
    media1200px.addEventListener("change", mediumScreen)

    const media800px = matchMedia("(max-width: 800px)")
    smallScreen(media800px)
    media800px.addEventListener("change", smallScreen)

    userAdjustal(media800px)
    media800px.addEventListener("change", userAdjustal)
}

function userAdjustal(width){
    const chat = document.querySelector("#chat")
    if (width.matches && chat.classList.contains("op-active")){
        channelImgAdjustal()
        userlistAdjustal()
    } else{
        const rightSide = document.querySelector(".right-side")
        rightSide.classList.remove("rs-active")
    }
}

function mediumScreen(width){
    const leftSide = document.querySelector(".left-side")
    
    let toggle = false

    if (width.matches){
        leftSide.classList.add("ls-break")
        
        const breakpoint = document.querySelector(".breakpoint")
        breakpoint.addEventListener("click", () =>{
            if (toggle === false){
                classListAdjustal(leftSide, "ls-backwards", "ls-forwards")
                toggle = true
            } else{
                classListAdjustal(leftSide, "ls-forwards", "ls-backwards")
                toggle = false
            }
        })

        breakpoint.addEventListener("mouseover", () =>{
            classListAdjustal(breakpoint, "fa-bars", "fa-bars-staggered")
        })

        breakpoint.addEventListener("mouseout", () =>{
            classListAdjustal(breakpoint, "fa-bars-staggered", "fa-bars")
        })
        
    } else{
        leftSide.classList.remove("ls-break")
        leftSide.classList.remove("ls-forwards")
        leftSide.classList.remove("ls-backwards")
    }
}

function smallScreen(width){ 
    if (width.matches){
        const leftSide = document.querySelector(".left-side")
        classListAdjustal(leftSide, "ls-backwards", "ls-forwards")

        let toggle = false

        const breakpoint = document.querySelector(".breakpoint")
        breakpoint.addEventListener("click", () =>{
            if (toggle === false){
                classListAdjustal(leftSide, "ls-forwards", "ls-backwards")
                toggle = true
            } else{
                classListAdjustal(leftSide, "ls-backwards", "ls-forwards")
                toggle = false
            }
        })

       
        const rightSide = document.querySelector(".right-side")
        rightSide.classList.add("rs-break")
        
        const channelItem = document.querySelectorAll(".channel-item")
        channelItem.forEach((element) =>{
            element.addEventListener("click", channelImgAdjustal)
        })

        const leftIcon = document.querySelector(".left-icon")
        leftIcon.addEventListener("click", leftIconAdjustal)

    } else{
        const rightSide = document.querySelector(".right-side")
        rightSide.classList.remove("rs-break")
      
        const channelItem = document.querySelectorAll(".channel-item")
        channelItem.forEach((element) =>{
            element.removeEventListener("click", channelImgAdjustal)
        })

        const leftIcon = document.querySelector(".left-icon")
        leftIcon.removeEventListener("click", leftIconAdjustal)

        const userlist = document.querySelector(".user-list")
        userlist.classList.remove("users-active")
    }
}

function channelImgAdjustal(){
    const userlist = document.querySelector(".user-list")
    userlist.classList.add("users-active")
}

function leftIconAdjustal(){
    const userlist = document.querySelector(".user-list")
    userlist.classList.remove("users-active")
}