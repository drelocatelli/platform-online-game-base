import Player from '@core/scripts/player/player';
import PlayerSocket from './player';
import { Socket } from 'socket.io-client';
import Konva from 'konva';
import useGlobalState from '@core/store/global';

function Create(this: PlayerSocket, user: any, socket: Socket) {
    const globalState = useGlobalState();
    let layer = new Konva.Layer({ id: `player_${socket.id}` });
    this.create(new Player({ id: user.id, color: user.color, socketId: socket.id, layer }));
    globalState.addLayer(layer);
}

export default Create;
