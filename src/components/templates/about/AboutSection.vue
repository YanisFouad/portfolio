<template>
    <section id="about" class="bg-secondary dark:bg-primary-light-dark rounded-t-3xl mt-12 pt-8 px-14 pb-16 scroll-m-32">
        <h2 class="text-center mb-16">{{ t('about.about-section.title') }}</h2>
        <div class="flex gap-4 w-full">
            <AboutCard :title="t('about.about-section.card.1.title')"
                :content="t('about.about-section.card.1.content')">
                <template #header-icon>
                    <svg-icon type="mdi" :path="mdiAlbum" class="size-14 text-primary dark:text-secondary-dark"></svg-icon>
                </template>
            </AboutCard>
            <AboutCard :title="t('about.about-section.card.2.title')"
                :content="t('about.about-section.card.2.content')">
                <template #header-icon>
                    <svg-icon type="mdi" :path="mdiAlbum" class="size-14 text-primary dark:text-secondary-dark"></svg-icon>
                </template>
            </AboutCard>
            <AboutCard :title="t('about.about-section.card.3.title')"
                :content="t('about.about-section.card.3.content')">
                <template #header-icon>
                    <svg-icon type="mdi" :path="mdiAlbum" class="size-14 text-primary dark:text-secondary-dark"></svg-icon>
                </template>

            </AboutCard>
        </div>
    </section>
</template>

<script setup>
import AboutCard from '@/components/molecules/about/AboutCard.vue';
import { useI18n } from 'vue-i18n';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAlbum } from '@mdi/js';

const { t } = useI18n();

</script>