import useGlobalState from '@core/store/global';
import Konva from 'konva';
import { Rect } from 'konva/lib/shapes/Rect';
import { Layer } from 'konva/lib/Layer';

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
    element?: Rect;
    layer?: Layer;
    background = '#33b233';
    position = {
        x: 0,
        y: 0,
    };

    width = 200;
    height = 20;

    constructor(props?: IPlatformProps) {
        const globalState = useGlobalState();
        const id = `platform_${globalState.game.layers.length}`;
        let element = new Konva.Rect({
            id: id,
            x: props?.position?.x ? props?.position.x : this.position.x,
            y: props?.position?.y ? props?.position.y : this.position.y,
            width: props?.width ?? this.width,
            height: props?.height ?? this.height,
            fill: props?.background ?? this.background,
        });
        this.element = element;
        this.layer = new Konva.Layer({ id: id });
        globalState.addLayer(this.layer);
    }

    draw() {
        const { game } = useGlobalState();

        this.layer!.add(this.element as Rect);
        game.stage.add(this.layer);
    }
}

export type { IPlatformProps };
export default Platform;
