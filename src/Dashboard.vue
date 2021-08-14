<template>
  <section class="dashboard">
    <div class="dashboard-text">
      <h1>Dashboard</h1>
    </div>

    <button @click="newNote($event)" class="dashboard-button">NEW NOTE</button>
  </section>
</template> 

<script>
export default {
  name: "Dashboard",
  methods: {
    newNote(event) {
      this.$router.push("/newnote");
    }
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: space-between;
  padding: 85px 0px;
  margin: 0 auto;
  max-width: 960px;
  align-items: center;
}

.dashboard-text h1 {
  font-family: Roboto, sans-serif;
  font-size: 56px;
  font-weight: 300;
  margin: 10px;
}

.dashboard-button {
  max-height: 4rem;
  font-size: 15px;
  text-align: center;
  line-height: 15px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  color: white;
  background-color: #2ea1f8;
  padding: 21px 28px;
  border-radius: 5px;
  position: relative;
  border: 0px;
  cursor: pointer;
}
/* 1 rem  = 16px */

@media screen and (max-width: 570px) {
  .dashboard {
    padding: 50px 0;
    flex-direction: column;
    align-items: center;
  }
  .dashboard-text h1 {
    font-size: 40px;
  }
}
</style>