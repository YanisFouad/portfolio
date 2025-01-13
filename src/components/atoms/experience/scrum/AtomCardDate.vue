<template>
    <ul>
        <li>{{ t('scrum.card.date.start-date') }} : {{ startDate }}</li>
        <li>{{ t('scrum.card.date.end-date') }} : {{ endDate }}</li>
        <li>{{ t('scrum.card.date.total-duration') }} : {{ totalDuration }}</li>
    </ul>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    totalDuration: {
        type: String,
        required: true
    }
})
</script>