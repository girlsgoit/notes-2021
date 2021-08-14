<template>
  <section class="dashboard">
    <div class="dashboard-text">
      <h1>Dashboard</h1>
    </div>

    <button @click="newNote($event)" class="dashboard-button">NEW NOTE</button>

    <section class="notes-section">
      <div class="column">
        <NoteCard v-for="note in leftColumnsNotes" :key="note.id"/>
      </div>
      <div class="column">
        <NoteCard v-for="note in rightColumnsNotes" :key="note.id"/>
      </div>
    </section> 
    <!-- <NoteCard v-for="note in notes" :key="note.id" /> -->
  </section>
</template> 

<script>
import axios from "axios";
import NoteCard from "./components/NoteCard";
//import { create } from 'eslint/lib/rules/*';
export default {
  name: "Dashboard",
  components: { NoteCard },
  data() {
    return {
      notes: [],
      rightColumnsNotes: [],
      leftColumnsNotes: []
    };
  },
  async created() {
    const userID = localStorage.getItem("USER_ID");

    const data = { user: userID };
    const response = await axios.get(
      "https://notes-api.girlsgoit.org/notes",
      data
    );

    this.notes = response.data;
    console.log(this.notes);
    for (let i = 0; i < this.notes.length; i++) {
      if (i % 2 === 0) {
        this.rightColumnsNotes.push(this.notes[i]);
      } else {
        this.leftColumnsNotes.push(this.notes[i]);
      }
    }
    console.log("1");
    console.log(this.leftColumnsNotes);
    console.log("2");
    console.log(this.rightColumnsNotes);
  },
  methods: {
    newNote(event) {
      this.$router.push("/newnote");
    }
    // async getNotes(event) {
    //   await axios.get("https://notes-api.girlsgoit.org/notes", notes);
    // }
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