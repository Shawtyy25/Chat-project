export function profileSettingsAdjustal(){
    const profilePic = document.querySelector(".profile-pic")
    const profileSettings = document.querySelector(".profile-settings")
    const exit = document.querySelector(".exit")

    profilePic.addEventListener("click", () =>{
        profileSettings.classList.remove("profile-backwards")
        profileSettings.classList.remove("hidden")
        
        profileSettings.classList.add("profile-forwards")
        profileSettings.addEventListener("animationend", () =>{
            profileSettings.classList.add("active-bk")
            profileSettings.classList.remove("hidden")
        })
    })

    exit.addEventListener("click", () =>{
        profileSettings.classList.remove("profile-forwards")
        profileSettings.classList.add("profile-backwards")
        profileSettings.addEventListener("animationend", () =>{
            profileSettings.classList.add("hidden")
            profileSettings.classList.remove("active-bk")  
        })
    })
}