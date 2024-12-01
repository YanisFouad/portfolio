<template>
    <nav>
        <ul>
            <li v-for="item in menu" :key="item.name">
                <AtomLink :url="item.link">
                    {{ item.name }}
                </AtomLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import AtomLink from '../atoms/AtomLink.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const menu = [
    { name: t('menu.nav-bar-desktop.home'), link: '/' },
    { name: t('menu.nav-bar-desktop.about'), link: '#about' },
    { name: t('menu.nav-bar-desktop.experiences'), link: '#experiences' },
    { name: t('menu.nav-bar-desktop.skills'), link: '#skills' },
    { name: t('menu.nav-bar-desktop.projects'), link: '#projects', },
];
</script>