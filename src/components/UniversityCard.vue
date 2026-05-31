<script setup lang="ts">
import { Calendar1, CalendarClock, Loader, LocationEdit } from '@lucide/vue';
import { ref } from 'vue';
import { formatFilePath } from '../utils/helpers';

export interface UniversityCard {
    logoUrl: string;
    location: string;
    duration: string;
    status: string;
    startDate: string;
    title: string;
    description: string;
    seeMoreUrl?: string;
    diplomaUrl?: string
}

const params = defineProps<UniversityCard>()

const logo = formatFilePath(params.logoUrl)
const diploma = params.diplomaUrl ? formatFilePath(params.diplomaUrl) : ''

const showDiplomaModal = ref(false)

</script>
<template>
    <div class="flex flex-col justify-center items-start md:flex-row gap-4">
        <!-- logo y datos -->
        <div
            class="flex gap-2 items-center justify-start mb-4 md:flex-col md:justify-center md:items-start lg:ml-[150px]">
            <span class="w-[100px] aspect-square">
                <img class="rounded-full shadow-md" :src="logo" alt="logo">
            </span>
            <ul class="text-xs md:text-base flex flex-col md:gap-2">
                <li class="flex gap-2 items-center">
                    <LocationEdit />{{ params.location }}
                </li>
                <li class="flex gap-2 items-center">
                    <CalendarClock />{{ params.duration }}
                </li>
                <li class="flex gap-2 items-center">
                    <Loader />{{ params.status }}
                </li>
                <li class="flex gap-2 items-center">
                    <Calendar1 />{{ params.startDate }}
                </li>
            </ul>
        </div>
        <!-- titulo, descripcion y diploma -->
        <div class="w-full flex flex-col items-center">
            <h1 class="text-sm md:text-xl lg:text-2xl font-bold mb-2">{{ params.title }}</h1>
            <p class="text-xs md:text-base mb-2 max-w-[800px]">{{ params.description }}
                <a v-if="params.seeMoreUrl" class="text-sky-800" :href="params.seeMoreUrl">Ver
                    más.</a>
            </p>
            <div class="w-full max-w-[800px]">
                <h3 class="text-xs md:text-lg lg:text-xl font-bold mb-2">Diploma</h3>
                <!-- diploma real -->
                <div v-if="params.diplomaUrl" @click="showDiplomaModal = true"
                    class="w-full aspect-video border bg-gray-900 rounded-lg flex items-center justify-center cursor-pointer">
                    <img class="h-[90%]" :src="diploma" alt="">
                </div>
                <!-- placeholder de diploma -->
                <div v-else
                    class="w-full aspect-video border bg-gray-900 rounded-lg flex items-center justify-center flex-col gap-2 text-white">
                    <span>Proximamente...</span>
                    <Loader class="animate-spin  [animation-duration:2000ms] text-blue-500" />
                </div>
            </div>
        </div>
    </div>

    <!-- modulo de diploma -->
    <Teleport to="body">
        <Transition name="modal-fade">
            <div v-if="showDiplomaModal" @click="showDiplomaModal = false"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 cursor-pointer">
                <img @click.stop :src="diploma" alt="diploma"
                    class="max-w-[90vw] max-h-[90vh] object-contain cursor-default">
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 200ms ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}
</style>