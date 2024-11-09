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

        var user = {}
        user['name'] = req.body.username
        users.push(user)

        res.send(users)
    }
})


function messageEmitting() {
    io.on('connection', (socket) => {
        console.log('Csatlakozott egy felhasználó!');
        
        socket.on('message', (msg) => {
        io.emit('message', (msg))
    })
        
        socket.on('disconnect', () => {
            console.log('Lecsatlakozott a felhasználó');
        })
    })

}

messageEmitting()


const PORT = process.env.PORT || 3300
server.listen(PORT, () => {
    console.log(`A szerver fut a http://localhost:${PORT} címen`);
})
