<template>
  <div>
    <button class="delete-button" @click="goToDashboard()">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Delete",
  data() {
    return {};
  },
  methods: {
    async goToDashboard() {
      await axios.delete(
        `https://notes-api.girlsgoit.org/notes/${this.noteId}/`
      );
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style scoped>
</style>