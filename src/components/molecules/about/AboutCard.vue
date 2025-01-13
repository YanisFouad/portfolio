<template>
    <article class="mx-9 w-full">
        <header class="border-b-2 border-tertiary dark:border-white flex items-center justify-start pb-2 mb-2 gap-4">
            <slot name="header-icon" class=""></slot>
            <h3>{{ title }}</h3>
        </header>
        <main>
            <p>{{ content }}</p>
        </main>
    </article>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
</script>