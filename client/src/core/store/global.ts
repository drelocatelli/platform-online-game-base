import Platform, { IPlatformProps } from '@core/scripts/platform';
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface IGameStore {
    started: boolean;
    platforms: Platform[];
}

const useGlobalState = defineStore('global', () => {
    const game = ref<IGameStore>({ started: false, platforms: [] });

    function setGameStatus(started: boolean) {
        game.value.started = started;
    }

    function decrementPlatformPositionX(idx: number, value: number) {
        game.value.platforms[idx].position.x -= value;
    }

    return { game, setGameStatus, decrementPlatformPositionX };
});

export default useGlobalState;
