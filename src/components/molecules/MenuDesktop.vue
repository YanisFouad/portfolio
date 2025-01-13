<template>
    <nav>
        <ul class="flex flex-row gap-6">
            <li v-for="navItem in props.navItems" :key="navItem.title"
                class="relative before:absolute before:-bottom-1 before:w-0 before:bg-secondary-dark before:h-1 hover:before:block hover:before:w-full before:transition-all before:ease-out before:duration-200"
                :class="navItem.id == activeLink ? 'before:block before:w-full transition-all ease-out duration-200' : ''">
                <RouterLink  :to="navItem.url">
                    {{ t(navItem.title) }}
                </RouterLink >
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const activeLink = ref(null);

const props = defineProps({
    navItems: {
        type: Array,
        required: true,
    },
});

const scrollMenu = () => {
    const menuSection = props.navItems.map((navItem) => document.getElementById(navItem.id));
    const scrollPosition = window.scrollY + 100;

    menuSection.forEach((section) => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            activeLink.value = section.id;
        }
    })
}

onMounted(() => {
    window.addEventListener('scroll', scrollMenu);
})

onUnmounted(() => {
    window.removeEventListener('scroll', scrollMenu);
})

</script>