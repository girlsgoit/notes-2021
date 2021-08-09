import { createApp } from "vue";
import App from "./App.vue";
import Landing from "./Landing.vue";
import Note from "./Note.vue";
import Dashboard from "./Dashboard.vue";
import { createWebHistory, createRouter } from "vue-router";
import Register from "./pages/Register.vue";

const routes = [
  { path: "/", component: Landing },
  { path: "/register", component: Register },
  { path: "/notes/:noteId", component: Note },
  { path: "/dashboard", component: Dashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount("#app");
