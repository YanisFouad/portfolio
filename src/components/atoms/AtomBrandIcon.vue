<template>
    <div v-html="brandSvgContent" class="dark:fill-white h-8 w-8"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    brandName: {
        type: String,
        required: true,
    },
});

const brandSvgContent = ref('');

onMounted(async () => {
    const module = await import(`@/assets/icons/brand/${props.brandName}.svg?raw`);
    brandSvgContent.value = module.default;
});
</script>