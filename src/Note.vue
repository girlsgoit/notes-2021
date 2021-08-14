<template>
  <article class="note">
    <div class="note-container">
      <NoteElement
        v-for="element in noteElements"
        :key="element.id"
        :tag="element.tag"
        :content="element.content"
      />
    </div>
  </article>
  <DeleteButton />
</template>

<script>
import DeleteButton from "./components/DeleteButton";
import NoteElement from "./components/NoteElement";
import axios from "axios";

export default {
  name: "Note",
  components: {
    DeleteButton,
    NoteElement
  },
  data() {
    return {
      noteId: null,
      noteElements: [
        { id: 1, tag: "h1", content: "Titlu" },
        { id: 2, tag: "p", content: "Paragraf" },
        {
          id: 3,
          tag: "img",
          content:
            "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
        }
      ]
    };
  }
  // async created() {
  //   this.noteId = this.$route.params.noteId;
  //   const response = await axios.get(
  //     `https://notes-api.girlsgoit.org/notes/${this.noteId}`
  //   );
  //   this.spaces = response.data;
  // }
};
</script>

<style scoped>
.note {
  font-size: 16px;
  padding-top: 9.5em;
  display: flex;
}
.note-container {
  max-width: 60rem;
  padding: 0 15px;
  margin: 0 auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
}
</style>