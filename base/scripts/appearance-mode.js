import { classListAdjustal } from "../functions/class-adjustal.js"

export function appearanceChecker(){
    const themeToggler = document.querySelector("#darkmode-toggle")
    const switcher = document.querySelector("#sw-2") 
   
    if (themeToggler.checked){
        switcher.checked = true
        darkMode()

        switcher.addEventListener("change", () =>{
            if (switcher.checked){
                themeToggler.checked = true
                darkMode()
            }

            else if (!switcher.checked){
                themeToggler.checked = false
                lightMode()
            }
        })
    }

    if (!themeToggler.checked){
        switcher.checked = false
        lightMode()

        switcher.addEventListener("change", () =>{
            if (switcher.checked){
                themeToggler.checked = true
                darkMode()
            }

            else if (!switcher.checked){
                themeToggler.checked = false
                lightMode()
            }
        })
    }
   

    themeToggler.addEventListener("change", () =>{
        if (themeToggler.checked){
            switcher.checked = true
            darkMode()
        }

        else if (!themeToggler.checked){
            switcher.checked = false
            lightMode()
        }

        switcher.addEventListener("change", () =>{
            if (switcher.checked){
                themeToggler.checked = true
                darkMode()
            }

            else if (!switcher.checked){
                themeToggler.checked = false
                lightMode()
            }
        })
    })
}


function darkMode(){
    const leftSide = document.querySelector(".left-side")
    const rightSide = document.querySelector(".right-side")
    const middle = document.querySelector(".middle")
    const introduction = document.querySelector(".introduction")
    const middleInput = document.querySelector(".middle-input")
    const chatbox = document.querySelector("#chatbox")
    const top = document.querySelector(".top")
    const profile = document.querySelector(".profile")
    const channelInfo = document.querySelector(".channel-info")
    const logout = document.querySelector("#logout")
    const profilesettings = document.querySelector(".profile-settings")
    const settingsScroll = document.querySelector(".settings-scroll")
    const settingsContent = document.querySelector(".settings-content")
    const friendsDiv = document.querySelector(".friends-div")
    const friendsButtons = document.querySelectorAll(".friendsTabSwitcher button")

    classListAdjustal(leftSide, "side-light", "side-dark")
    classListAdjustal(rightSide, "side-light", "side-dark")
    classListAdjustal(middle, "main-light", "main-dark")
    classListAdjustal(introduction, "side-light", "side-dark")
    classListAdjustal(chatbox, "side-light", "side-dark")
    classListAdjustal(middleInput, "side-light", "side-dark")
    classListAdjustal(top, "top-light", "top-dark")
    classListAdjustal(profilesettings, "top-light", "top-dark")
    classListAdjustal(profile, "channel-light", "channel-dark")
    classListAdjustal(channelInfo, "channel-light", "channel-dark")
    classListAdjustal(logout, "logout-light", "logout-dark")
    classListAdjustal(settingsScroll, "top-light", "top-dark")
    classListAdjustal(settingsContent, "side-light", "side-dark")
    classListAdjustal(friendsDiv, "side-light", "side-dark")
    friendsButtons.forEach((element) =>{
        classListAdjustal(element, "main-light", "main-dark")
    })
}

function lightMode(){
    const leftSide = document.querySelector(".left-side")
    const rightSide = document.querySelector(".right-side")
    const middle = document.querySelector(".middle")
    const introduction = document.querySelector(".introduction")
    const middleInput = document.querySelector(".middle-input")
    const chatbox = document.querySelector("#chatbox")
    const top = document.querySelector(".top")
    const profile = document.querySelector(".profile")
    const channelInfo = document.querySelector(".channel-info")
    const logout = document.querySelector("#logout")
    const profilesettings = document.querySelector(".profile-settings")
    const settingsScroll = document.querySelector(".settings-scroll")
    const settingsContent = document.querySelector(".settings-content")
    const friendsDiv = document.querySelector(".friends-div")
    const friendsButtons = document.querySelectorAll(".friendsTabSwitcher button")

    classListAdjustal(leftSide, "side-dark", "side-light")
    classListAdjustal(rightSide, "side-dark", "side-light")
    classListAdjustal(middle, "main-dark", "main-light")
    classListAdjustal(introduction, "side-dark", "side-light")
    classListAdjustal(chatbox, "side-dark", "side-light")
    classListAdjustal(middleInput, "side-dark", "side-light")
    classListAdjustal(top, "top-dark", "top-light")
    classListAdjustal(profilesettings, "top-dark", "top-light")
    classListAdjustal(profile, "channel-dark", "channel-light")
    classListAdjustal(channelInfo, "channel-dark", "channel-light")
    classListAdjustal(logout, "logout-dark", "logout-light")
    classListAdjustal(settingsScroll, "top-dark", "top-light")
    classListAdjustal(settingsContent, "side-dark", "side-light")
    classListAdjustal(friendsDiv, "side-dark", "side-light")
    friendsButtons.forEach((element) =>{
        classListAdjustal(element, "main-dark", "main-light")
    })
}