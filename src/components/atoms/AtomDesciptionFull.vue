<template>
    <div v-for="paragraph in splitParagraphs" :key="paragraph.title" class="mb-7 max-w-4xl mx-auto">
        <h3 class="border-b-2 dark:border-white border-tertiary w-full pb-1 text-2xl">{{ paragraph.title }}</h3>
        <p v-for="content in paragraph.content" :key="content" class="mt-2">{{ content }}</p>
    </div>
</template>

<script setup>

import { computed } from 'vue';

const props = defineProps({
    paragraphs: {
        type: Array,
        required: true,
    }
})

const splitParagraphs = computed(() => {
    return props.paragraphs.map(paragraph => {
        return {
            title: paragraph.title,
            content: paragraph.content.split('\n')
        }
    });
})

console.log(splitParagraphs);

</script>