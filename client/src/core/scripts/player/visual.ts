import Player from './player';

function Visual(this: Player) {
    const create = () => {
        const element = document.createElement('div');
        element.dataset.id = this.id;
        this.canvas.appendChild(element);

        element.style.cssText = `
        position: absolute;
        z-index:1;
        background: ${this.color};
        top: ${this.position.y}px;
        left: ${this.position.x}px;
        width: ${this.width}px;
        height: ${this.height}px;
    `;
        this.element = element;
    };

    return {
        create,
    };
}

export default Visual;
