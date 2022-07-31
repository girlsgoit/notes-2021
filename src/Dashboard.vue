<template>
  <section class="dashboard">
    <div class="dashboard-text">
      <h1 v-if="$route.params.lang === 'ro'">Dashboard</h1>
      <h1 v-else> Доска объявлений</h1>
    </div>

    <button @click="newNote($event)" class="dashboard-button">{{ NewNoteText }}</button>
  </section>

  <section class="notes-container">
    <NoteCard
      v-for="note in notes"
      :key="note.id"
      :note="note.note_elements[0]"
      :createdAt="note.created_at"
      @click="goToNote(note.id)"
    />
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
      notes: []
    };
  },
  computed: {
    NewNoteText() {
      return this.$route.params.lang === "ro" ? "Notita noua" : "новая запись";
    }
  },
  async created() {
    const userID = localStorage.getItem("USER_ID");

    const data = { user: userID };

    const response = await axios.get(
      "https://notes-api.girlsgoit.org/notes",
      data
    );

    this.notes = response.data;
  },
  methods: {
    newNote(event) {
      this.$router.push(`/${this.$route.params.lang}/newnote`);
    },
    goToNote(noteId) {
      this.$router.push(`/${this.$route.params.lang}/notes/${noteId}`);
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

.notes-container {
  display: grid;
  align-items: center;
}

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

@media screen and (min-width: 570px) {
  .notes-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
