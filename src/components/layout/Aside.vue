<script setup lang="ts">
import { Menu } from '@lucide/vue';
import { ref } from 'vue';

const expandAside = ref(false);

// Lista que contiene los nombres y ids de los proyectos
interface ProyectLabel {
    id: string;
    label: string
}
const proyectsList: ProyectLabel[] = [
    { id: "fyb-app", label: "Find Your Books App" },
    { id: "gw", label: "GatherWell" },
    { id: "sc", label: "SmartChef" },
    { id: "mf", label: "My Flicks" },
    { id: "ait", label: "AI Trainer" },
    { id: "fyb", label: "Find Your Books" },
    { id: "efyh", label: "Everything for your home" },
]

</script>

<template>
    <aside :class="[
        'fixed z-1000 left-0 top-0 md:relative h-screen md:h-auto bg-white flex flex-col items-center text-sm pb-2 overflow-x-hidden overflow-y-auto transition-all duration-300 ease-in-out shadow-xl',
        expandAside ? 'w-[20%] min-w-[200px]' : 'w-16 !bg-transparent !shadow-none md:!shadow-xl  md:bg-white'
    ]">
        <span class="w-full pt-6 p-4 flex items-center shrink-0">
            <button class="cursor-pointer" @click="expandAside = !expandAside">
                <Menu />
            </button>
        </span>

        <Transition name="fade">
            <div v-if="expandAside" class="w-full flex flex-col items-center">
                <section class="flex justify-center items-center mb-4 w-full">
                    <img src="https://media.licdn.com/dms/image/v2/D4E03AQFKxiFCT-_Lvw/profile-displayphoto-shrink_400_400/B4EZdgI75AHsAg-/0/1749664645404?e=1781740800&v=beta&t=GnQhr038uY30DEzDFreIGwQdSuzqGK_S9z6eanwVFm0"
                        alt="Emilio Servetti" class="rounded-full w-[70%] max-w-[250px] aspect-square">
                </section>
                <hr class="my-2 w-[90%]">
                <section class="w-[90%]">
                    <ul>
                        <!-- Seccion experiencia -->
                        <li class="bold text-lg">Educacion y Experiencia</li>
                        <section class="pl-2">
                            <p>Estoy en el desarrollo de software desde el año 2024, tengo experiencia universitaria, en
                                proyectos propios y trabajando.
                                <RouterLink :to="{ name: 'Experience' }" class="text-sky-800 hover:opacity-70">Ver más
                                </RouterLink>
                            </p>
                        </section>
                        <hr class="my-2">
                        <!-- Seccion habilidades -->
                        <li class="bold text-lg">Habilidades</li>
                        <section class="pl-2">
                            <p>Cuento con varias habilidades técnicas y blandas desarrolladas a travez de mis años de
                                experiencia en proyectos personales, la universidad y el trabajo.
                                <RouterLink :to="{ name: 'Skills' }" class="text-sky-800 hover:opacity-70">Ver más
                                </RouterLink>
                            </p>
                        </section>
                        <hr class="my-2">
                        <!-- Seccion proyectos -->
                        <li class="bold text-lg">Proyectos</li>
                        <section
                            class="flex flex-col gap-2 pl-2 text-sky-800 max-h-[150px] overflow-y-auto scroll-smooth">
                            <RouterLink v-for="project in proyectsList"
                                :to="{ name: 'Product', params: { id: project.id } }" class="hover:opacity-70">{{
                                project.label }}</RouterLink>
                        </section>
                        <hr class="my-2">
                        <!-- Seccion contacto -->
                        <li class="bold text-lg">Contacto</li>
                        <section class="flex flex-col pl-2 text-sky-800">
                            <span class="flex gap-2 items-center">
                                <img src="../../assets/icons/linkedin.png" class="w-4" alt="Linkedin">
                                <a href="https://www.linkedin.com/in/emilio-servetti-programming/"
                                    class="hover:opacity-70">Linkedin</a>
                            </span>
                            <div class="group relative flex w-min">
                                <span class="flex gap-2 items-center">
                                    <img src="../../assets/icons/gmail.png" class="w-4" alt="Gmail">
                                    <a href="mailto:servettiemilio1@gmail.com" class="hover:opacity-70">Email</a>
                                </span>
                                <!-- tooltip para ver el email -->
                                <span
                                    class="absolute top-full mb-2 hidden group-hover:block w-auto whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white shadow-lg">servettiemilio1@gmail.com</span>
                            </div>
                            <span class="flex gap-2 items-center">
                                <img src="../../assets/icons/github.png" class="w-4" alt="GitHub">
                                <a href="https://github.com/EServetti" class="hover:opacity-70">GitHub</a>
                            </span>
                        </section>
                    </ul>
                </section>
            </div>
        </Transition>
    </aside>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>