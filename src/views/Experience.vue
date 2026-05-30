<script setup lang="ts">
import { Calendar1, CalendarClock, Loader, LocationEdit, Watch } from '@lucide/vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

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
        <section v-if="!routeHash || routeHash === '#uni'"
            class="w-full flex flex-col justify-center items-start md:flex-row lg:w-fit">
            <!-- logo y datos -->
            <div
                class="flex gap-2 items-center justify-start mb-4 md:flex-col md:justify-center md:items-start lg:ml-[150px]">
                <span class="w-[100px] aspect-square">
                    <img class="rounded-full" src="../assets/icons/utn-logo.png" alt="utn-logo">
                </span>
                <ul class="text-xs md:text-base flex flex-col md:gap-2">
                    <li class="flex gap-2 items-center">
                        <LocationEdit />Villa María, Córdoba, Argentina
                    </li>
                    <li class="flex gap-2 items-center">
                        <CalendarClock />2 años
                    </li>
                    <li class="flex gap-2 items-center">
                        <Loader />En proceso
                    </li>
                    <li class="flex gap-2 items-center">
                        <Calendar1 />08/2024
                    </li>
                </ul>
            </div>
            <!-- titulo, descripcion y diploma -->
            <div class="w-full flex flex-col items-center">
                <h1 class="text-sm md:text-xl lg:text-2xl font-bold mb-2">Tecnicatura superior en programación</h1>
                <p class="text-xs md:text-base mb-2 max-w-[800px]">Es una carrera universitaria de pregrado que tiene
                    como finalidad capacitar a las personas con
                    conocimiento técnico en área de programación. Considerando a la programación como rama fundamental
                    en el desarrollo de los sistemas informáticos. En la actualidad, en función del desarrollo
                    tecnológico y la globalización del conocimiento se muestra un marcado crecimiento en el uso de los
                    sistemas programables tanto en las áreas comerciales, industriales y de servicios ofreciendo a los
                    egresados una rápida salida laboral con una fuerte inserción en el medio.
                    <a class="text-sky-800"
                        href="https://www.frvm.utn.edu.ar/oferta-academica/tecnicatura-superior-programacion">Ver
                        más.</a>
                </p>
                <div class="w-full max-w-[800px]">
                    <h3 class="text-xs md:text-lg lg:text-xl font-bold mb-2">Diploma</h3>
                    <!-- placeholder de diploma -->
                    <div class="w-full aspect-video border bg-gray-900 rounded-lg flex items-center justify-center flex-col gap-2 text-white">
                            <span>Proximamente...</span>
                            <Loader class="animate-spin  [animation-duration:2000ms] text-blue-500" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>