<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useLang } from "./composables/useLang";
import { onMounted } from 'vue';

const { initLang } = useLang();

onMounted(() => {
  initLang();
})
</script>