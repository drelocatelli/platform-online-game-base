import useGlobalState from '@core/store/global';
import Konva from 'konva';
import { Rect } from 'konva/lib/shapes/Rect';

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
    className?: string;
    element?: Rect;
    background = '#33b233';
    position = {
        x: 0,
        y: 0,
    };

    width = 200;
    height = 20;

    constructor(props?: IPlatformProps) {
        let element = new Konva.Rect({
            id: this?.className ? `platform ${this.className}` : 'platform',
            x: props?.position?.x ? props?.position.x : this.position.x,
            y: props?.position?.y ? props?.position.y : this.position.y,
            width: props?.width ?? this.width,
            height: props?.height ?? this.height,
            fill: props?.background ?? this.background,
        });
        this.element = element;
    }

    draw() {
        const { game } = useGlobalState();
        this.element?.moveToTop();
        game.layer.add(this.element);
    }
}

export type { IPlatformProps };
export default Platform;
