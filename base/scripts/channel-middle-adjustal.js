import { appearanceChecker } from "./appearance-mode.js" 
// import { rightSideAppear } from "./right-side-appear.js"
import { emojiRandomizer } from "./emoji-randomizer.js"


export function channelMiddleAdjustal(){
   
    const midContentInformation = 
        `
        <div class="introduction">
            <img src="./sleeping.png" alt="">
            <h1>Nothing new to see...</h1>
            <h4>zZzZzZ</h4>
        </div>
        `


    const midContent = 
        `
        <div class="container middle-content">
                <div class="container middle-text">

                </div>

               <div class="middle-input-parent">
                    <div class="middle-input">
                        <div class="middle-input-keyboard">
                            <div class="middle-input-keyboard-emoji">
                                <i class="fa-solid fa-keyboard send-msg-emoji"></i>
                            </div>
                            <input type="text" id="send-msg">
                        </div>
                        <div class="middle-input-emoji">
                            <i class="fa-solid fa-paper-plane send-msg-emoji"></i>
                            <i class="fa-solid send-msg-emoji"></i>
                        </div>
                    </div>
               </div>
            </div>
        `
        
    let toggle = false
    const rightSide = document.querySelector(".right-side")
    const middle = document.querySelector(".middle")
    const leftIcon = document.querySelector(".left-icon")
   
    middle.innerHTML = midContentInformation
    leftIcon.addEventListener("click", () =>{
        middle.innerHTML = ""
        middle.innerHTML = midContentInformation
        rightSide.classList.remove("right-side-forwards")
        toggle = false
        appearanceChecker()
    })
    
 
    const channelImg = document.querySelectorAll(".channel-img")
    for (let index = 0; index < channelImg.length; index++){
        channelImg[index].addEventListener("click", () =>{  
            if (toggle === false){
                middle.innerHTML = ""
                middle.innerHTML = midContent
                emojiRandomizer()

                const middleInputParent = document.querySelector(".middle-input-parent")
                middleInputParent.classList.add("input-down")

                rightSide.classList.add("right-side-forwards")
                rightSide.addEventListener("animationend", () =>{
                    middleInputParent.classList.add("input-forwards")
                    middleInputParent.classList.remove("input-down")
                    toggle = true
                })
            } else{
                const middleInputParent = document.querySelector(".middle-input-parent")
                middleInputParent.classList.remove("input-down")
            }
        })
    }
}