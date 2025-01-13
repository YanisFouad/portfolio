<template>
    <div class="w-fit bg-tertiary dark:bg-primary-light-dark text-white border-tertiary dark:border-primary-light-dark border-4 rounded-4xl relative"
        role="switch" :aria-checked="locale === 'fr'" @click="handleLanguage">
        <div class="flex relative cursor-pointer gap-1">
            <div class="bg-white absolute w-1/2 h-full top-0 rounded-2xl transition-transform duration-300"
                :class="{ 'translate-x-0': locale === 'en', 'translate-x-full': locale === 'fr' }"></div>
            <AtomLangFlag langCode="en" :class="{ 'text-black': locale === 'en' }" />
            <AtomLangFlag langCode="fr" :class="{ 'text-black': locale === 'fr' }" />
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import AtomLangFlag from '../atoms/AtomLangFlag.vue';

const { locale } = useI18n();

function handleLanguage() {
    if(locale.value == "en") {
        locale.value = "fr";
    } else {
        locale.value = "en";
    }
    
    localStorage.setItem("lang", locale.value);
};
</script>
