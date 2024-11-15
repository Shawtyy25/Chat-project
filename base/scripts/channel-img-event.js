export function channelImgEvent(){
    const channelImg = document.querySelectorAll(".channel-img")
    for (let index = 0; index < channelImg.length; index++) {
        channelImg[index].addEventListener("mouseover", () =>{
            channelImg[index].classList.remove("img-backwards")
            channelImg[index].classList.add("img-forwards")
        })
        
        channelImg[index].addEventListener("mouseout", () =>{
            channelImg[index].classList.remove("img-forwards")
            channelImg[index].classList.add("img-backwards")
        })
    }
}
