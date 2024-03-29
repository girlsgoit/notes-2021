<template>
  <article class="note">
    <div class="note-container">
      <div v-for="(noteElement, index) in noteElements" :key="index">
        <NewElementLine
            @new-element="addNewElementAt(index)"
            :isActive="currentIndex === index && isEditorVisible"
        />

        <NoteElement
            :key="noteElement.id"
            :tag="noteElement.tag"
            :content="noteElement.content"
        />
      </div>

      <NewElementLine
          @new-element="addNewElementAt(noteElements.length)"
          :isActive="currentIndex === noteElements.length && isEditorVisible"
      />
    </div>
  </article>

  <AddElement
      :isVisible="isEditorVisible"
      :blocks="noteElements"
      :index="currentIndex"
      :id="noteId"
      @block-added="handleBlockAdded($event)"
      @index-added="currentIndex = $event"
  />

  <DeleteButton @delete-note="deleteNote()"/>
</template>

<script>
import DeleteButton from "./components/DeleteButton";
import NoteElement from "./components/NoteElement";
import NewElementLine from "./components/NewElementLine";
import AddElement from "./components/AddElement";
import axios from "axios";

export default {
  name: "Note",
  components: {
    DeleteButton,
    NoteElement,
    NewElementLine,
    AddElement
  },
  data() {
    return {
      noteId: null,
      noteElements: [],
      currentIndex: 0,
      isEditorVisible: false
    };
  },
  async created() {
    this.noteId = this.$route.params.noteId;

    if (this.noteId) {
      const response = await axios.get(
          `https://notes-api.girlsgoit.org/notes/${this.noteId}/`
      );
      console.log(response);
      this.noteElements = response.data.note_elements;
    }

    if (this.noteElements.length === 0) {
      this.isEditorVisible = true;
    }
  },
  methods: {
    addNewElementAt(index) {
      this.currentIndex = index;
      this.isEditorVisible = true;
    },
    handleBlockAdded(updatedElements) {
      this.noteElements = updatedElements;
      this.isEditorVisible = false;
    },
    async deleteNote() {
      await axios.delete(
          `https://notes-api.girlsgoit.org/notes/${this.noteId}/`
      );

      this.$router.push(`/${this.$route.params.lang}/dashboard`);
    }
  }
};
</script>

<style scoped>
.note {
  font-size: 16px;
  padding-top: 3em;
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
