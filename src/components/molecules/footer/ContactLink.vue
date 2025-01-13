<template>
    <a :href="href" class="border-2 border-tertiary dark:border-white rounded-full p-1 bg-white dark:bg-primary-dark size-14 flex justify-center items-center">
        <slot></slot>
    </a>
</template>

<script setup>

defineProps({
    href: {
        type: String,
        required: true,
    },
});
</script>