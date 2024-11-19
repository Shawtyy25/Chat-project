import { acceptUserFr, declineUserFr } from "./friend-request-functions.js"

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
        if (data.status) {
            const frDiv = document.getElementById('friendRequests')
            const fr = document.createElement('div')
            const fuser = document.createElement('div')
            const user = document.createElement('h5')
            const message = document.createElement('p')
            const buttonsDiv = document.createElement('div')
            const decline = document.createElement('button')
            const accept = document.createElement('button')
    
            fr.classList.add('fRequest')
            fr.classList.add(data.sender)
    
            fuser.classList.add('fUser')

            user.innerText = `${data.sender}`
            message.innerText = 'sent you a friend request'
    
            buttonsDiv.classList.add('frButtons')
    
            decline.classList.add('decline')
            decline.type = 'button'
            decline.innerText = 'Decline'
    
            accept.classList.add('accept')
            accept.type = 'button'
            accept.innerText = 'Accept'
    
            
            buttonsDiv.appendChild(decline)
            buttonsDiv.appendChild(accept)

            fuser.appendChild(user)
            fuser.appendChild(message)

            fr.appendChild(fuser)
            fr.appendChild(buttonsDiv)
    
            frDiv.appendChild(fr)

            acceptUserFr(socket)
            declineUserFr(socket)
            
        } else {
            alert('Éppen függőben van a barátkérelem!')
        }
        
    })
}


export { receiveFriendRequest }