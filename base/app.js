import { getValue } from "./scripts/get-login-value.js";
import { runLogOut } from "./scripts/log-out.js";
import { sendToUser } from "./scripts/private-message.js";
import { messageReceiver } from "./scripts/send-message.js";
import { sendValue } from "./scripts/user-login.js";



let socket;

const login = document.getElementById('login');
const user = document.getElementById('user');
const users = document.getElementById('users')


login.addEventListener('click', () => {
    if (user.value) {
        socket = io()

        sendValue(socket, user.value)
        getValue(socket)

        messageReceiver(socket)

        runLogOut(socket)
        
        
        sendToUser(socket)        
        
        
    }

})














