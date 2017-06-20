var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');

    socket.emit('createEmail', {
        to: 'bahar@example.com',
        text: 'Hey. This is Bahar.'
    });

    socket.on('newMessage', function (message) {
        console.log('New Message', message);
    });

    socket.emit('createMessage', {
        from: 'V For Vendetta',
        text: 'Remember remember...(message created)'
    })
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
    console.log('New email', email);
})