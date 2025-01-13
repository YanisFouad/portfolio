<template>
    <div class="flex items-center gap-2 mb-4">
        <div class="w-4 h-1 bg-tertiary dark:bg-secondary-dark"></div>
        <h4>{{ name }}</h4>
    </div>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true,
    }
});
</script>