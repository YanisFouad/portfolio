<template>
    <component :is="props.href ? 'a' : 'button'" :href="props.href" :target="props.target" :class="buttonClasses[props.type]" class="h-8 px-3.5 inline-block rounded-lg">
        <slot></slot>
    </component>
</template>

<script setup>
const props = defineProps({
    href: {
        type: String,
        default: null,
    },
    target: {
        type: String,
        default: null,
    },
    type: {
        type: String,
        required: true,
    }
});

const buttonClasses = {
    primary: 'bg-primary text-white hover:bg-primary-light dark:bg-secondary-dark dark:hover:bg-secondary-light-dark',
    secondary: 'dark:bg-transparent dark:border-2 dark:border-secondary-dark dark:hover:bg-secondary-light-dark',
}
</script>