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

    const remove = () => {
        if (this.animId) {
            let removeAnim = requestAnimationFrame(this.remove.bind(this));
            let containers = this.canvas.querySelectorAll(`[data-id="${this.id}"]`);
            containers.forEach((container) => container.remove());
            cancelAnimationFrame(this.animId);
            if (containers.length == 0) {
                cancelAnimationFrame(removeAnim);
            }
        }
    };

    const removeTracksPeriodically = () => {
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
    };

    return {
        create,
        removeTracksPeriodically,
        remove,
    };
}

export default Visual;
