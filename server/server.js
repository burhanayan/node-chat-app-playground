const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {
    generateMessage,
    generateLocationMessage
} = require('./utils/message');
const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (createdMessage, callback) => {
        console.log('Created Message', createdMessage);
        io.emit('newMessage', generateMessage(createdMessage.from, createdMessage.text));
        callback('This is from the server');

        socket.on('createLocationMessage', (coords) => {
            io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
        });

    });

    socket.on('disconnect', () => {
        console.log('User disconnected from server(from server.js)');
    });
});

server.listen(port, function () {
    console.log(`App listening on port ${port}`);
});