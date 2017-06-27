const expect = require('expect');

const {
    Users
} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Erik',
            room: 'Balcony'
        }, {
            id: '2',
            name: 'Uzum',
            room: 'Kitchen'
        }, {
            id: '3',
            name: 'Bahar',
            room: 'Balcony'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Burhan',
            room: 'Oturma Odasi'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user])
    });

    it('should remove a user', () => {
        var id = '1';
        var user = users.removeUser(id);

        expect(user.id).toBe(id);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var id = '4';
        var user = users.removeUser(id);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var id = '2'

        var user = users.getUser(id);
        expect(user.id).toBe(id);
    });

    it('should not find user', () => {
        var id = '4'

        var user = users.getUser(id);
        expect(user).toNotExist();
    });

    it('should return names for balcony', () => {
        var userList = users.getUserList('Balcony');

        expect(userList).toEqual(['Erik', 'Bahar']);
    });

    it('should return names for kitchen', () => {
        var userList = users.getUserList('Kitchen');

        expect(userList).toEqual(['Uzum']);
    });
});