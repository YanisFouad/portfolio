<template>
    <nav>
        <ul class="flex flex-row gap-6">
            <li v-for="navItem in props.navItems" :key="navItem.title" class="relative before:absolute before:-bottom-1 before:w-0 before:bg-secondary-dark before:h-1 hover:before:block hover:before:w-full before:transition-all before:ease-out before:duration-200">
                <router-link :to="navItem.url">
                    {{ navItem.title }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const props = defineProps({
    navItems: {
        type: Array,
        required: true,
    },
});
</script>