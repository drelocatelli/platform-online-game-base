import Platform, { IPlatformProps } from '@core/scripts/platform';
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface IGameStore {
    started: boolean;
    platforms: Platform[];
}

interface IPosition {
    x: number;
    y: number;
}

const useGlobalState = defineStore('global', () => {
    const game = ref<IGameStore>({ started: false, platforms: [] });

    function setGameStatus(started: boolean) {
        game.value.started = started;
    }

    function setPlatformPosition(idx: number, props: IPosition) {
        game.value.platforms[idx].position = props;
        console.log(game.value.platforms[idx].element);
    }

    return { game, setGameStatus, setPlatformPosition };
});

export default useGlobalState;
