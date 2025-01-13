<template>
    <div class="flex flex-wrap gap-3 mb-6">
        <AtomTag v-for="tag in tagsList" :key="tag" :name="tag" />
    </div>
</template>

<script setup>
import AtomTag from '@/components/atoms/projects/AtomTag.vue';
defineProps({
    tagsList: {
        type: Array,
        required: true,
    }
});
</script>