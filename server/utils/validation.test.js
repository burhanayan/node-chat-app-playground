const expect = require('expect');
var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var paramName = isRealString('');
        var paramRoom = isRealString('');
        expect(paramName).toBe(false);
        expect(paramRoom).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var paramName = isRealString(' ');
        var paramRoom = isRealString('  ');
        expect(paramName).toBe(false);
        expect(paramRoom).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var paramName = isRealString('asd');
        var paramRoom = isRealString('dffss');
        expect(paramName).toBe(true);
        expect(paramRoom).toBe(true);
    });
});