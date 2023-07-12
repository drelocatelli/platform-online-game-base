import Platform from '@core/scripts/platform';
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

    return { game, setGameStatus };
});

export default useGlobalState;
