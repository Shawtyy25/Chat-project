const express = require('express')
const { Server } = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static('base'))

io.on('connection', (socket) => {
    console.log('Csatlakozott egy felhasználó!');
    
    socket.on('message', (msg) => {
        io.emit('message', (msg))
    })

    socket.on('disconnect', () => {
        console.log('Egy felhasználó lecsatlakozott');
    })
})


const PORT = process.env.PORT || 3300
server.listen(PORT, () => {
    console.log(`A szerver fut a http://localhost:${PORT} címen`);
})
