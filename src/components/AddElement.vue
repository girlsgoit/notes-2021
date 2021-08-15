<template>
  <div>
    <section class="rectangle" v-if="isVisible">
      <div class="note-element">
        <textarea
          class="input1"
          placeholder="Write your text here"
          v-model="text"
        ></textarea>
        <br />
      </div>
      <div class="buttons">
        <button class="style-button" @click="save('h1', text)">H1</button>
        <button class="style-button" @click="save('h2', text)">H2</button>
        <button class="style-button" @click="save('h3', text)">H3</button>
        <button class="style-button" @click="save('p', text)">P</button>
        <button class="style-button" @click="save('ul', text)">UL</button>
        <button class="style-button" @click="save('a', text)">LINK</button>
        <button class="style-button" @click="save('img', text)">IMAGE</button>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddElement",
  props: {
    blocks: Array,
    index: Number,
    id: String,
    isVisible: Boolean
  },
  data: function () {
    return {
      text: "",
      indexMod: 0,
      blocksMod: [],
      isNewNote: false,
      noteId: null
    };
  },
  created() {
    this.noteId = this.id;
  },
  
  methods: {
    async save(tag, content) {
      this.isNewNote = !this.noteId;
      this.indexMod = this.index;
      this.blocksMod = this.blocks;

      let newBlock = {
        tag: tag,
        content: content
      };

      if (!content) {
        return;
      }

      this.blocksMod.splice(this.indexMod, 0, newBlock);
      this.indexMod++;

      const axiosMethod = this.isNewNote ? axios.post : axios.put;

      try {
        const response = await axiosMethod(
          `https://notes-api.girlsgoit.org/notes/${
            this.isNewNote ? "" : this.noteId + "/"
          }`,
          {
            note_elements: this.blocks
          }
        );

        this.text = "";
        this.$emit("index-added", this.indexMod);
        this.$emit("block-added", response.data.note_elements);

        if (this.isNewNote) {
          this.$router.push("/notes/" + response.data.id);
          this.noteId = response.data.id;
          this.$forceUpdate();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
.rectangle {
  position: fixed;
  display: inline-block;
  background-color: white;
  box-shadow: 0 -2px 40px rgba(191, 191, 191, 0.5);
  border-radius: 10px;
  padding: 30px;
  width: 750px;
  box-sizing: border-box;
  transform: translateX(-50%);
  left: 50%;
  max-width: 90%;
  bottom: 10px;
  z-index: 20;
}
.rectangle .note-element {
  padding-bottom: 10px;
}
.rectangle .input1 {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #a9a9a9;
  line-height: 22px;
  border: none;
  width: 100%;
  height: 6em;
  resize: none;
}
.rectangle .input1:focus {
  outline: none;
}
.rectangle .buttons {
  padding-top: 5px;
}
.rectangle button {
  text-align: center;
  text-transform: uppercase;
  background: #2ea1f8;
  color: white;
  padding: 15px;
  border-radius: 5px;
  width: 90px;
  border: none;
  cursor: pointer;
  margin: 2px;
  flex: 1 0 auto;
}
.rectangle button:hover {
  background-color: #59acff;
  border: none;
}
.rectangle button:focus {
  outline: none;
  background-color: #99ccff;
  font-weight: bold;
}
.rectangle .buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 -2px;
}
</style>