import socket from '@core/server';
import PlayerSocket from './player';
import Create from './create';

interface ILogin {
    id: string;
    ip: string;
    users: {
        id: string;
        color: string;
    }[];
}

function Connection(this: PlayerSocket) {
    console.log(socket);
    socket.on('login', (e: ILogin) => {
        console.log(`%c Joined to game: ${e.id}/${e.ip}`, 'background:green; color:white; font-size:18px;');
        e.users.forEach((user: any) => Create.bind(this)(user, socket));
    });
    socket.on('logout', (e: { id: string }) => {
        console.log(`%c Exited from game: ${e.id}`, 'background:red; color:white; font-size:18px;');
        this.remove(e.id);
    });
}

export default Connection;
