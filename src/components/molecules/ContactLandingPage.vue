<template>
    <ul class="flex items-center flex-row gap-4">
        <li>
            <svg-icon type="mdi" :path="mdiEmail" class="dark:fill-white h-8 w-8"></svg-icon>
        </li>
        <li v-for="link in contactLinks" :key="link.brandName">
            <AtomLink :href="link.url">
                <AtomBrandIcon :brandName="link.brandName" />
            </AtomLink>
        </li>
    </ul>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import AtomBrandIcon from '../atoms/AtomBrandIcon.vue';
import AtomLink from '../atoms/AtomLink.vue';
import { mdiEmail } from '@mdi/js';

const contactLinks = [
    {
        brandName: 'github',
        url: 'https://github.com/',
    },
    {
        brandName: 'linkedin',
        url: 'https://linkedin.com/',
    }
];
</script>
