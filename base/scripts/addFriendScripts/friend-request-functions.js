function acceptUserFr(socket) {
    const accept = document.querySelectorAll('.accept')

    accept.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            // todo
        })
    });
}

function declineUserFr() {
    const fr = document.querySelectorAll('.fRequest')
    const decline = document.querySelectorAll('.decline')

    decline.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            // todo

            
        })
    });
}


export { acceptUserFr, declineUserFr }