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
  { path: "/", component: Landing },
  { path: "/register", component: Register },
  { path: "/notes/:noteId", component: Note },
  { path: "/newnote", component: Note },
  { path: "/dashboard", component: Dashboard },
  { path: "/login", component: Login },
  { path: "/:pathMatch(.*)*", component: Landing }
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
    } else {
      router.push("/login");
    }

    return config;
  },
  function (error) {
    console.log(error);
  }
);

createApp(App).use(router).mount("#app");
