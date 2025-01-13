<template>
    <section id="projects" class="w-full mt-12 scroll-m-32">
        <h2 class="text-center mb-16">{{ t('projects.title') }}</h2>
        <div>
            <ProjectTeaser v-for="project in projects" :key="project.id" :id="project.id" />
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectTeaser from '../../organisms/projects/ProjectTeaser.vue';

const { t, messages, locale } = useI18n();

const projects = computed(() => messages.value[locale.value].projects.projects);
</script>