<template>
  <div class="delete-button-container">
    <button class="delete-button" @click="emitDelete()">{{ DeleteText }}</button>
  </div>
</template>

<script>
export default {
  name: "Delete",
  computed: {
    DeleteText() {
      return this.$route.params.lang === "ro" ? "Sterge notița" : "Удалить заметку";
    },
  },
  data() {
    return {};
  },
  methods: {
    emitDelete() {
      this.$emit("delete-note");
    }
  }
};
</script>

<style scoped>
.delete-button {
  background-color: white;
  color: #fa4820;
  padding: 14px 20px;
  margin: 20px;
  border: 1px solid #fa4820;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.5;
  border-radius: 5px;
  width: 960px;
  transition: opacity 0.2s ease-in;
}
.delete-button:hover {
  opacity: 1;
}
.delete-button-container {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 960px) {
  .delete-button {
    width: 100%;
  }
}
</style>
