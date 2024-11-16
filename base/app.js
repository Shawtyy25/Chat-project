import { getValue } from "./scripts/get-login-value.js";
import { runLogOut } from "./scripts/log-out.js";
import { sendToUser } from "./scripts/private-message.js";
import { messageReceiver } from "./scripts/send-message.js";
import { sendValue } from "./scripts/user-login.js";
import { leftSideAppender } from "./scripts/left-side-appender.js"
import { listSelect } from "./scripts/channel-text.js"
import { channelImgEvent } from "./scripts/channel-img-event.js"
import { profileSettingsAdjustal } from "./scripts/profile-settings-adjustal.js"
import { channelMiddleAdjustal } from "./scripts/channel-middle-adjustal.js"
import { Themes } from "./scripts/login.js";
// import { appearanceChecker } from "./scripts/appearance-mode.js" 

const channels = document.querySelector(".channels")
var src = "./sleeping.png"

leftSideAppender(channels, "channel-item", "channel-img", src, "channel-info", "channel-text", 5)

const channelInfo = document.querySelectorAll(".channel-info")
const channelImg = document.querySelectorAll(".channel-img")
const channelNames = ["1v1 chatroom", "macska", "kutya"]
const channelText = document.querySelectorAll(".channel-text")




let socket;

Themes();

const login = document.getElementById('login');
const user = document.getElementById('user');
const main = document.querySelector('main')
const loginWindow = document.querySelector('.wrapper')
const emptyError = document.getElementById('empty-error')
const loginError = document.getElementById('login-error')

listSelect(channelImg, channelNames, channelText, channelInfo)


channelImgEvent()


profileSettingsAdjustal()

channelMiddleAdjustal()

user.addEventListener('input', () => {
    emptyError.style.display = 'none'
    loginError.style.display = 'none'
    user.classList.remove('inputError')
})

login.addEventListener('click', () => {
    if (user.value) {
        socket = io()
        sendValue(socket, user.value)
        getValue(socket)

        messageReceiver(socket)

        runLogOut(socket)


        sendToUser(socket)

    } else {
        emptyError.style.display = 'block'
        user.classList.add('inputError')   
    }

})

// appearanceChecker()