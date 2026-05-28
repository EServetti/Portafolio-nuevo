<script setup lang="ts">
import { Bar, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { firstUseDates, toolsUsageInProyects } from '../constants/toolsUsage'
import { calculateAge, calculateTime } from '../utils/helpers'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

const age = calculateAge("2006-05-05")

// datos para grafico de barras
const barChartData = {
    labels: firstUseDates.map(fu => fu.label),
    datasets: [
        {
            label: "Años de experiencia",
            data: firstUseDates.map(fu => calculateTime(fu.date)),
            backgroundColor: '#0369a1'
        }
    ]
}

const barCharOpt = {
    responsive: true,
    maintainAspectRatio: false,   
    indexAxis: 'y' as const
}

// paletas de color por categoria — tonos del mismo hue dentro de cada una
const categoryPalettes: Record<string, string[]> = {
    frontend: ['#0c4a6e', '#075985', '#0369a1', '#0284c7', '#0ea5e9', '#38bdf8'],
    backend: ['#14532d', '#16a34a'],
    database: ['#92400e', '#d97706', '#fbbf24']
}

// para cada herramienta, tomar el siguiente color disponible de su paleta
const doughnutColors = (() => {
    const counters: Record<string, number> = {}
    return toolsUsageInProyects.map(tool => {
        counters[tool.category] = counters[tool.category] ?? 0
        return categoryPalettes[tool.category][counters[tool.category]++]
    })
})()

// datos para grafico de dona
const doughnutChartData = {
    labels: toolsUsageInProyects.map(tu => tu.label),
    datasets: [
        {
            label: "Proyectos por herramienta",
            data: toolsUsageInProyects.map(tu => tu.times),
            backgroundColor: doughnutColors
        }
    ]
}

const doughnutChartOpt = {
    responsive: true,
    maintainAspectRatio: false,  
    plugins: {
        legend: { position: 'right' as const }
    }
}
</script>


<template>
    <div class="flex flex-col items-center p-4">
        <div class="flex flex-col md:flex-row">
            <!-- Seccion presentacion -->
            <div class="flex-1 p-4">
                <h1 class="text-lg font-semibold">Un poco de mi historia</h1>
                <p>Mi nombre es Emilio Servetti tengo {{ age }} años, soy desarrollador de software fullstack y nací y
                    vivo en Argentina. <br>
                    Empezé a programar cuando terminé el secundario en 2024 con un curso de backend
                    con Node.js, en agosto de ese mismo año empezé la carrera de tecnicatura en programación en la UTN,
                    la cual termino en 2026, tengo varios proyectos fullstack usando variadas tecnologías de frontend,
                    backend y bases de datos. <br>
                    Te invito a explorar detalladamente mi portafolio para ver mucho más.</p>
            </div>
            <!-- Seccion proyectos actuales -->
            <div class="flex-1 p-4">
                <h1 class="text-lg font-semibold">Actualidad</h1>
                <p>Actualmente me encuentro trabajando de manera remota para <a class="text-sky-700"
                        href="https://www.truentlabs.com/">TruentLabs</a> desde agosto de 2025,
                    mi "side-project" más reciente, es
                    <RouterLink class="text-sky-700" :to="{ name: 'Product', params: { id: 'fyb-app' } }">Find Your
                        Books</RouterLink> una app dedicada a los lectores que no saben cual debe ser su próximo libro.
                    <br>
                    Puedes leer más sobre mi experiencia en la sección
                    de <RouterLink class="text-sky-700" :to="{ name: 'Experience' }">Experiencia</RouterLink>
                    o sobre mis habilidades en <RouterLink class="text-sky-700" :to="{ name: 'Skills' }">Habilidades.
                    </RouterLink>
                </p>
            </div>
        </div>
        <hr class="w-full">
        <!-- Seccion estadisticas -->
        <div class="w-full flex flex-col p-4">
            <h1 class="text-lg font-semibold">Estadísticas</h1>
            <div class="flex flex-col md:flex-row gap-4 p-6">
                <div class="flex-1 min-w-0 h-[400px]">
                    <Bar :options="barCharOpt" :data="barChartData" />
                </div>
                <div class="flex-1 min-w-0 h-[400px]">
                    <Doughnut :data="doughnutChartData" :options="doughnutChartOpt" />
                </div>
            </div>

        </div>
    </div>
</template>