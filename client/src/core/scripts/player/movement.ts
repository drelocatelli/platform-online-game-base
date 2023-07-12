import Platform from '../platform';
import Service from '../service';
import Player from './player';
import useGlobalState from '@core/store/global';

function Movement(this: Player) {
    const { game: gameState, decrementPlatformPositionX } = useGlobalState();

    const gravity = () => {
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if (this.position.y + this.height + this.velocity.y <= this.canvas.offsetHeight) this.velocity.y += Player.defaultProps.gravity;
        else this.velocity.y = 0;
    };

    const animate = () => {
        this.animId = requestAnimationFrame(this.animate.bind(this));
        gameState.platforms.forEach((platform: Platform) => platform.draw());
        this.update();

        this.elements = this.elements!;
        this.currentPosition = this.currentPosition!;

        // current player always on top
        if (this.currentPlayer && this.elements) {
            let currentElement = this.elements[this.elements.length - 1];
            if (currentElement) {
                currentElement.style.zIndex = (this.elements.length + 1).toString();
            }
        }
        // move platform with keys
        if (this.id === Service.sockets.player.first().id) {
            gameState.platforms.forEach((_: Platform, i: number) => {
                if (this.keys.right.pressed) {
                    decrementPlatformPositionX(i, this.velocity.x);
                } else if (this.canReturnBack && this.keys.left.pressed) {
                    decrementPlatformPositionX(i, this.velocity.x);
                }
            });
        }

        if (this.keys.right.pressed) {
            this.velocity.x = Player.defaultProps.stop_velocity;
        } else this.velocity.x = 0;
    };

    return {
        animate,
        gravity,
    };
}

export default Movement;
