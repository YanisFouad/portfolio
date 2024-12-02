<template>
    <!-- Conteneur principal, occupé toute la fenêtre avec un fond sombre -->
    <div
        class="h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-center relative overflow-hidden">
        <h1 class="text-4xl font-bold z-10">Oops! Vous êtes perdu...</h1> <!-- Message d'erreur centré -->
        <div ref="canvasContainer" id="canvas-container" class="absolute top-0 left-0 right-0 left-0"></div>
    </div>
</template>

<script setup>
import { use404Game } from '@/composables/use404Game';
import { onMounted } from 'vue';

const { element, init } = use404Game();

onMounted(() => {
    element.value = document.getElementById('canvas-container');
    init();
    console.log(element.value);
    
});

</script>
<style scoped>
</style>