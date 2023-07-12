import useGlobalState from '@core/state';
import Service from './service';

class Game {
    constructor() {
        this.disableKeyScrolling();
        window.alert('Please wait while contacting server...');

        Service.sockets.player.listen().connection();
        const globalState = useGlobalState();
        let canvasEl = document.getElementById('canvas') as HTMLDivElement;
        let splashEl = document.getElementById('splash') as HTMLDivElement;
        // if (globalState.game.started) {
        // canvasEl.style.removeProperty('display');
        Service.sockets.player.listen().keyEvents();
        // } else {
        //     canvasEl.style.display = 'none';
        splashEl.style.display = 'none';
        //     Service.sockets.game.prepare();
        // }
    }

    disableKeyScrolling() {
        // disable keys scrolling
        window.addEventListener(
            'keydown',
            function (e) {
                if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyA', 'KeyD'].indexOf(e.code) > -1) {
                    e.preventDefault();
                }
            },
            false,
        );
    }
}

export default Game;
