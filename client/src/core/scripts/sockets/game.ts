import socket from '@core/server';

class GameSocket {
    constructor() {
        this.start();
    }

    start() {
        socket.on('game_started', () => socket.emit('game_started'));
    }
}

export default GameSocket;
