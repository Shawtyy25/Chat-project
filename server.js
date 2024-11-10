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

app.post('/', (req, res) => {
    const id = req.body.requestType

    if (id == 'userdata') {
        const user = {}
        user['name'] = req.body.username

        if (users.length == 0) {
            users.push(user)
            res.send([users, user])
        } else {
            let userExists = false;

            for (let data of users) {
                if (data['name'] === user['name']) {
                    userExists = true;
                    res.send(false);
                    break;
                }
            }

            if (!userExists) {
                users.push(user);
                res.send([users, user]);
            }
        }

    }
})



io.on('connection', (socket) => {

    socket.on('newuser', (profile) => {
        socket.userName = profile
        console.log(`Felhasználó bejelentkezett: ${profile} (Socket ID: ${socket.id})`);

        socket.broadcast.emit('appenduser', profile)
    })

    socket.on('message', (data) => {
        io.emit('message', data)
    })


    socket.on('logout', () => {
        console.log(`Felhasználó kijelentkezett: ${socket.userName} (Socket ID: ${socket.id})`);
        for (let i = 0; i < users.length; i++) {
            if (users[i].profile === socket.userName) {
                users.splice(i, 1)
                break
            }
        }
        socket.broadcast.emit('b-message', users)
    })

    socket.on('disconnect', () => {
        console.log(`Kliens lecsatlakozott: ${socket.id} (felhasználónév: ${socket.userName})`);

        for (let i = 0; i < users.length; i++) {
            if (users[i].name === socket.userName) {
                users.splice(i, 1);
                break;
            }
        }
    })

})




const PORT = process.env.PORT || 3300
server.listen(PORT, () => {
    console.log(`A szerver fut a http://localhost:${PORT} címen`);
})
