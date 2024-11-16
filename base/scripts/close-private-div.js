export function hidePrvtDiv() {
    const prvtDiv = document.querySelector('.prvtUserDiv')
    const prvtUser = document.getElementById('prvtUser')
    const closeDiv = document.querySelector('.prvtUserDiv i')

    closeDiv.addEventListener('click', () => {
        prvtDiv.classList.remove('active-fx')
        prvtDiv.classList.add('hidden')
        prvtUser.innerText = ''
    }) 
 
}