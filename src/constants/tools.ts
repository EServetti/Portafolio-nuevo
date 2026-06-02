export interface ToolSkills {
    label: string;
    level: string;
}

export const languageSkills: ToolSkills[] = [
    {label: "Typescript", level: "avanzado"},
    {label: "Javascript", level: "avanzado"},
    {label: "HTML/CSS", level: "avanzado"},
    {label: "Java", level: "bueno"}
]

export const frontendSkills: ToolSkills[] = [
    {label: "React", level: "avanzado"},
    {label: "React Native/Expo", level: "bueno"},
    {label: "Vue", level: "avanzado"},
    {label: "Tailwind", level: "muy bueno"}
]

export const backendSkills: ToolSkills[] = [
    {label: "Express", level: "muy bueno"},
    {label: "Supabase", level: "avanzado"},
    {label: "Spring", level: "básico"}
]

export const databaseSkills: ToolSkills[] = [
    {label: "Mongo DB", level: "muy bueno"},
    {label: "MySQL", level: "bueno"},
    {label: "PostgreSQL", level: "muy bueno"}
]

export const skillCategories: { title: string; tools: ToolSkills[] }[] = [
    { title: "Lenguajes", tools: languageSkills },
    { title: "Front-end", tools: frontendSkills },
    { title: "Back-end", tools: backendSkills },
    { title: "Bases de datos", tools: databaseSkills }
]