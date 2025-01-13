<template>
    <div class="bg-tertiary-dark text-white py-0 px-1 flex items-center gap-1 w-fit text-base rounded-md    ">
        <span v-if="props.category">[{{ category }}]</span>
        <span>{{ topic }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    category: {
        type: String,
    },
    topic: {
        type: String,
        required: true
    },
})
</script>