<script setup lang="ts">
import type { ToolSkills } from '../constants/tools';

defineProps<{
    title: string;
    tools: ToolSkills[];
}>()

const getLevelColor = (level: string) => {
    switch (level) {
        case "avanzado":
            return "text-sky-800"
        case "muy bueno":
            return "text-green-800"
        case "bueno":
            return "text-green-500"
        case "básico":
            return "text-yellow-800"
        default:
            return ""
    }
}
</script>

<template>
    <div class="py-2 px-4 shadow-md rounded">
        <h3 class="font-bold">{{ title }}</h3>
        <div class="grid grid-cols-2">
            <div class="flex flex-col divide-y divide-black">
                <span v-for="tool in tools" :key="tool.label">
                    {{ tool.label }}
                </span>
            </div>
            <div class="flex flex-col divide-y divide-black">
                <span v-for="tool in tools" :key="tool.label"
                    :class="['font-semibold', getLevelColor(tool.level)]">
                    {{ tool.level }}
                </span>
            </div>
        </div>
    </div>
</template>
