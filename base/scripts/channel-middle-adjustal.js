import { emojiRandomizer } from "./emoji-randomizer.js"

export function channelMiddleAdjustal(){
    const midContentInformation = 
        `
        <div class="introduction-parent">
            <div class="introduction">
                <img src="./sleeping.png" alt="sleeping" class="introduction-img">
                <h1>Nothing new to see...</h1>
                <h4>zZzZzZ</h4>
            </div>
        </div>
        `


    const midContent = 
        `
        <div class="container middle-content">
                <div class="container middle-text" id="chat">
                   
                </div>

               <div class="middle-input-parent">
                    <div class="middle-input">
                        <div class="middle-input-keyboard">
                            <div class="middle-input-keyboard-emoji">
                                <i class="fa-solid fa-keyboard send-msg-emoji"></i>
                            </div>
                            <div id="prvtUser"></div>
                            <input type="text" id="chatbox">
                        </div>
                        <div class="middle-input-emoji">
                            <i class="fa-solid fa-paper-plane send-msg-emoji" id="send-msg"></i>
                            <i class="fa-solid send-msg-emoji"></i>
                        </div>
                    </div>
               </div>
            </div>
        `

    const rightSideContent = 
        `
            <div class="users-div" id="users">
                
            </div>
            <button type="button" id="logout">log out</button>
        `

    let toggle = false
    const rightSide = document.querySelector(".right-side")
    const middle = document.querySelector(".middle")
    const leftIcon = document.querySelector(".left-icon")
   
    middle.innerHTML += midContentInformation
    middle.innerHTML += midContent
    rightSide.innerHTML += rightSideContent

    const middleInputParent = document.querySelector(".middle-input-parent")
    middleInputParent.classList.remove("input-forwards")
    middleInputParent.classList.add("input-down")
    emojiRandomizer()

    const users = document.querySelector("#users")
    const logout = document.querySelector("#logout")
    users.classList.add("hidden")
    logout.classList.add("hidden")
    
    const introductionParent = document.querySelector(".introduction-parent")
    introductionParent.classList.remove("hidden")
    introductionParent.classList.add("active-fx")

    const middleText = document.querySelector("#chat")
    middleText.classList.remove("op-active")
    middleText.classList.add("op-hidden")

    leftIcon.addEventListener("click", () =>{
        middleText.classList.remove("op-active")
        middleText.classList.add("op-hidden")

        middleInputParent.classList.remove("input-forwards")
        middleInputParent.classList.add("input-down")

        rightSide.classList.remove("right-side-forwards")

        users.classList.add("hidden")
        logout.classList.add("hidden")

        introductionParent.classList.remove("hidden")
        introductionParent.classList.add("active-fx")
        toggle = false
    })
    
 
    const channelImg = document.querySelectorAll(".channel-img")
    for (let index = 0; index < channelImg.length; index++){
        channelImg[index].addEventListener("click", () =>{
            if (toggle === false){
                introductionParent.classList.remove("active-fx")
                introductionParent.classList.add("hidden")

                middleInputParent.classList.add("input-down")
                
                rightSide.classList.add("right-side-forwards")
                rightSide.addEventListener("animationend", () =>{
                    middleInputParent.classList.add("input-forwards")
                    middleInputParent.classList.remove("input-down")

                    middleInputParent.addEventListener("animationend", () =>{
                        users.classList.remove("hidden")
                        logout.classList.remove("hidden")

                        users.classList.add("active-bk")
                        logout.classList.add("active-bk")

                        middleText.classList.remove("op-hidden")
                        middleText.classList.add("op-active")
                    })
                    toggle = true
                })
            } else{
                middleInputParent.classList.remove("input-down")
            }
        })
    }
}