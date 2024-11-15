import { getValue } from "./scripts/get-login-value.js";
import { runLogOut } from "./scripts/log-out.js";
import { sendToUser } from "./scripts/private-message.js";
import { messageReceiver } from "./scripts/send-message.js";
import { sendValue } from "./scripts/user-login.js";
import { Themes } from "./scripts/login.js";

let socket;

Themes();

const login = document.getElementById('login');
const user = document.getElementById('user');
const users = document.getElementById('users')
const main = document.querySelector('main')
const loginWindow = document.querySelector('.wrapper')


login.addEventListener('click', () => {
    if (user.value) {
        socket = io()
        main.style.display = 'block'
        loginWindow.style.display = 'none'
        sendValue(socket, user.value)
        getValue(socket)

        messageReceiver(socket)

        runLogOut(socket)
        
        
        sendToUser(socket)        
        
        
    }

})















