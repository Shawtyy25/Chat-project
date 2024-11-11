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
let userExists



io.on('connection', (socket) => {

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

    

    /* socket.on('newuser', (profile) => {

        const user = {}
        socket['user'] = profile
        user['name'] = profile
        user['socketID'] = socket.id
        let userExists = false

        if (users.length === 0) {
            users.push(user)
            console.log(users);
        } else {
            

            for (let data of users) {
                if (data['name'] === user['name']) {
                    userExists = true // mi van ha egyezés van?
                    break
                }
            }
            if (!userExists) {
                users.push(user)
                console.log(users);
            }
        }

        socket.broadcast.emit('appenduser', {users: users, data: userExists})
    })

    socket.on('message', (data) => {
        io.emit('message', data)
    })


    socket.on('logout', () => {
        console.log(`Felhasználó kijelentkezett: ${socket} (Socket ID: ${socket.id})`);
        for (let i = 0; i < users.length; i++) {
            if (users[i].profile === socket['user']) {
                users.splice(i, 1)
                break
            }
        }
        socket.broadcast.emit('b-message', users)
    }) */

    /* socket.on('disconnect', () => {
        console.log(`Kliens lecsatlakozott: ${socket.id} (felhasználónév: ${socket['user']})`);

        for (let i = 0; i < users.length; i++) {
            if (users[i].name === socket['user']) {
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
