import { sendMessage } from "./scripts/send-message.js";
import { appendUserToDiv } from "./scripts/users-append.js";


const login = document.getElementById('login')
const user = document.getElementById('user')

login.addEventListener('click', () => {
    if (user.value) {
        const socket = io()
        appendUserToDiv(socket)
        sendMessage(socket)
    }
})
