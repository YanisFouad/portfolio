<template>
    <section id="competences" class="w-full mt-12 px-12 scroll-m-32">
        <h2 class="text-center mb-16">{{ t('competences.page.title') }}</h2>
        <div class="flex flex-row justify-center w-full pb-12 mb-12 border-b-2 border-tertiary dark:border-white top-competence">
            <div class="flex flex-col justify-between w-1/2 border-r-2 border-tertiary dark:border-white items-center competence">
                <CompetenceType id="frameworks-frontend" class="w-full px-28" :isFirst="true">
                    <template #icon>
                        <SvgIcon type="mdi" :path="mdiCodeBlockTags" class="size-12" />
                    </template>
                </CompetenceType>
                <CompetenceType id="languages-frontend" class="w-full px-28" />
            </div>
            <div class="flex flex-col justify-between w-1/2 items-center competence">
                <CompetenceType id="frameworks-backend" :isFirst="true">
                    <template #icon>
                        <SvgIcon type="mdi" :path="mdiCodeBlockTags" class="size-12" />
                    </template>
                </CompetenceType>
                <CompetenceType id="languages-backend" />
            </div>
        </div>
        <div class="flex w-full competence-bottom">
            <CompetenceType id="databases" class="w-1/4 border-r-2 border-tertiary dark:border-white competence">
                <template #icon>
                    <SvgIcon type="mdi" :path="mdiCodeBlockTags" class="size-12" />
                </template>
            </CompetenceType>
            <CompetenceType id="versioning" class="w-1/4 border-r-2 border-tertiary dark:border-white competence">
                <template #icon>
                    <SvgIcon type="mdi" :path="mdiCodeBlockTags" class="size-12" />
                </template>
            </CompetenceType>
            <CompetenceType id="infrastructure" class="w-1/4 border-r-2 border-tertiary dark:border-white competence">
                <template #icon>
                    <SvgIcon type="mdi" :path="mdiCodeBlockTags" class="size-12" />
                </template>
            </CompetenceType>
            <CompetenceType id="cms-crm" class="w-1/4 competence">
                <template #icon>
                    <SvgIcon type="mdi" :path="mdiCodeBlockTags" class="size-12" />
                </template>
            </CompetenceType>
        </div>

    </section>
</template>

<script setup>
import CompetenceType from '@/components/organisms/competences/CompetenceType.vue';
import { useI18n } from 'vue-i18n';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCodeBlockTags } from '@mdi/js';

const { t } = useI18n();
</script>