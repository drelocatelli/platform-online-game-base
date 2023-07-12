import Service from './service';
import Platform from './platform';
import useGlobalState from '@core/store/global';

class Game {
    constructor() {
        console.log('game started');
        this.disableKeyScrolling();
        Service.sockets.player.listen().connection();
        let splashEl = document.getElementById('splash') as HTMLDivElement;
        Service.sockets.player.listen().keyEvents();
        this.createPlatforms();
        splashEl.style.display = 'none';
    }

    createPlatforms() {
        const { game: gameState } = useGlobalState();
        gameState.platforms = [new Platform({ position: { x: 200, y: 300 } }), new Platform({ position: { x: 800, y: 300 } })];
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
