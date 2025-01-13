<template>
    <div v-html="dynamicContent" class="size-8"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    brandName: {
        type: String,
        required: true,
    },
});

const dynamicContent = ref(null);

onMounted(async () => {
    try {
        const module = await import(`@/assets/icons/brand/${props.brandName}.svg?raw`);
        dynamicContent.value = module.default
    } catch (error) {
        console.error('Erreur lors du chargement du SVG:', error);
    }
});
</script>
