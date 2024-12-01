<template>
    <div class="flex items-center uppercase gap-2 z-10 py-1 px-2 transition-colors duration-300">
        {{ langCode }}
        <img :src="flagSrc" draggable="false">
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    langCode: {
        type: String,
        required: true,
    },
});

const flagSrc = ref('');

onMounted(async () => {
    const module = await import(`@/assets/icons/flags/${props.langCode}.svg`);
    flagSrc.value = module.default;

    console.log(module.default);
});
</script>