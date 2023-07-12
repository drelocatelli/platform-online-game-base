import { defineStore } from 'pinia';
import { ref } from 'vue';

interface IGameStore {
    started: boolean;
}

const useGlobalState = defineStore('global', () => {
    const game = ref<IGameStore>({ started: false });

    function setGameStatus(started: boolean) {
        game.value.started = started;
    }

    return { game, setGameStatus };
});

export default useGlobalState;
