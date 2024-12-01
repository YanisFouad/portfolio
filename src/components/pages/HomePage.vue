<template>
    <h1>Test</h1>
    <AtomLink url="https://www.google.com" text="Google" />
    <AtomIcon iconName="mdiAbTesting" />
    <AtomButton type="primary" href="/test">Primary</AtomButton>
    <AtomButton type="secondary" href="/test" target="_blank">Secondary</AtomButton>
    <ThemeSwitcher />
    <NavBarDesktop />
    <LangSwitcher />
</template>

<script setup>
import AtomLink from '../atoms/AtomLink.vue';
import AtomButton from '../atoms/AtomButton.vue';
import ThemeSwitcher from '../molecules/ThemeSwitcher.vue';
import NavBarDesktop from '../molecules/NavBarItems.vue';
import LangSwitcher from '../molecules/LangSwitcher.vue';
</script>