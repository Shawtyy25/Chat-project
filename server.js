const express = require('express')
const { Server } = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const bodyParser = require('body-parser')
const { error } = require('console')

app.use(express.static('base'))
app.use(bodyParser.json())
const users = []

app.post('/', (req, res) => {
    const id = req.body.requestType

    if (id == 'userdata') {

        const user = {}
        user['name'] = req.body.username
        users.push(user)

        res.send([users, user])
    }
})



io.on('connection', (socket) => {

    socket.on('message', (msg) => {
        io.emit('message', (msg))
    })

    socket.on('newuser', (profile) => {
        socket.broadcast.emit('appenduser', (profile))
    })

    socket.on('logout', (user) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i]['name'] === user) {
                users.splice(i, 1)
            }
        }
        socket.broadcast.emit('b-message', users)
    })

})




const PORT = process.env.PORT || 3300
server.listen(PORT, () => {
    console.log(`A szerver fut a http://localhost:${PORT} címen`);
})
