import { getValue } from "./scripts/get-login-value.js";
import { sendValue } from "./scripts/user-login.js";

let socket;

const login = document.getElementById('login');
const user = document.getElementById('user');
const logout = document.getElementById('logout');

login.addEventListener('click', () => {
    if (user.value) {
        socket = io()

        sendValue(socket, user.value)
        
        getValue(socket)
    }
})
