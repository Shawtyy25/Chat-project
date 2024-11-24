export function responsibility(){
    const media1200px = matchMedia("(max-width: 1200px)")
    mediumScreen(media1200px)
    media1200px.addEventListener("change", mediumScreen)
}

function mediumScreen(width){
    const leftSide = document.querySelector(".left-side")
    const middle = document.querySelector(".middle")

    if (width.matches){
        console.log("cica")
        leftSide.style.position = "absolute"
        leftSide.style.left = "0rem"
        leftSide.style.zIndex = "50000"
       
        
      
        

        const breakpoint = document.querySelector(".breakpoint")
        breakpoint.addEventListener("click", () =>{
            leftSide.style.left = "-5rem"
        })
        
    } else{
        console.log("asd");
        leftSide.style.position = ""
        leftSide.style.left = ""
    }
}

