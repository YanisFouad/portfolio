<template>
    <div class="w-screen h-screen fixed z-20 flex overlay-loader">
        <AtomBar v-for="n in 10" :key="n" class="bar" />
    </div>
</template>

<script setup>
import AtomBar from '../atoms/AtomBar.vue';

</script>