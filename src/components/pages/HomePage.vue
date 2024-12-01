<template>
    <OverlayLoader />
    <HeaderDesktop />
    <main class="min-h-screen p-24 relative flex justify-center">
        <div class="flex flex-row justify-center items-center gap-8 mx-auto">
            <ProfilePicture />
            <TitleLandingPage />
        </div>
        <ScrollButton />
    </main>
</template>

<script setup>
import HeaderDesktop from '../templates/HeaderDesktop.vue';
import ProfilePicture from '../molecules/ProfilePicture.vue';
import TitleLandingPage from '../molecules/TitleLandingPage.vue';
import ScrollButton from '../molecules/ScrollButton.vue';
import OverlayLoader from '../molecules/OverlayLoader.vue';
import gsap from 'gsap';
import { onMounted } from 'vue';
import SplitType from 'split-type'

onMounted(() => {
    const titleText = new SplitType('.landing-page-title', { types: 'chars' });
    const titleChars = titleText.chars;
    
    const tl = gsap.timeline();

    tl.to('.bar', {
        duration: 1.5,
        delay: 0,
        height: 0,
        stagger: {
            amount: 0.5
        },
        ease: 'power4.out',
        onComplete: () => {
            document.querySelector('.overlay-loader').style.display = 'none';
        }
    }).fromTo(titleChars,
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1,
            ease: 'power4.out',
        }
        , '-=1.5')
        .fromTo('.description-underline',
            { width: '0%' },
            { width: '100%', duration: 1, ease: 'power2.out' },
            '-=1.5'
        )
        .fromTo('.description-underline-arrow',
            { width: '0%' },
            { width: '30px', duration: 0.7, ease: 'bounce.out' },
            '-=0.5'
        )
        .fromTo(".drop-expand",
            { top: "-60px", opacity: 0, scaleX: 0.1 },
            { top: "20px", opacity: 1, scaleX: 1, duration: 1.5, ease: "bounce.out" },
            '<'
        )

})
</script>