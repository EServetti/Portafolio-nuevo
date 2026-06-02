<script setup lang="ts">
import SkillCard from '../components/SkillCard.vue';
import { skillCategories } from '../constants/tools';
</script>

<template>
    <div class="w-full flex flex-col lg:flex-row p-6">
        <!-- seccion habilidades blandas -->
        <section class="p-4 flex flex-col gap-4 flex-1">
            <h1 class="font-bold text-lg lg:text-xl">Habilidades blandas</h1>

            <p>Creo que las habilidades blandas son muy importantes en el mundo del desarrollo de software (y del
                desarrollo de productos en general).
                <br>
                A lo largo de mi vida, he participado en diversos entornos, como la escuela, la universidad, el deporte,
                etc., donde he desarrollado y sigo desarrollando mis habilidades.
                <br>
                A continuación, presento una lista de las que considero más relevantes.
            </p>
            <ul class="font-semibold">
                <li class="list-disc list-inside">Nivel avanzado de inglés.</li>
                <li class="list-disc list-inside">Trabajo en equipo.</li>
                <li class="list-disc list-inside">Buena comunicación.</li>
                <li class="list-disc list-inside">Liderazgo.</li>
                <li class="list-disc list-inside">Autodidacta.</li>
                <li class="list-disc list-inside">Adaptabilidad.</li>
                <li class="list-disc list-inside">Inteligencia emocional.</li>
            </ul>
        </section>
        <!-- seccion habilidades tecnicas -->
        <section class="p-4 flex flex-col gap-4 flex-1">
            <h1 class="font-bold text-lg lg:text-xl">Habilidades técnicas</h1>
            <p>Me especializo en el desarrollo de software (aunque me interesaría adentrarme en la programación de bajo
                nivel en un futuro), he trabajado en aplicaciones web y móviles desde el lado de la interfaz y del
                servidor.
                <br>
                Sé crear servidores modularizados y seguros con Express y también puedo trabajar en proyectos serverless
                utilizando herramientas como Supabase, puedo manejar bases de datos SQL y NoSQL.
                <br>
                A continuación hay una lista de las herramientas con las que más he trabajado en proyectos personales y
                trabajo:
            </p>
            <div class="md:grid grid-cols-2 gap-2">
                <SkillCard v-for="cat in skillCategories" :key="cat.title"
                    :title="cat.title" :tools="cat.tools" />
            </div>
        </section>
    </div>
</template>
