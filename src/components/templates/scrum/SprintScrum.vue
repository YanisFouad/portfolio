<template>
    <section id="experiences" class="mt-12 scroll-m-32">
        <h2 class="text-center mb-16">{{ t('scrum.title') }}</h2>
        <div class="container flex gap-1 m-auto justify-center">
            <ColumnScrum v-for="column in sprintColumn" :key="column.title" :title="column.title"
                :tickets="column.tickets" class="w-full max-w-72" />
        </div>
    </section>
</template>

<script setup>
import ColumnScrum from '@/components/organisms/scrum/ColumnScrum.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { messages, locale, t } = useI18n();

const sprintColumn = computed(() => {
    return messages.value[locale.value].scrum.card.column;
});
</script>