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

    const container = document.querySelector(".content")

    const leftSide = document.querySelector(".left-side")
    const rightSide = document.querySelector(".right-side")
    
    const themeItems = [ container ]
    const themeColors = [ "dark-theme", "light-theme" ]
    handleAppearanceModeLight(themeItems, themeColors)

    const sides = [leftSide, rightSide]
    const sidesColors = [ "side-dark", "side-light" ]
    handleAppearanceModeLight(sides, sidesColors)

    appearanceInput.addEventListener("change", () =>{
        if (appearanceInput.checked) {
           handleAppearanceModeDark(themeItems, themeColors)
           handleAppearanceModeDark(sides, sidesColors)
        } else{
           handleAppearanceModeLight(themeItems, themeColors)
           handleAppearanceModeLight(sides, sidesColors)
        }
    })
}
