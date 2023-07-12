import Player from './player';

function Movement(this: Player) {
    const gravity = () => {
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if (this.position.y + this.height + this.velocity.y <= this.canvas.offsetHeight) this.velocity.y += Player.defaultProps.gravity;
        else this.velocity.y = 0;
    };

    const animate = () => {
        this.animId = requestAnimationFrame(this.animate.bind(this));
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

        if (this.keys.right.pressed) {
            this.velocity.x = Player.defaultProps.stop_velocity;
        } else this.velocity.x = 0;

        // move platform with keys
        // Service.sockets.platforms.elements.forEach((platform) => {
        //     if (this.keys.right.pressed) {
        //         platform.position.x -= this.velocity.y;
        //     } else if (this.canReturnBack && this.keys.left.pressed) {
        //         platform.position.x += this.velocity.y;
        //     }
        // });
    };

    return {
        animate,
        gravity,
    };
}

export default Movement;
