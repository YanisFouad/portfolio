<template>
    <HeaderDesktop />
    <div
        class="h-screen w-screen bg-white dark:bg-primary-dark dark:text-white flex flex-col items-center justify-center relative overflow-hidden">
        <h1 class="text-7xl">Oops! Vous êtes perdu...</h1> <!-- Message d'erreur centré -->
        <div ref="gameContainer" class="absolute top-0 left-0 right-0 bottom-0 z-10"></div>
    </div>
</template>

<script setup>
import { use404Game } from '@/composables/use404Game';
import { onMounted, ref } from 'vue';
import HeaderDesktop from '../templates/HeaderDesktop.vue';

const { container, init, width, height } = use404Game();
const gameContainer = ref(null);

onMounted(() => {
    container.value = gameContainer.value;
    if (container.value) {
        container.value.width = window.innerWidth;
        width.value = window.innerWidth;

        container.value.height = window.innerHeight;
        height.value = window.innerHeight;
        
        console.log(width.value, height.value);
        
        init();
    }
});
</script>

<style scoped></style>