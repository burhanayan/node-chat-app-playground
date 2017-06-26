var expect = require('expect');

var {
    generateMessage,
    generateLocationMessage
} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'burhan';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var lat = '1';
        var lon = '1';
        var message = generateLocationMessage(
            'test-user',
            lat,
            lon
        );

        expect(message.url).toBe('https://maps.google.com/?ll=1,1');
    });
});