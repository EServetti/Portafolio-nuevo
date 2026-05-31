import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Experience from "../views/Experience.vue";
import Project from "../views/Project.vue";

interface Route {
  path: string;
  component: any;
  name: string;
}
const routes: Route[] = [
  { path: "/", component: Home, name: "Home" },
  { path: "/project/:id", component: Project, name: "Product" },
  { path: "/skills", component: () => "", name: "Skills"},
  { path: "/experience", component: Experience, name: "Experience"}
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
