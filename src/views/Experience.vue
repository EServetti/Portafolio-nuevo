<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import UniversityCard from '../components/UniversityCard.vue';
import { universityCards } from '../constants/university.ts';
import WorkCard from '../components/WorkCard.vue';
import { workCards } from '../constants/work.ts';
import { coursesCards } from '../constants/courses.ts';

const route = useRoute()
const routeHash = computed(() => route.hash)
</script>
<template>
    <div class="flex flex-col items-center p-4">
        <!-- barra de navegacion -->
        <nav class="w-full flex justify-end m gap-3 py-4 px-6 flex-wrap">
            <a href="#uni"
                :class="['text-sky-800 cursor-pointer hover:underline hover:opacity-70 text-lg', !routeHash || routeHash === '#uni' ? 'font-bold' : '']">Universidad</a>
            <a href="#courses"
                :class="['text-sky-800 cursor-pointer hover:underline hover:opacity-70 text-lg', routeHash === '#courses' ? 'font-bold' : '']">Cursos</a>
            <a href="#work"
                :class="['text-sky-800 cursor-pointer hover:underline hover:opacity-70 text-lg', routeHash === '#work' ? 'font-bold' : '']">Experiencia
                Laboral</a>
        </nav>
        <hr class="w-full mb-3">
        <!-- seccion universidad -->
        <section v-if="!routeHash || routeHash === '#uni'" class="w-full flex flex-col gap-5 lg:w-fit">
            <UniversityCard v-for="card in universityCards" :title="card.title" :description="card.description"
                :see-more-url="card.seeMoreUrl" :location="card.location" :duration="card.duration"
                :status="card.status" :start-date="card.startDate" :logo-url="card.logoUrl"
                :diploma-url="card.diplomaUrl" />
        </section>
        <!-- seccion cursos -->
        <section v-if="routeHash === '#courses'" class="w-full flex flex-col gap-5 lg:w-fit">
            <UniversityCard v-for="card in coursesCards" :title="card.title" :description="card.description"
                :see-more-url="card.seeMoreUrl" :location="card.location" :duration="card.duration"
                :status="card.status" :start-date="card.startDate" :logo-url="card.logoUrl"
                :diploma-url="card.diplomaUrl" />
        </section>
        <!-- seccion experiencia laboral -->
        <section v-if="routeHash === '#work'" class="w-full flex flex-col gap-5 lg:w-fit">
            <WorkCard v-for="card in workCards" :title="card.title" :description="card.description"
                :see-more-url="card.seeMoreUrl" :location="card.location" :duration="card.duration"
                :status="card.status" :start-date="card.startDate" :logo-url="card.logoUrl"
                :diploma-url="card.diplomaUrl" />
        </section>
    </div>
</template>