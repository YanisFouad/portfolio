<template>
  <div id="theme-switcher" @click="toggleTheme" class="cursor-pointer flex justify-center w-8 h-8">
    <svg-icon
      type="mdi"
      :path="mdiMoonWaxingCrescent"
      class="dark:hidden block fill-black w-full h-full"
    ></svg-icon>
    <svg-icon
      type="mdi"
      :path="mdiWeatherSunny"
      class="dark:block hidden fill-white w-full h-full"
    ></svg-icon>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMoonWaxingCrescent, mdiWeatherSunny } from '@mdi/js'
import { useTheme } from '@/composables/useTheme';

const { theme, toggleTheme } = useTheme();

</script>
