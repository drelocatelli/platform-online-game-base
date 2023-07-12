import Player from './player';

function Collision(this: Player) {
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
}

export default Collision;
