<template>
    <div class="flex flex-col relative w-full">
        <div v-if="competence['main-section-title']" class="flex items-center justify-center flex-col mb-12 relative competence-title">
            <slot name="icon"></slot>
            <h3>{{ competence['main-section-title'] }}</h3>
        </div>
        <div class="relative" :class="{'first-sub-competence': isFirst, 'last-sub-competence': !isFirst}">
            <h4 class="text-center text-primary dark:text-secondary-dark mb-8" v-if="competence.title">{{
                competence.title }}</h4>
            <div class="flex items-center flex-wrap justify-center">
                <TechnologyLogo class="w-1/3" v-for="technology in competence.technologies" :key="technology.name"
                    :name="technology.name" :logo="technology.logo" :link="technology.link" />
            </div>
        </div>
    </div>
</template>

<script setup>
import TechnologyLogo from '@/components/molecules/competences/TechnologyLogo.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, messages } = useI18n();

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    isFirst: {
        type: Boolean,
        default: false,
    },
});

const competence = computed(() => messages.value[locale.value].competences[props.id]);
</script>