import Platform from '@core/scripts/platform';
import { Layer } from 'konva/lib/Layer';
import { Stage } from 'konva/lib/Stage';
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface IGameStore {
    started: boolean;
    platforms: Platform[];
    stage?: Stage;
    layers?: Layer[];
}

const useGlobalState = defineStore('global', () => {
    const game = ref<IGameStore>({ started: false, platforms: [], stage: undefined, layers: [] });

    function setStage(stage: Stage) {
        game.value.stage = stage;
    }

    function addLayer(layer: Layer) {
        game.value.layers?.push(layer);
    }

    function setGameStatus(started: boolean) {
        game.value.started = started;
    }

    function decrementPlatformPositionX(idx: number, value: number) {
        const currentPosX = game.value.platforms[idx].element!.x();
        game.value.platforms[idx].element!.x(currentPosX - value);
    }

    return { game, setGameStatus, decrementPlatformPositionX, setStage, addLayer };
});

export default useGlobalState;
