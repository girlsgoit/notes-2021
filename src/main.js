import { createApp } from "vue";
import App from "./App.vue";
import Note from "./Note.vue";
import Dashboard from "./Dashboard.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: App },
  { path: "/notes/:noteId", component: Note },
  { path: "/dashboard", component: Dashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount("#app");
