import Platform from '../platform';
import Player from './player';
import useGlobalState from '@core/store/global';

function Collision(this: Player) {
    const { game: gameState } = useGlobalState();

    // edge collision
    this.currentPosition = this.currentPosition!;

    // top edge collision
    if (this.currentPosition.y < this.currentPosition.canvas.y) {
        this.position.y = 0;
        this.velocity.y = 0;
    }

    // left edge collision
    if (
        this.keys.left.pressed &&
        this.currentPosition.x >= Player.defaultProps.velocity &&
        this.currentPosition.x >= this.currentPosition.canvas.x + 10
    ) {
        this.velocity.x = -Player.defaultProps.stop_velocity;
    }

    // platform collision detection
    gameState.platforms.forEach((platform: Platform) => {
        if (
            this.position.y + this.height <= platform.position.y &&
            this.position.y + this.height + this.velocity.y >= platform.position.y &&
            this.position.x + this.width >= platform.position.x &&
            this.position.x <= platform.position.x + platform.width
        ) {
            this.velocity.y = 0;
        }
    });
}

export default Collision;
