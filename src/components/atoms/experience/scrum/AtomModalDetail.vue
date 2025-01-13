<template>
    <div>
        <div class="mb-2">
            <p v-if="title" class="font-medium">{{ title }}</p>
            <div class="flex items-center gap-2">
                <slot name="icon"></slot>
                <AtomCardImage v-if="img" :src="img" :alt="alt" />
                <p class="font-light text-base" :class="tagClass">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import AtomCardImage from './AtomCardImage.vue';
import { computed } from 'vue';
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    alt: {
        type: String
    },
    isTag: {
        type: Boolean,
        default: false
    }
});

const tagClass = computed(() => {
    return {
        'bg-gray-800': props.isTag,
        'text-white': props.isTag,
        'rounded-full': props.isTag,
        'px-2': props.isTag,
    }
})

console.log(props.img);

</script>