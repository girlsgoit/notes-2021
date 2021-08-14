import { createApp } from "vue";
import App from "./App.vue";
import Landing from "./Landing.vue";
import Note from "./Note.vue";
import Login from "./Login.vue";
import Dashboard from "./Dashboard.vue";
import { createWebHistory, createRouter } from "vue-router";
import Register from "./Register.vue";

const routes = [
  { path: "/", component: Landing },
  { path: "/register", component: Register },
  { path: "/notes/:noteId", component: Note },
  { path: "/dashboard", component: Dashboard },
  { path: "/login", component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount("#app");
