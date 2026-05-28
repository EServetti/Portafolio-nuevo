export const firstUseDates = [
  { date: "2024-05-01", label: "React" },
  { date: "2025-02-01", label: "React Native" },
  { date: "2023-03-01", label: "HTML" },
  { date: "2023-03-01", label: "CSS" },
  { date: "2025-07-01", label: "Vue" },
  { date: "2025-07-01", label: "Tailwind" },
  { date: "2024-03-01", label: "Node.js" },
  { date: "2024-12-01", label: "SQL" },
  { date: "2025-07-01", label: "Supabase" },
];

export type ToolCategory = "frontend" | "backend" | "database";

export const toolsUsageInProyects: { times: number; label: string; category: ToolCategory }[] = [
  // Frontend
  { times: 7, label: "React", category: "frontend" },
  { times: 3, label: "React Native", category: "frontend" },
  { times: 6, label: "HTML", category: "frontend" },
  { times: 6, label: "CSS", category: "frontend" },
  { times: 2, label: "Vue", category: "frontend" },
  { times: 3, label: "Tailwind", category: "frontend" },
  // Backend
  { times: 10, label: "Node.js", category: "backend" },
  { times: 4, label: "Open AI API", category: "backend" },
  // Database
  { times: 4, label: "SQL", category: "database" },
  { times: 4, label: "Mongo DB", category: "database" },
  { times: 3, label: "Supabase", category: "database" },
];