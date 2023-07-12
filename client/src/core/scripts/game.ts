import Service from './service';
import Platform from './platform';
import useGlobalState from '@core/store/global';

class Game {
    constructor() {
        console.log('game started');
        this.disableKeyScrolling();
        // window.alert('Please wait while contacting server...');

        this.createPlatforms();
        Service.sockets.player.listen().connection();
        let splashEl = document.getElementById('splash') as HTMLDivElement;
        Service.sockets.player.listen().keyEvents();
        splashEl.style.display = 'none';
    }

    createPlatforms() {
        const { game: gameState } = useGlobalState();

        let platforms = [new Platform({ position: { x: 200, y: 300 } })];

        gameState.platforms = platforms;
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
