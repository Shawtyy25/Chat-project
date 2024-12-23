export function profileSettingsAdjustal(){
    const profilePic = document.querySelector(".profile-pic")
    const profileSettings = document.querySelector(".profile-settings")
    const profileSettingsContent = document.querySelector(".profile-settings-content")
    const exit = document.querySelector(".exit")

    profilePic.addEventListener("click", () =>{
        profileSettings.classList.remove("profile-backwards")
        profileSettings.classList.remove("hidden")
        
        profileSettings.classList.add("profile-forwards")
        profileSettings.addEventListener("animationend", () =>{
            profileSettings.classList.add("active-fx")
            profileSettings.classList.remove("hidden")
            
            profileSettingsContent.classList.remove("op-hidden")
            profileSettingsContent.classList.add("op-backwards")
        })
    })

    exit.addEventListener("click", () =>{
        profileSettingsContent.classList.remove("op-backwards")
        profileSettingsContent.classList.add("op-hidden")

        profileSettings.classList.remove("profile-forwards")
        profileSettings.classList.add("profile-backwards")
        profileSettings.addEventListener("animationend", () =>{
            profileSettings.classList.add("hidden")
            profileSettings.classList.remove("active-fx")
            
            profileSettingsContent.classList.add("op-hidden")
            profileSettingsContent.classList.remove("op-backwards")
        })
    })
}