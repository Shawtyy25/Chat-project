export function appearanceButton(){
    const switchBtn = document.querySelector(".switch")
    const slider = document.querySelector(".slider")
    const clouds = document.querySelectorAll(".cloud")
    const hills = document.querySelectorAll(".hill")
    const circles = document.querySelectorAll(".circle")
    const stars = document.querySelectorAll(".star")
    let toggle = false
    
    slider.style.boxShadow = "0px 0px 5px rgb(245, 242, 50)"

    circles.forEach((element) =>{
        element.classList.add("op-hidden")
    })

    hills[0].classList.add("op-hidden")

    stars.forEach((element) =>{
        element.classList.add("op-hidden")
    })

    switchBtn.addEventListener("click", () =>{
        if (toggle === false){
            switchBtn.classList.remove("themeLight")
            switchBtn.classList.add("themeDark")
            slider.style.boxShadow = "0px 0px 5px rgb(255, 255, 255)"
            slider.style.transform = "translateX(56px)"
            slider.style.background = "rgb(230, 230, 230)"
            
            clouds.forEach((element) =>{
                element.classList.add("op-forwards")
                element.addEventListener("animationend", () => {
                    element.classList.add("op-hidden")
                }, { once: true })
            })

            hills[1].classList.remove("op-backwards")
            hills[1].classList.add("op-forwards")
            hills[1].addEventListener("animationend", () =>{
                hills[1].classList.add("op-hidden")
            }, { once: true })

            slider.addEventListener("transitionend", () =>{
                hills[0].classList.remove("op-hidden")
                hills[0].classList.remove("op-forwards")
                hills[0].classList.add("op-backwards")
                hills[0].addEventListener("animationend", () =>{
                    circles.forEach((element) =>{
                        element.classList.remove("op-hidden")
                        element.classList.remove("op-forwards")
                        element.classList.add("op-backwards")
                    })
                }, { once: true })
                stars.forEach((element) =>{
                    element.classList.remove("op-hidden")
                    element.classList.remove("op-forwards")
                    element.classList.add("op-backwards")
                })         
            }, { once: true })

            toggle = true
        } else{
            switchBtn.classList.remove("themeDark")
            switchBtn.classList.add("themeLight")
            switchBtn.style.background = ""
            slider.style.transform = "translateX(0px)"
            slider.style.background = ""

            hills[0].classList.remove("op-backwards")
            hills[0].classList.add("op-forwards")
            hills[0].addEventListener("animationend", () =>{
                hills[0].classList.add("op-hidden")
            }, { once: true })

            slider.addEventListener("transitionend", () =>{
                clouds.forEach((element) =>{
                    element.classList.remove("op-forwards")
                    element.classList.remove("op-hidden")
                    element.classList.add("op-backwards")
                    element.addEventListener("animationend", () =>{
                        hills[1].classList.remove("op-forwards")
                        hills[1].classList.remove("op-hidden")
                        hills[1].addEventListener("animationend", () =>{
                            hills[1].classList.add("op-backwards")
                        }, { once: true })
                    })
                })
                
                circles.forEach((element) =>{
                    element.classList.remove("op-backwards")
                    element.classList.add("op-forwards")
                    element.addEventListener("animationend", () =>{
                        element.classList.add("op-hidden")
                    }, { once: true })
                })

                stars.forEach((element) =>{
                    element.classList.remove("op-backwards")
                    element.classList.add("op-forwards")
                    element.addEventListener("animationend", () =>{
                        element.classList.add("op-hidden")
                    }, { once: true })
                })
            }, { once: true })
           
            toggle = false
        }
    })
}