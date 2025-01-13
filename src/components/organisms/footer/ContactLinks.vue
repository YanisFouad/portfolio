<template>
    <div class="w-fit h-80 relative flex items-center justify-center">
        <div class="relative z-10 flex items-center justify-center gap-4 flex-col">
            <ContactLink :href="t('footer.github.url')">
                <AtomBrandIcon brandName="github" />
            </ContactLink>
            <ContactLink :href="t('footer.linkedin.url')">
                <AtomBrandIcon brandName="linkedin"/>
            </ContactLink>
            <ContactLink :href="'mailto:' + t('footer.mail.url')">
                <SvgIcon type="mdi" :path="mdiEmail" class="dark:fill-white size-8"></SvgIcon>
            </ContactLink>
        </div>
        <div id="bar" class="top-0 left-0 bottom-0 right-0 absolute z">
            <div class="w-0.5 bg-tertiary dark:bg-white h-full mx-auto"></div>
        </div>
    </div>
</template>
<script setup>
import ContactLink from '@/components/molecules/footer/ContactLink.vue';
import AtomBrandIcon from '@/components/atoms/AtomBrandIcon.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { useI18n } from 'vue-i18n';
import { mdiEmail } from '@mdi/js';

const { t } = useI18n();
</script>
