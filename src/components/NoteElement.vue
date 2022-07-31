<template>
  <h1 v-if="tag === 'h1'">{{ content }}</h1>
  <h2 v-if="tag === 'h2'">{{ content }}</h2>
  <h3 v-if="tag === 'h3'">{{ content }}</h3>

  <p v-if="tag === 'p'">
    {{ content }}
  </p>

  <div v-if="tag === 'img'" class="note-image">
    <img :src="content" />
  </div>

  <div v-if="tag === 'a'" class="link">
    <a :href="content.split('\n')[1]">
      {{ content.split('\n')[0] }}
    </a>
  </div>

  <ul v-if="tag === 'ul'">
    <li v-for="item in content.split('\n')" :key="item">
      {{ item }}
    </li>
  </ul>
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
h1 {
  margin-top: 0;
  font-size: 3.5rem;
  line-height: 4rem;
  color: #393939;
  margin-bottom: 10px;
}
p {
  align-content: center;
  font-size: 1.313rem;
  line-height: 2.25rem;
  color: #393939;
  margin-top: 0;
  margin-bottom: 10px;
}
div.note-image {
  object-fit: cover;
}
img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  margin-top: 10px;
}
h2 {
  font-size: 2rem;
  line-height: 2.25rem;
  color: #393939;
  margin-top: 0;
  margin-bottom: 10px;
}
div.link {
  margin-bottom: 10px;
  color: blue;
}
.link a {
  text-decoration-line: none;
  color: blue;
  font-size: 1.3rem;
  margin-bottom: 70px;
}
li {
  font-size: 1.313rem;
  line-height: 2.25rem;
  color: #000000;
  padding: 5px;
  position: relative;
}
ul {
  margin: 0 0 10px 0;
}
h3 {
  font-size: 1.625rem;
  line-height: 1.875rem;
  color: #393939;
  margin-bottom: 10px;
}
</style>
