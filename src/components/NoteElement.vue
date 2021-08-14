<template>
  <h1 v-if="tag === 'h1'">{{ content }}</h1>

  <p v-if="tag === 'p'">
    {{ content }}
  </p>

  <div class="note-image">
    <img v-if="tag === 'img'" :src="content" />
  </div>
</template>

<script>
export default {
  name: "NoteComponent",
  props: {
    tag: String,
    content: String
  }
};
</script>

<style scoped>
.note h1 {
  margin-top: 0;
  font-size: 3.5rem;
  line-height: 4rem;
  color: #393939;
  margin-bottom: 5px;
}
.note p {
  align-content: center;
  font-size: 1.313rem;
  line-height: 2.25rem;
  color: #393939;
  margin-bottom: 60px;
}
.note div.note-image {
  object-fit: cover;
  margin: 0 -4.4em 0em -4.45rem;
}
.note img {
  max-width: 100%;
  height: auto;
  margin-bottom: 50px;
}
.note h2 {
  font-size: 2rem;
  line-height: 2.25rem;
  color: #393939;
  margin-top: 0;
  margin-bottom: 50px;
}
.note div.link {
  margin-bottom: 1.3rem;
  color: blue;
}
.note .link a {
  text-decoration-line: none;
  color: blue;
  font-size: 1.3rem;
  margin-bottom: 70px;
}
.note li {
  font-size: 1.313rem;
  line-height: 2.25rem;
  color: #000000;
  padding: 5px;
  position: relative;
}
.note ul {
  margin: 0 0 3em 0;
}
.note h3 {
  font-size: 1.625rem;
  line-height: 1.875rem;
  color: #393939;
}
</style>