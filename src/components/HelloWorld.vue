<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ msg }}</h3>
    <h5>{{ msg }}</h5>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
