import useGlobalState from '@core/store/global';
import Konva from 'konva';

class Canvas {
    canvas = document.querySelector('#canvas') as HTMLDivElement;
    firstPlayerMoveBgPosition = false;
    canReturnBack = true;

    constructor() {
        const globalState = useGlobalState();
        globalState.setStage(
            new Konva.Stage({
                id: '0',
                container: '#canvas',
                width: this.canvas.offsetWidth,
                height: this.canvas.offsetHeight,
            }),
        );
        globalState.setLayer(new Konva.Layer());
    }
}

export default Canvas;
