<template>
    <span class="px-3 rounded-2xl bg-tertiary dark:bg-primary-light-dark pointer-events-none text-white">{{ name }}</span>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true,
    }
});
</script>