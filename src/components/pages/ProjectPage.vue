<template>
    <main class="min-h-screen p-20">
        <HeaderDesktop />
        <div v-if="project">
            <ProjectFull :project="project" />
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </main>
    <FooterDesktop />
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProjectFull from '../organisms/projects/ProjectFull.vue';
import HeaderDesktop from '../templates/HeaderDesktop.vue';
import FooterDesktop from '../templates/FooterDesktop.vue';
const { messages, locale } = useI18n();
const route = useRoute();
const router = useRouter();
const project = computed(() => messages.value[locale.value].projects.projects[route.params.id]);

onMounted(() => {
    try {
        if (!project.value) {
            throw new Error('Project not found');
        }

    } catch {
        router.push({ name: '404' });
    }
});
</script>