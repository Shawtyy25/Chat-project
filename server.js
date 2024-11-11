const express = require('express')
const { Server } = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const bodyParser = require('body-parser')

app.use(express.static('base'))
app.use(bodyParser.json())
const users = []




io.on('connection', (socket) => {
    let userExists = false

    socket.on('newUserConnected', (loginUser) => {
        const user = {}
        socket.user = loginUser
        user.user = loginUser
        user.id = socket.id
        

        if (users.length === 0) {
            users.push(user)
            console.log(`Új felhasználó csatlakozott: ${socket.user} (id: ${socket.id})`);
            userExists = false

            io.to(socket.id).emit('userJoined', {ifExist: userExists, ownSocket: socket.id, users: users})
            socket.broadcast.emit('userJoinedToAll', {users: users})

        } else {
            for (let data of users) {
                if (data.user === user.user) {
                    userExists = true
                    io.emit('userJoined', {ifExist: userExists})
                    break
                    
                }
            }
            if (!userExists) {
                users.push(user)
                userExists = false
                console.log(`Új felhasználó csatlakozott: ${socket.user} (id: ${socket.id})`);

                io.to(socket.id).emit('userJoined', {ifExist: userExists, ownSocket: socket.id, users: users})
                socket.broadcast.emit('userJoinedToAll', {users: users})
            }
        }

        
        
    })


    // user message sending
    socket.on('send-message', (msgData) => {
        io.emit('get-message', { sender: msgData.sender, msg: msgData.msg })
    })


    // user logout
    socket.on('logout', (logout) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].user === logout.user) {
                users.splice(i, 1)
                break
            }
        }

        socket.broadcast.emit('user-left', {user: logout.user})
    }) 

    /* socket.on('disconnect', () => {
        console.log(`Kliens lecsatlakozott: ${socket.id} (felhasználónév: ${socket.user})`);

        for (let i = 0; i < users.length; i++) {
            if (users[i].user === socket.user) {
                users.splice(i, 1);
                break;
            }
        }
    }) */

})



const PORT = process.env.PORT || 3300
server.listen(PORT, () => {
    console.log(`A szerver fut a http://localhost:${PORT} címen`);
})
