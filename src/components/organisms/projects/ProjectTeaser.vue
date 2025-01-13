<template>
    <article class="flex flex-row even:flex-row-reverse items-center justify-between container mx-auto my-12 relative project-teaser">
        <div class="w-1/2 py-10 px-8">
            <AtomCategory :name="project.category" />
            <AtomPresentation :title="project.title" :description="project['description-resume']" />
            <TagsContainer :tagsList="project.tags" />
            <RouterLink :to="{ name: 'project', params: { id: props.id } }">
                <AtomButton type="primary">
                    {{ t('projects.see-more') }}
                </AtomButton>
            </RouterLink>
        </div>
        <div class="w-1/2">
            <RouterLink :to="{ name: 'project', params: { id: props.id } }" class="relative">
                <AtomImage :url="project.image.url" :alt="project.image.alt" />
            </RouterLink>
        </div>
    </article>
</template>

<script setup>
import TagsContainer from '@/components/molecules/projects/TagsContainer.vue';
import AtomCategory from '@/components/atoms/projects/AtomCategory.vue';
import AtomImage from '@/components/atoms/projects/AtomImage.vue';
import AtomPresentation from '@/components/atoms/projects/AtomPresentation.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import AtomButton from '@/components/atoms/AtomButton.vue';
const { messages, locale, t } = useI18n();

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
});

const project = computed(() => messages.value[locale.value].projects.projects[props.id]);
</script>