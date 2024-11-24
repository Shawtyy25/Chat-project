export function appearanceButton(){
    const switchBtn = document.querySelector(".switch")
    const slider = document.querySelector(".slider")
    const clouds = document.querySelectorAll(".cloud")
    const hills = document.querySelectorAll(".hill")
    const circles = document.querySelectorAll(".circle")
    const stars = document.querySelectorAll(".star")
    let toggle = false
    
    slider.classList.add("slider-light")

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
           
            slider.classList.remove("slider-light")
            slider.classList.add("slider-dark")
            
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

            slider.classList.remove("slider-dark")
            slider.classList.add("slider-light")

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