<template>
    <form class="flex flex-col items-center gap-4 max-w-128 mx-auto">
        <AtomInput id="name" type="text" :label="t('contact.form.name.label')" :placeholder="t('contact.form.name.placeholder')" />
        <AtomInput id="email" type="email" :label="t('contact.form.email.label')" :placeholder="t('contact.form.email.placeholder')" />
        <AtomInput id="message" type="textarea" :label="t('contact.form.message.label')" :placeholder="t('contact.form.message.placeholder')" class="h-96"/>
        <AtomButton type="primary" class="w-32">{{ t('contact.form.submit') }}</AtomButton>
    </form>
</template>

<script setup>
import AtomInput from '@/components/atoms/AtomInput.vue';
import AtomButton from '@/components/atoms/AtomButton.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>