<template>
    <div id="splash">
        <button @click="startGame">Create new game</button>
    </div>
</template>

<script lang="ts">
import useGlobalState from './../core/state';
export default {
    setup() {
        return {
            globalStore: useGlobalState(),
        };
    },
    methods: {
        startGame() {
            console.log(this.globalStore);
        },
    },
};
</script>
