<template>
    <header class="fixed m-auto left-0 right-0 drop-expand z-10">
        <div class="flex items-center gap-8 py-1 px-5 border-tertiary dark:border-primary-light-dark border-4 rounded-4xl w-fit m-auto bg-white dark:bg-primary-dark">
            <MenuDesktop :navItems="navItems" />
            <div class="flex gap-4 items-center">
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    </header>
</template>

<script setup>
import LangSwitcher from '../molecules/LangSwitcher.vue';
import MenuDesktop from '../molecules/MenuDesktop.vue';
import ThemeSwitcher from '../molecules/ThemeSwitcher.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const navItems = [
    { title: t('menu.nav-bar-desktop.home'), url: '/' },
    { title: t('menu.nav-bar-desktop.about'), url: '#about' },
    { title: t('menu.nav-bar-desktop.experiences'), url: '#experiences' },
    { title: t('menu.nav-bar-desktop.skills'), url: '#skills' },
    { title: t('menu.nav-bar-desktop.projects'), url: '#projects', },
];
</script>