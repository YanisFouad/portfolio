<template>
    <div class="w-fit bg-tertiary dark:bg-primary-light-dark text-white border-tertiary border-4 rounded-4xl relative" role="switch"
        :aria-checked="locale === 'fr'" @click="toggleLanguage">
        <div class="flex relative cursor-pointer gap-1">
            <div class="bg-white absolute w-1/2 h-full top-0 rounded-2xl transition-transform duration-300"
                :class="{ 'translate-x-0': locale === 'en', 'translate-x-full': locale === 'fr' }"></div>
            <AtomLangFlag langCode="en" :class="{ 'text-black': locale === 'en' }"/>
            <AtomLangFlag langCode="fr" :class="{ 'text-black': locale === 'fr' }" />
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import AtomLangFlag from '../atoms/AtomLangFlag.vue';

const { locale } = useI18n();

const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'fr' : 'en';
};
</script>
