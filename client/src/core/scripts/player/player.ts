import Canvas from '../canvas';
import Collision from './collision';
import Movement from './movement';
import Visual from './visual';

interface IPlayerAttrib {
    position?: { x: number; y: number };
    velocity?: { x: number; y: number };
}

class Player extends Canvas {
    id;
    position;
    width;
    height;
    velocity;
    element?: HTMLDivElement;
    elements?: NodeListOf<HTMLDivElement>;
    animId?: number;
    color: string;
    currentPlayer: boolean;
    currentPosition?: {
        x: number;
        y: number;
        canvas: DOMRect;
    };

    keys = {
        right: {
            pressed: false,
        },
        left: {
            pressed: false,
        },
    };

    static defaultProps = {
        gravity: 0.5,
        position: {
            x: 20,
            y: 20,
        },
        maxJumpPos: 200, // less than 200 more tall, triple jump mode
        velocity: 10,
        stop_velocity: 5,
    };

    constructor(props: { id: string; color: string; socketId: string; attr?: IPlayerAttrib }) {
        super();
        this.color = props.color;
        this.id = props.id;
        this.currentPlayer = props.socketId == props.id;
        this.position = props.attr?.position ?? {
            x: 20,
            y: 20,
        };
        this.velocity = props.attr?.velocity ?? {
            x: 0,
            y: 0,
        };
        this.width = 100;
        this.height = 100;
    }

    draw() {
        Visual.call(this).create();
        // remove first elements
        this.elements = this.canvas.querySelectorAll(`[data-id="${this.id}"]`);
        Array.from(this.elements)
            .slice(0, -1)
            .forEach((element) => {
                element.remove();
            });
        this.currentPosition = {
            x: this.elements[this.elements.length - 1]?.getBoundingClientRect().x,
            y: this.elements[this.elements.length - 1]?.getBoundingClientRect().y,
            canvas: this.canvas.getBoundingClientRect(),
        };
    }

    remove() {
        if (this.animId) {
            let removeAnim = requestAnimationFrame(this.remove.bind(this));
            let containers = this.canvas.querySelectorAll(`[data-id="${this.id}"]`);
            containers.forEach((container) => container.remove());
            cancelAnimationFrame(this.animId);
            if (containers.length == 0) {
                cancelAnimationFrame(removeAnim);
            }
        }
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y <= this.canvas.offsetHeight) this.velocity.y += Player.defaultProps.gravity;
        else this.velocity.y = 0;
    }

    animate() {
        Movement.call(this);
        Collision.call(this);
    }
}

interface IPlayerProps {
    container: NodeListOf<HTMLDivElement>;
}

export type { IPlayerProps };
export default Player;
