<template>
    <section class="flex flex-row even:flex-row-reverse items-center justify-between container mx-auto my-12">
        <div class="w-1/2">
            <RouterLink :to="{ name: 'project', params: { id: props.id } }">
                <AtomImage :url="project.image.url" :alt="project.image.alt" />
            </RouterLink>
        </div>
        <div class="w-1/2 pb-10 px-8 ">
            <RouterLink :to="{ name: 'home', hash: '#projects' }" class="block w-fit ml-auto mb-7">
                <AtomButton type="secondary" class="py-5 px-8">
                    <svg-icon type="mdi" :path="mdiArrowURightBottom"></svg-icon>
                    {{ t('projects.back') }}
                </AtomButton>
            </RouterLink>
            <div class="flex justify-between items-center">
                <AtomCategory :name="project.category" />
            </div>
            <AtomPresentation :title="project.title" :description="project['description-resume']" />
            <TagsContainer :tagsList="project.tags" />
        </div>
    </section>
    <section>
        <AtomDescriptionFull :paragraphs="project.description" />
    </section>
</template>

<script setup>
import TagsContainer from '@/components/molecules/projects/TagsContainer.vue';
import AtomCategory from '@/components/atoms/projects/AtomCategory.vue';
import AtomImage from '@/components/atoms/projects/AtomImage.vue';
import AtomPresentation from '@/components/atoms/projects/AtomPresentation.vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';
import AtomButton from '@/components/atoms/AtomButton.vue';
import AtomDescriptionFull from '@/components/atoms/AtomDesciptionFull.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowURightBottom } from '@mdi/js';

const { t } = useI18n();

const props = defineProps({
    project: {
        type: Object,
        required: true,
    }
});
</script>