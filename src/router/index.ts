import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

interface Route {
  path: string;
  component: any;
  name: string;
}
const routes: Route[] = [
  { path: "/", component: Home, name: "Home" },
  { path: "/project/:id", component: () => "", name: "Product" },
  { path: "/skills", component: () => "", name: "Skills"},
  { path: "/experience", component: () => "", name: "Experience"}
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
