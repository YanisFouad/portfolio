<template>
    <div class="absolute bottom-10 left-0 w-full scroll-action flex flex-col items-center">
        <svg-icon type="mdi" :path="mdiMouseScrollWheel" class="size-11"></svg-icon>
        <svg-icon type="mdi" :path="mdiChevronDown" class="size-11 animate-bounce"></svg-icon>
    </div>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiChevronDown, mdiMouseScrollWheel } from '@mdi/js';

</script>
