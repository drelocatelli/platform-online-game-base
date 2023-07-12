interface IPlatformProps {
    background?: string;
    position?: {
        x?: number;
        y?: number;
    };
    height?: number;
    width?: number;
}

class Platform {
    canvas;
    className?: string;
    element: HTMLDivElement;
    background = '#33b233';
    position = {
        x: 0,
        y: 0,
    };

    width = 200;
    height = 20;

    constructor(props?: IPlatformProps) {
        this.canvas = document.querySelector('#canvas') as HTMLDivElement;
        this.element = document.createElement('div');
        this.background = props?.background ?? this.background;
        this.height = props?.height ?? this.height;
        this.width = props?.width ?? this.width;
        if (this.position) {
            this.position.x = props?.position?.x ?? this.position.x;
            this.position.y = props?.position?.y ?? this.position.y;
        }
    }

    draw() {
        this.element.id = 'platform';
        if (this?.className) this.element.classList.add(this.className);
        this.element.style.cssText = `
            background: ${this.background};
            width: ${this.width}px;
            height: ${this.height}px;
            position: absolute;
            z-index: 2;
            left: ${this.position.x}px;
            top: ${this.position.y}px;
        `;
        this.canvas.appendChild(this.element);
    }
}

export type { IPlatformProps };
export default Platform;
