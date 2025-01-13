<template>
    <div class="w-full h-96 relative overflow-hidden rounded-3xl border-4 border-tertiary dark:border-white transition-all duration-300 hover:scale-95 hover:border-primary hover:dark:border-secondary-dark">
        <img :src="url" :alt="alt" class="object-cover w-full h-full" draggable="false"/>
    </div>
</template>

<script setup>

defineProps({
    url: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
});


</script>