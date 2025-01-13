<template>
    <section id="competences" class="w-full mt-16 px-12 scroll-m-32">
        <h2 class="text-center mb-12">{{ t('contact.title') }}</h2>
        <ContactForm />
    </section>
</template>

<script setup>
import ContactForm from '@/components/organisms/contact/ContactForm.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>