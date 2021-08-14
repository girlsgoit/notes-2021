<template>
  <HeaderLogin v-if="token" :user="user" />
  <HeaderLogout v-else />

  <router-view />
</template>

<script>
import emitter from "@/services/emitter";
import HeaderLogin from "./components/HeaderLogin";
import HeaderLogout from "./components/HeaderLogout";

export default {
  name: "App",
  components: {
    HeaderLogin,
    HeaderLogout
  },
  data() {
    return {
      token: "",
      user: {}
    };
  },
  created() {
    emitter.on("auth", () => this.updateUserData());

    this.updateUserData();
  },
  methods: {
    updateUserData() {
      this.token = localStorage.getItem("NOTES_AUTH");

      if (this.token) {
        this.user = {
          username: localStorage.getItem("USER_NAME"),
          fullName: localStorage.getItem("FULL_NAME"),
          id: localStorage.getItem("USER_ID")
        };
      }

      console.log(this.user);
    }
  }
};
</script>

<style>
</style>