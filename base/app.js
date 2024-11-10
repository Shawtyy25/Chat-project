import { sendMessage } from "./scripts/send-message.js";
import { appendUserToDiv } from "./scripts/users-append.js";
import { teszt, usersResponse } from "./scripts/log-out.js";

let socket;

const login = document.getElementById('login');
const user = document.getElementById('user');
const logout = document.getElementById('logout');

login.addEventListener('click', () => {
    if (user.value) {
        socket = io();  
        
        
        socket.on('connect', () => {
            appendUserToDiv(socket);  
            sendMessage(socket);      
            
            usersResponse(socket);    
        });
        
    }
});

logout.addEventListener('click', () => {
    if (socket && socket.connected) {
        usersResponse(socket);  
        teszt(socket);          
    }
});

