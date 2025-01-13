<template>
    <div class="relative bg-gray-300 text-black px-3 pt-6 pb-3 rounded-lg column-scrum">
        <p class="mb-5">{{ title }}</p>
        <div class="flex flex-col gap-4">
            <CardScrum v-for="ticket in props.tickets" :key="ticket.id" :src="ticket.src" :alt="ticket.alt"
                :category="ticket.category" :topic="ticket.topic" :startDate="ticket.startDate"
                :endDate="ticket.endDate" :totalDuration="ticket.totalDuration" :title="ticket.title"
                :description="ticket.description" :created="ticket.created" :updated="ticket.updated" :rapporteur="ticket.rapporteur"/>
        </div>
    </div>
</template>

<script setup>
import CardScrum from '@/components/organisms/scrum/CardScrum.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    tickets: {
        type: Object,
        required: true
    },
})
</script>