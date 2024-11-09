import { sendMessage } from "./scripts/send-message.js";


const login = document.getElementById('login')

login.addEventListener('click', () => {
    const socket = io()
    sendMessage(socket)
})


