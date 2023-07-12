const { globals } = require('./constants');

class GameSocket {
    constructor(socket) {
        this.socket = socket;

        socket.on('game_started', () => {
            console.log('login');
        });
    }
}

module.exports = GameSocket;
