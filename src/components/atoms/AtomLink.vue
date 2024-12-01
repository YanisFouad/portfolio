<template>
<a :href="props.url">
    <slot></slot>
</a>
</template>

<script setup>
const props = defineProps({
    url: String,
});
</script>