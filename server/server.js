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

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app',
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined'
    });

    socket.on('createMessage', (createdMessage) => {
        console.log('Created Message', createdMessage);
        io.emit('newMessage', {
            from: createdMessage.from,
            text: createdMessage.text,
            createAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage', {
        //     from: createdMessage.from,
        //     text: createdMessage.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected from server(from server.js)');
    });
});

server.listen(port, function () {
    console.log(`App listening on port ${port}`);
});