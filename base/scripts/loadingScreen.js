
export function loadingScreen(socket){
    
    const progressFill = document.querySelector(".progress-fill");
    const loadingText = document.querySelector(".loading-text");
    const wrapper = document.querySelector('.loadingScreenWrapper')
    const main = document.querySelector('main')
    const input = document.querySelector('#user')

    socket.on('userJoined',(username)=>{
        if(!username.ifExist){
            wrapper.style.display = 'flex'
            progressFill.classList.add("start");
            loadingText.classList.add("show");
        
            console.log(username);

            progressFill.addEventListener("animationend", function() {
                progressFill.classList.add("complete"); 
                wrapper.classList.remove('loadingScreenWrapper')
                wrapper.style.display = 'none'
                main.classList.remove('hidden')
                main.style.display = 'block'
            });
        }
    })


        

            
}