<template>
    <div class="w-full p-7 border-t-tertiary dark:border-t-white border-t-2 ">
        <p class="flex justify-center items-center gap-2">
            {{ t('footer.madeWith') }}
            <svg-icon type="mdi" :path="mdiCardsHeart" class="text-red"></svg-icon>
            <strong>{{ t('footer.by') }}</strong>
        </p>
    </div>

</template>

<script setup>
import { useI18n } from 'vue-i18n';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCardsHeart } from '@mdi/js';

const { t } = useI18n();

</script>