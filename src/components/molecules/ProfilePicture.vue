<template>
    <section>
        <AtomCircle class="circle-2 max-w-144 w-full">
            <AtomCircle class="circle-1 w-full h-full">
                <AtomProfilePicture />
            </AtomCircle>
        </AtomCircle>
    </section>
</template>

<script setup>
import AtomProfilePicture from '../atoms/AtomProfilePicture.vue';
import AtomCircle from '../atoms/AtomCircle.vue';
</script>