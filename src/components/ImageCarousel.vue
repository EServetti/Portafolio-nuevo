<script setup lang="ts">
import { ChevronLeft, ChevronRight } from '@lucide/vue';
import { computed, ref } from 'vue';

interface Props {
    type: "laptop" | "phone",
    images: string[]
}

const props = defineProps<Props>()
const imagesWIthIndexes = props.images.map((i, index) => ({ index, image: i }))
const direction = ref<"prev" | "next">("next")
const currentIndex = ref(0)
const currentImage = computed(() => imagesWIthIndexes.find(img => img.index === currentIndex.value));

const handleIndex = (action: "increase" | "decrease") => {
    direction.value = action === "decrease" ? "prev" : "next"
    if (action === "decrease") {
        if (currentIndex.value === 0) return
        return currentIndex.value = currentIndex.value - 1
    }

    if (currentIndex.value + 1 >= imagesWIthIndexes.length) {
        return currentIndex.value = 0
    }

    currentIndex.value = currentIndex.value + 1
}

</script>

<template>
    <!-- carrusel de laptop -->
    <div v-if="props.type === 'laptop'"></div>
    <!-- carrusel de celulares -->
    <div v-else-if="props.type === 'phone'"
        class="w-full max-w-[350px] relative flex items-center justify-center aspect-[9/14] bg-gray-800">
        <Transition :name="`slide-${direction}`" mode="out-in">
            <img :src="currentImage?.image" :alt="`screenshot-${currentIndex}`" :key="currentIndex"
                class="w-[70%] rounded-xl">
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
</style>