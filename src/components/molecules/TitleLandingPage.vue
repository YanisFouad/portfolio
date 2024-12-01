<template>
    <div>
        <h1 class="text-5xl mb-5 landing-page-title">
            {{ t('home.landing-page.intro-title') }}
            <span class="block text-primary dark:text-secondary-dark my-4 text-8xl">
                {{ t('home.landing-page.title-name') + ' ' }}
                <span class="font-caveat">
                    {{ t('home.landing-page.title-lastname') }}
                </span>
            </span>
        </h1>

        <div class="flex gap-3 landing-page-description">
            <h2 class="text-3xl font-normal">
                {{ t('home.landing-page.title-description-studies') }}
            </h2>
            <h2>
                <span class="text-primary dark:text-secondary-dark font-caveat font-bold">&</span>
            </h2>
            <div class="w-fit relative">
                <h2 class="w-fit">
                    {{ t('home.landing-page.title-description-profession') }}
                </h2>
                <div class="bg-primary dark:bg-secondary-dark w-0 h-1 description-underline"></div>
                <div
                    class="bg-primary dark:bg-secondary-dark w-0 h-1 -rotate-16 absolute right-0 description-underline-arrow">
                </div>
            </div>
        </div>
        <ContactLandingPage class="mt-5" />
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import ContactLandingPage from '../molecules/ContactLandingPage.vue';

const { t } = useI18n();

</script>