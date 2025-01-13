<template>
    <div class="mb-4">
        <h3 class="mb-5">{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
</script>