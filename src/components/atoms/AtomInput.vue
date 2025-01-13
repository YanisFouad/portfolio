<template>
    <div class="flex flex-col gap-1 w-full min-h-16">
        <label :for="id" class="">{{ label }}</label>
        <component :is="isTextarea ? 'textarea' : 'input'" :id="id" :type="isTextarea ? null : type"
            :placeholder="placeholder" :value="value"
            class="outline-none px-2 py-1 rounded-lg border-2 border-tertiary focus-visible:border-primary dark:bg-primary-light-dark dark:border-white dark:focus-visible:border-secondary-dark resize-none h-full" />
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        default: null,
    },
    value: {
        type: String,
        default: null,
    },
    label: {
        type: String,
        default: null,
    },
});

const isTextarea = computed(() => props.type === 'textarea');


</script>
