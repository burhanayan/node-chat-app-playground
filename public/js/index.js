var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New Message', message);
});

socket.emit('createMessage', {
    from: 'Ahmet',
    text: 'Hi!'
}, function (data) {
    console.log('Got it!', data);
});