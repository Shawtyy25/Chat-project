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

const channels = document.querySelector(".channels")
var src = "https://cdn.discordapp.com/attachments/1106712720742568006/1304856650032746588/image.png?ex=6730e9f4&is=672f9874&hm=06ec4b25889dd73081776a2d159c9ce5b5e1570e2fbab324533683bcebdd4c98&"
import { leftSideAppender } from "./scripts/left-side-appender.js"
leftSideAppender(channels, "channel-item", "channel-img", src, "channel-info", "channel-text", 5)

const channelInfo = document.querySelectorAll(".channel-info")
const channelImg = document.querySelectorAll(".channel-img")
const channelNames = [ "1v1 chatroom", "macska", "kutya" ]
const channelText = document.querySelectorAll(".channel-text")
import { listSelect } from "./scripts/channel-text.js"
listSelect(channelImg, channelNames, channelText, channelInfo)

import { channelImgEvent } from "./scripts/channel-img-event.js"
channelImgEvent()

import { profileSettingsAdjustal } from "./scripts/profile-settings-adjustal.js"
profileSettingsAdjustal()

import { channelMiddleAdjustal } from "./scripts/channel-middle-adjustal.js"
channelMiddleAdjustal()

import { appearanceChecker } from "./scripts/appearance-mode.js" 
appearanceChecker()


