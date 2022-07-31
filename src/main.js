import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import Axios from "axios";
import App from "./App.vue";
import Landing from "./Landing.vue";
import Note from "./Note.vue";
import Login from "./Login.vue";
import Dashboard from "./Dashboard.vue";
import Register from "./Register.vue";

function loginGuard(from, to, next) {
  console.log("Guarding!");
  const token = localStorage.getItem("NOTES_AUTH");
  if (token) {
    next();
  } else {
    next("/login");
  }
}

const routes = [
  {
    path: "/",
    redirect: "/ro",
  },
  { path: "/:lang", component: Landing },
  { path: "/:lang/register", component: Register },
  { path: "/:lang/notes/:noteId", component: Note },
  { path: "/:lang/newnote", component: Note },
  { path: "/:lang/dashboard", component: Dashboard },
  { path: "/:lang/login", component: Login },
  { path: "/:lang/:pathMatch(.*)*", component: Landing }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

Axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("NOTES_AUTH");

    if (token) {
      config.headers["Authorization"] = "Token " + token;
    }

    return config;
  },
  function (error) {
    console.log(error);
  }
);

createApp(App).use(router).mount("#app");
