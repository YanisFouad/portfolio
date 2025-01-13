<template>
<div class="size-8 rounded-full overflow-hidden">
    <img :src="src" :alt="alt" class="w-full object-cover" draggable="false">
</div>
</template>

<script setup>
defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    }
})
</script>