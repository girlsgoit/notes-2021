<template>
  <div
    class="divider"
    @click.stop="sendNewElementEvent()"
    :class="{ active: isActive }"
  >
    <hr class="linie1" />
    <button class="button">+</button>
    <hr class="linie2" />
  </div>
</template>

<script>
export default {
  name: "NewElementLine",
  props: {
    isActive: Boolean
  },
  methods: {
    sendNewElementEvent() {
      this.$emit("new-element");
    }
  }
};
</script>

<style scoped>
.divider {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

.divider:hover {
  opacity: 1;
  cursor: pointer;
  transition: 0.3s;
}

.linie1 {
  flex: 1;
  border: none;
  height: 2px;
  background: rgb(190, 219, 233);
  margin-left: 15%;
}
.linie2 {
  flex: 1;
  border: none;
  height: 2px;
  background: rgb(190, 219, 233);
  margin-right: 15%;
}

hr:hover {
  background-color: #208afa;
  color: #208afa;
}

.button {
  border-radius: 100%;
  color: #208afa;
  margin: 5px;
  background-color: white;
  border-color: #208afa;
}
.text {
  margin-left: 15%;
  font-family: Roboto;
  color: #393939;
  font-weight: 500;
  font-size: 4rem;
  margin-top: 263px;
}

.divider.active {
  opacity: 1;
}

.divider.active .linie1 {
  background-color: #fab965;
}

.divider.active .linie2 {
  background-color: #fab965;
}
</style>