<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { projectsList } from '../constants/projects';
import { formatFilePath } from '../utils/helpers';
import ImageCarousel from '../components/ImageCarousel.vue';

interface AppUrl {
    type: "web" | "app_store" | "play_store" | "git_hub",
    url: string,
    label?: string
}

interface AppScreenshot {
    type: "laptop" | "phone",
    url: string;
}

interface Tool {
    label: string;
    countInStats: boolean;
    type?: "frontend" | "backend" | "database"
}

export interface Project {
    id: string;
    title: string;
    description: string;
    screenshots: AppScreenshot[];
    urls?: AppUrl[];
    tools: Tool[];
    lang: string;
}

const route = useRoute();
const projectId = computed(() => route.params.id);

const project = computed(() => projectsList.find(p => p.id === projectId.value))
const projectScreenshots = computed(() => project?.value?.screenshots.map(ss => ({ type: ss.type, url: formatFilePath(ss.url) })))
const projectHasLinks = project.value?.urls && project.value?.urls.length > 0

const getUrlLabel = (url: AppUrl) => {
    if (url.label) return url.label;

    switch (url.type) {
        case "web":
            return "Ver proyecto";
        case "git_hub":
            return "Repositorio de GitHub"
        case "app_store":
            return "Descargar en la AppStore"
        case "play_store":
            return "Descargar en Play Store"
        default:
            return "Ver proyecto"
    }
}
const getButtonIcon = (type: "web" | "app_store" | "play_store" | "git_hub") => {
    switch (type) {
        case "web":
            return "../assets/icons/web.png";
        case "git_hub":
            return "../assets/icons/github.png";
        case "app_store":
            return "../assets/icons/apple.png";
        case "play_store":
            return "../assets/icons/playstore.png"
        default:
            return "../assets/icons/web.png";
    }
}

</script>

<template>
    <div class="w-full flex flex-col p-6 lg:flex-row lg:px-30 gap-5">
        <!-- datos de la app -->
        <div class="flex-2 min-w-0 flex flex-col justify-start items-start gap-5">
            <span>
                <h1 class="font-bold text-lg lg:text-xl">{{ project?.title }}</h1>
                <p class="font-light text-sm text-gray-600">{{ project?.lang }}</p>
            </span>
            <p class="max-w-[600px]">{{ project?.description }}</p>
            <!-- links -->
            <section v-if="projectHasLinks" class="flex gap-5">
                <a :href="link.url"
                    class="flex items-center gap-2 cursor-pointer border-t-0 p-2 rounded-lg shadow-xl text-sky-700 hover:underline"
                    v-for="link in project?.urls" :key="link.url">
                    <img class="w-[25px]" :src="formatFilePath(getButtonIcon(link.type))" alt="icon">
                    <p>{{ getUrlLabel(link) }}</p>
                </a>
            </section>
            <!-- herramientas -->
            <h3 class="font-semibold">Herramientas utilizadas</h3>
            <section class="flex gap-5 overflow-x-auto w-full min-h-fit">
                <span
                    :class="['cursor-default font-semibold shrink-0', tool.type === 'backend' ? 'text-green-800' : tool.type === 'frontend' ? 'text-blue-800' : 'text-orange-800']"
                    v-for="tool in project?.tools" :key="tool.label">
                    {{ tool.label }}
                </span>
            </section>
        </div>
        <!-- carrusel de imagenes -->
        <div v-if="projectScreenshots && projectScreenshots.length > 0"
            :class="['flex justify-center', projectScreenshots[0].type === 'laptop' ? 'flex-2' : 'flex-1']">
            <ImageCarousel :type="projectScreenshots[0].type || 'laptop'"
                :images="projectScreenshots?.map(ps => ps.url)" />
        </div>
    </div>
</template>