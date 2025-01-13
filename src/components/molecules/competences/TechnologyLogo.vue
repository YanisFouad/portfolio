<template>
    <a :href="link" class="flex flex-col opacity-80 items-center gap-1 w-fit cursor-pointer mb-11 mx-12 min-w-24" target="_blank" :class="`icon-${logo}`" @mouseenter="tl.play()" @mouseleave="tl.reverse()">
        <AtomBrandIcon :brandName="logo" class="text:fill-white"/>
        <p>{{ name }}</p>
    </a>
</template>

<script setup>
import AtomBrandIcon from '@/components/atoms/AtomBrandIcon.vue';
import gsap from 'gsap';
import { onMounted, onUnmounted } from 'vue';

const tl = gsap.timeline({
    paused: true,
});

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    },
});

onMounted(() => {
    tl.to(`.icon-${props.logo}`, {
        duration: 0.4,
        opacity: 1,
        scale: 1.1,
        fill: 'unset',
        ease: 'power4.out',
    });
});

onUnmounted(() => {
    tl.kill();
});

</script>