const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newEmail', {
        from: 'burhan@example.com',
        text: 'Hey. What is going on?',
        createAt: 123
    });

    socket.emit('newMessage', {
        from: 'AT&T',
        text: 'You do not have any credit!',
        createdAt: 1234
    });

    socket.on('createMessage', (createdMessage) => {
        console.log('Created Message', createdMessage);
    })

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected from server(from server.js)');
    })
});

server.listen(port, function () {
    console.log(`App listening on port ${port}`);
});