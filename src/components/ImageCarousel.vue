<script setup lang="ts">
import { ChevronLeft, ChevronRight } from '@lucide/vue';
import { computed, ref, watch } from 'vue';

interface Props {
    type: "laptop" | "phone",
    images: string[]
}

const props = defineProps<Props>()
const imagesWIthIndexes = computed(() => props.images.map((i, index) => ({ index, image: i })))
const direction = ref<"prev" | "next">("next")
const currentIndex = ref(0)
const currentImage = computed(() => imagesWIthIndexes.value?.find(img => img.index === currentIndex.value));

// actualizar el index a 0 cuando cambian las screenshots
watch((imagesWIthIndexes), (_) => {
    currentIndex.value = 0
}, {immediate: true, deep: true})

const showScreenshotModal = ref(false)

const handleIndex = (action: "increase" | "decrease") => {
    direction.value = action === "decrease" ? "prev" : "next"
    if (action === "decrease") {
        if (currentIndex.value === 0) {
            return currentIndex.value = imagesWIthIndexes.value?.length - 1
        }
        return currentIndex.value = currentIndex.value - 1
    }

    if (currentIndex.value + 1 >= imagesWIthIndexes.value?.length) {
        return currentIndex.value = 0
    }

    currentIndex.value = currentIndex.value + 1
}

</script>

<template>
    <!-- carrusel de laptop -->
    <div v-if="props.type === 'laptop'" class="w-full relative flex items-center justify-center aspect-video bg-gray-800">
        <Transition :name="`slide-${direction}`" mode="out-in">
            <img @click="showScreenshotModal = true" :src="currentImage?.image" :alt="`screenshot-${currentIndex}`" :key="currentIndex"
                class="w-[90%] rounded-xl cursor-pointer">
        </Transition>
        <!-- botones de navegacion -->
        <div class="absolute top-[50%] -translate-y-[50%] left-0 w-full flex justify-between">
            <span @click="handleIndex('decrease')">
                <ChevronLeft class="text-white cursor-pointer" />
            </span>
            <span @click="handleIndex('increase')">
                <ChevronRight class="text-white cursor-pointer" />
            </span>
        </div>
    </div>
    <!-- carrusel de celulares -->
    <div v-else-if="props.type === 'phone'"
        class="w-full max-w-[350px] relative flex items-center justify-center aspect-[9/14] bg-gray-800">
        <Transition :name="`slide-${direction}`" mode="out-in">
            <img @click="showScreenshotModal = true" :src="currentImage?.image" :alt="`screenshot-${currentIndex}`" :key="currentIndex"
                class="w-[70%] rounded-xl cursor-pointer">
        </Transition>
        <!-- botones de navegacion -->
        <div class="absolute top-[50%] -translate-y-[50%] left-0 w-full flex justify-between">
            <span @click="handleIndex('decrease')">
                <ChevronLeft class="text-white cursor-pointer" />
            </span>
            <span @click="handleIndex('increase')">
                <ChevronRight class="text-white cursor-pointer" />
            </span>
        </div>
    </div>

    <!-- modulo de screenshot -->
    <Teleport to="body">
        <Transition name="modal-fade">
            <div v-if="showScreenshotModal" @click="showScreenshotModal = false"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 cursor-pointer">
                <img @click.stop :src="currentImage?.image" alt="screenshot"
                    class="max-w-[90vw] max-h-[90vh] object-contain cursor-default">
            </div>
        </Transition>
    </Teleport>
</template>

<style>
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
    transition: transform 400ms ease, opacity 420ms ease;
}

/* Hacia adelante: nuevo entra desde la derecha, viejo sale por la izquierda */
.slide-next-enter-from {
    transform: translateX(50px);
    opacity: 0;
}

.slide-next-leave-to {
    transform: translateX(-50px);
    opacity: 0;
}

/* Hacia atrás: invertido */
.slide-prev-enter-from {
    transform: translateX(-50px);
    opacity: 0;
}

.slide-prev-leave-to {
    transform: translateX(50px);
    opacity: 0;
}

/* Animación modal de screenshots */
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 200ms ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}
</style>