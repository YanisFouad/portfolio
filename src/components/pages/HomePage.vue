<template>
    <HeaderDesktop />
    <main>
        <OverlayLoader />
        <section id="home" class="flex flex-row justify-center items-center gap-8 mx-auto min-h-screen">
            <ProfilePicture />
            <TitleLandingPage />
        </section>
        <ScrollButton />
        <AboutSection />
        <SprintScrum />
        <CompetencesSection />
        <ProjectsSectionHome />
        <ContactSection />
    </main>
    <FooterDesktop />
</template>

<script setup>
import HeaderDesktop from '../templates/HeaderDesktop.vue';
import ProfilePicture from '../molecules/ProfilePicture.vue';
import TitleLandingPage from '../molecules/TitleLandingPage.vue';
import ScrollButton from '../molecules/ScrollButton.vue';
import OverlayLoader from '../molecules/OverlayLoader.vue';
import SprintScrum from '../templates/scrum/SprintScrum.vue';
import gsap from 'gsap';
import { onMounted } from 'vue';
import SplitType from 'split-type'
import AboutSection from '../templates/about/AboutSection.vue';
import CompetencesSection from '../templates/competences/CompetencesSection.vue';
import ProjectsSectionHome from '../templates/projects/ProjectsSectionHome.vue';
import FooterDesktop from '../templates/FooterDesktop.vue';
import ContactSection from '../templates/contact/ContactSection.vue';

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
            { top: "20px", opacity: 1, scaleX: 1, duration: 1.5, ease: "power2.out" },
            '<'
        )

    gsap.fromTo('.top-competence .competence', {
        width: 200,
        opacity: 0
    }, {
        opacity: 1,
        width: "50%",
        duration: 2.5,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.top-competence',
            start: '-100 90%',
            scrub: 1,
            end: '250 50%'
        },
    })

    gsap.fromTo('.top-competence .competence .first-sub-competence', {
        opacity: 0,
        bottom: -200,
    }, {
        opacity: 1,
        bottom: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.competence',
            start: '15% 90%',
            scrub: 1,
            end: '50% 50%'
        },
    })

    gsap.fromTo('.top-competence .competence .last-sub-competence', {
        opacity: 0,
        bottom: -200
    }, {
        opacity: 1,
        bottom: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.top-competence .competence .first-sub-competence',
            start: '15% 90%',
            scrub: 1,
            end: '50% 50%'
        }
    })

    gsap.fromTo('.competence-bottom .competence .competence-title', {
        opacity: 0,
        bottom: -200
    }, {
        opacity: 1,
        bottom: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '#competences',
            start: '50% 90%',
            scrub: 1,
            end: '50% 50%'
        }
    })

    gsap.fromTo('.competence-bottom .competence .last-sub-competence', {
        opacity: 0,
        bottom: -200
    }, {
        opacity: 1,
        bottom: 0,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '#competences',
            start: '60% 90%',
            scrub: 1,
            end: '50% 50%'
        }
    })

    gsap.fromTo('.column-scrum', {
        opacity: 0,
        bottom: -250
    }, {
        opacity: 1,
        bottom: 0,
        duration: 5,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.column-scrum',
            start: 'top-=300 90%',
            scrub: 2,
            end: '30% 50%'
        },
        stagger: 0.5
    })

    gsap.fromTo('.project-teaser', {
        opacity: 0,
        y: 300,
        scale: 0.8
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 15,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '#projects',
            start: 'top-=300 90%',
            scrub: 1,
            end: 'bottom 50%'
        },
        stagger: 4
    })
})
</script>