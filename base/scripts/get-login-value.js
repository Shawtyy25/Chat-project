import { addUsers, addOwnUser } from "../functions/add-users.js"
import { loggedInUserOutput } from "../functions/loggedIn-user.js"
import { sendErrorMessage } from "./error-message.js"

export function getValue(socket) {
    const users = document.getElementById('users')
    const loginError = document.getElementById('login-error')


    socket.on('userJoined', (profiles) => {

        if (!profiles.ifExist) { // vizsgálja hogy a megadott felhasználónév foglalt-e
            for (let data of profiles.users) {
                if (data.id === profiles.ownSocket) {
                    addOwnUser(profiles, data) // hozzáadja a saját elemet

                }
            }
            const own = document.querySelector('.own')

            for (let data of profiles.users) {
                if (data.user !== own.innerText) {
                    addUsers(data) // hozzáadja a többi felhasználót kizárva az OWN itemet
                }
            }
        }

    })

    socket.on('userJoinedToAll', (profiles) => {
        const own = document.querySelector('.own')
        

        Array.from(users.children).forEach(child => { // azokat az elemeket törli ami nem OWN 
            if (child !== own) {
                users.removeChild(child)
            }

        });


        for (let data of profiles.users) {
            if (data.user !== own.innerText.trim()) {
                addUsers(data)
            }

           /*  if (data.id === profiles.userID) {
                loggedInUserOutput(data.user) // ha kell a kiírás
            } */
        }

    })
}


