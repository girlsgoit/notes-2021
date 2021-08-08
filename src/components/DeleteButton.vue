<template>
  <div>
    <button class="delete-button" @click="goToDashboard()">Delete</button>
  </div>
</template>

<script>
export default {
  name: "Delete",
  data() {
    return {};
  },
  methods: {
    goToDashboard() {
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style scoped>
</style>