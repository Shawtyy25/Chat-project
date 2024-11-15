function appearanceModeDark(container, darkTheme, lightTheme){
    container.classList.remove(`${lightTheme}`)
    container.classList.add(`${darkTheme}`)
}

function appearanceModeLight(container, darkTheme, lightTheme){
    container.classList.remove(`${darkTheme}`)
    container.classList.add(`${lightTheme}`)
}

function handleAppearanceModeDark(container, colors){
    container.forEach(element => {
        appearanceModeDark(element, colors[0], colors[1])
    })
}

function handleAppearanceModeLight(container, colors){
    container.forEach(element => {
        appearanceModeLight(element, colors[0], colors[1])
    })
}

export function appearanceChecker(){
    const appearanceInput = document.querySelector("#appearance")

    const middle = document.querySelector(".middle")

    const leftSide = document.querySelector(".left-side")
    const rightSide = document.querySelector(".right-side")
    const introduction = document.querySelector(".introduction")
    
    const themeItems = [ middle ]
    const themeColors = [ "dark-theme", "light-theme" ]
    handleAppearanceModeLight(themeItems, themeColors)

    

    const channelInfo = document.querySelectorAll(".channel-info")
    const channelColors = [ "channel-dark", "channel-light" ]
    const profile = document.querySelector(".profile")
    const profiles = [ profile ]
    handleAppearanceModeLight(channelInfo, channelColors)
    handleAppearanceModeLight(profiles, channelColors)

    const sides = [ leftSide, rightSide, introduction ]
    const sidesColors = [ "side-dark", "side-light" ]
    handleAppearanceModeLight(sides, sidesColors)

    appearanceInput.addEventListener("change", () =>{
        if (appearanceInput.checked) {
           handleAppearanceModeDark(themeItems, themeColors)
           handleAppearanceModeDark(sides, sidesColors)
           handleAppearanceModeDark(channelInfo, channelColors)
           handleAppearanceModeDark(profiles, channelColors)
        } else{
           handleAppearanceModeLight(themeItems, themeColors)
           handleAppearanceModeLight(sides, sidesColors)
           handleAppearanceModeLight(channelInfo, channelColors)
           handleAppearanceModeLight(profiles, channelColors)
        }
    })
}

export function appearanceCheckerSender(){
    const appearanceInput = document.querySelector("#appearance")
    const leftSide = document.querySelector(".left-side")
    const rightSide = document.querySelector(".right-side")
    const middleInput = document.querySelector(".middle-input")
    const chatbox = document.querySelector("#chatbox")

    const sides = [ leftSide, rightSide, middleInput, chatbox ]
    const sidesColors = [ "side-dark", "side-light" ]
    handleAppearanceModeLight(sides, sidesColors)

    if (appearanceInput.checked){
        handleAppearanceModeDark(sides, sidesColors)
    } else{
        handleAppearanceModeLight(sides, sidesColors)
    }
}