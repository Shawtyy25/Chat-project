import { sendMessage } from "./scripts/send-message.js";
import { start } from "./scripts/users-join.js";

const login = document.getElementById('login')

login.addEventListener('click', () => {
    const socket = io()
    start()
    sendMessage(socket)
})


