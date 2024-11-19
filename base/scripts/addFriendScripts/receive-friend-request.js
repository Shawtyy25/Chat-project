function receiveFriendRequest(socket) {
    // template ===>
    /*
        <div class="fRequest">
            <p>NAME EXAMPLE sent you a friend request</p>
            <div class="frButtons">
                <button type="button" class="decline">Decline</button>
                <button type="button" class="accept">Accept</button>
            </div>
        </div>
    */

    socket.on('receiveFR', (data) => {
        const frDiv = document.getElementById('friendRequests')


        const fr = document.createElement('div')
        const user = document.createElement('p')
        const buttonsDiv = document.createElement('div')
        const decline = document.createElement('button')
        const accept = document.createElement('button')

        fr.classList.add('fRequest')
        fr.classList.add(data.sender)

        user.innerText = `${data.sender} sent you a friend request`

        buttonsDiv.classList.add('frButtons')

        decline.classList.add('decline')
        decline.type = 'button'
        decline.innerText = 'Decline'

        accept.classList.add('accept')
        accept.type = 'button'
        accept.innerText = 'Accept'

        
        buttonsDiv.appendChild(decline)
        buttonsDiv.appendChild(accept)

        fr.appendChild(user)
        fr.appendChild(buttonsDiv)

        frDiv.appendChild(fr)
    })
}


export { receiveFriendRequest }