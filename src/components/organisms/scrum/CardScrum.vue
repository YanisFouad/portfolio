<template>
    <article
        class="relative bg-white max-w-72 text-black h-56 py-2 px-4 rounded overflow-hidden shadow flex flex-col justify-between hover:bg-gray-200 hover:cursor-pointer scrum-card"
        @click="isModalVisible = true" :data-name="title">
        <div>
            <p>{{ title }}</p>
            <AtomCardEpic :category="category" :topic="topic" />
        </div>
        <AtomCardDate :startDate="startDate" :endDate="endDate" :totalDuration="totalDuration" />
        <AtomSideBar class="absolute top-0 bottom-0 left-0" />
        <AtomCardImage src="/profile-picture.png" alt="Photo de profil de Yanis Fouad" class="ml-auto" />
    </article>
    <Transition name="scrum-modal">
        <div v-if="isModalVisible" id="scrum-modal"
            class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
            <div class="fixed top-0 left-0 w-full h-full bg-black z-50 scrum-bg" @click="isModalVisible = false"></div>
            <section
                class="scrum-modal-content fixed h-5/6 w-5/6 overflow-y-auto bg-white z-50 rounded-lg dark:bg-primary-light-dark border-2 border-tertiary dark:border-white p-8 dark:text-white">
                <main class="flex pr-4">
                    <div class="w-3/4 pr-8">
                        <div class="flex flex-col justify-between mb-8 border-b border-tertiary dark:border-white pb-4">
                            <p>
                                <span v-if="category">{{ category }} - </span>
                                {{ topic }}
                            </p>
                            <h2>{{ title }}</h2>
                        </div>
                        <p>Description</p>
                        <div v-for="paragraph in splitDescription" :key="paragraph.title" class="mt-2">
                            <h3 class="text-2xl mb-2">{{ paragraph.title }}</h3>
                            <p v-for="content in paragraph.content" :key="content" class="font-light">{{ content
                                }}</p>
                        </div>
                    </div>
                    <div class="w-1/4 flex flex-col gap-4 items-end">
                        <svg-icon type="mdi" :path="mdiClose"
                            class="text-black hover:dark:text-white hover:text-black hover:cursor-pointer size-8 text-right"
                            @click="isModalVisible = false"></svg-icon>
                        <div class="border border-tertiary dark:border-white w-full">
                            <p class="border-b border-tertiary dark:border-white p-4">Détails</p>
                            <div class="p-4 flex flex-col gap-4">
                                <div>
                                    <AtomModalDetail :title="t('scrum.modal.detail.assigned')" description="Yanis Fouad"
                                        img="/profile-picture.png" alt="Photo de profile Yanis Fouad" />
                                    <AtomModalDetail :title="t('scrum.modal.detail.rapporteur')"
                                        :description="rapporteur && rapporteur.name ? rapporteur.name : 'Non assigné'" :img="rapporteur && rapporteur.src ? rapporteur.src : '/default-profile.png'"
                                        :alt="rapporteur && rapporteur.alt ? rapporteur.alt : 'Photo de profil par défault'" />
                                    <AtomModalDetail :title="t('scrum.modal.detail.start-date')"
                                        :description="props.startDate" />
                                    <AtomModalDetail :title="t('scrum.modal.detail.end-date')"
                                        :description="props.endDate" />
                                    <AtomModalDetail :title="t('scrum.modal.detail.total-duration')"
                                        :description="props.totalDuration" :isTag="true" />
                                    <AtomModalDetail :title="t('scrum.modal.detail.story-point')" description="8"
                                        :isTag="true" />
                                    <AtomModalDetail :title="t('scrum.modal.detail.priority')" description="Haute">
                                        <template #icon>
                                            <svg-icon type="mdi" :path="mdiChevronDoubleUp" class="text-red size-8" />
                                        </template>
                                    </AtomModalDetail>
                                </div>
                                <div>
                                    <AtomModalDetail
                                        :description="`${t('scrum.modal.detail.updated')} ${props.created}`" />
                                    <AtomModalDetail
                                        :description="`${t('scrum.modal.detail.updated')} ${props.created}`" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    </Transition>
</template>

<script setup>
import AtomCardDate from '@/components/atoms/experience/scrum/AtomCardDate.vue';
import AtomCardImage from '@/components/atoms/experience/scrum/AtomCardImage.vue';
import AtomCardEpic from '@/components/atoms/experience/scrum/AtomCardEpic.vue';
import AtomSideBar from '@/components/atoms/experience/scrum/AtomSideBar.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiClose, mdiChevronDoubleUp } from '@mdi/js';
import { formatParagraphs } from '@/utils/paragraphFormater';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import AtomModalDetail from '@/components/atoms/experience/scrum/AtomModalDetail.vue';

const isModalVisible = ref(false);
const { t } = useI18n();

const props = defineProps({
    src: {
        type: String,
    },
    alt: {
        type: String,
    },
    category: {
        type: String,
    },
    topic: {
        type: String,
    },
    startDate: {
        type: String,
    },
    endDate: {
        type: String,
    },
    totalDuration: {
        type: String,
    },
    title: {
        type: String,
    },
    icon: {
        type: String,
    },
    description: {
        type: Array,
    },
    updated: {
        type: String,
    },
    created: {
        type: String,
    },
    rapporteur: {
        type: Object,
    },
})
console.log(props.rapporteur);

const splitDescription = ref([]);

onMounted(() => {
    splitDescription.value = formatParagraphs(props.description);
    // const card = document.querySelector('.scrum-card[data-name="' + props.title + '"]');

    // const scrumCardAnimation = gsap.to(card, {
    //     paused: true,
    //     scale: 1.03,
    //     duration: 0.2,
    // })

    // card.addEventListener("mouseenter", () => {
    //     scrumCardAnimation.play();
    // });

    // card.addEventListener("mouseleave", () => {
    //     scrumCardAnimation.reverse();
    // });
})


</script>

<style>
body:has(#scrum-modal) {
    overflow-y: hidden;
}

#scrum-modal {
    transition: all 0.5s;
}

.scrum-bg {
    transition: all 0.5s;
}

.scrum-modal-content {
    transition: all 0.5s;
}

#scrum-modal.scrum-modal-enter-from .scrum-bg {
    opacity: 0;
}

#scrum-modal.scrum-modal-enter-from .scrum-modal-content {
    opacity: 0;
    transform: scale(0.5);
}

#scrum-modal.scrum-modal-enter-to .scrum-bg {
    opacity: 0.5;
}

#scrum-modal.scrum-modal-enter-to .scrum-modal-content {
    opacity: 1;
    transform: scale(1);
}

#scrum-modal.scrum-modal-leave-from .scrum-bg {
    opacity: 0.5;
}

#scrum-modal.scrum-modal-leave-from .scrum-modal-content {
    opacity: 1;
    transform: scale(1);
}

#scrum-modal.scrum-modal-leave-to .scrum-bg {
    opacity: 0;
    z-index: -1;
}

#scrum-modal.scrum-modal-leave-to .scrum-modal-content {
    opacity: 0;
    transform: scale(0.5);
    z-index: -1;
}
</style>