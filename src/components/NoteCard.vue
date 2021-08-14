<template>
  <div class="rama">
    <h1 v-if="note.tag === 'h1'" class="text">{{ note.content }}</h1>
    <h2 v-if="note.tag === 'h2'" class="text">{{ note.content }}</h2>
    <h3 v-if="note.tag === 'h3'" class="text">{{ note.content }}</h3>
    <p v-if="note.tag === 'p'" class="text">{{ note.content }}</p>

    <div v-if="note.tag === 'img'" class="img-container">
      <img :src="note.content" />
    </div>

    <p class="data">{{ createdAt }}</p>
  </div>
</template>
<script>
export default {
  name: "NoteCard",
  props: {
    note: {},
    createdAt: String
  }
};
</script>
<style  scoped>
.text {
  font-family: "Roboto", sans-serif;
  color: #393939;
  font-size: 32px;
  position: absolute;
  left: 40px;
  top: 24px;
  height: 30px;
  width: 342px;
}

.rama {
  padding: 10px;
  box-shadow: 0px 2px 27px 0px #e6e6e680;
  border-radius: 10px;
  margin: 10px 20px;
  background: #ffffff;
  width: 460px;
  height: 173px;
  position: relative;
  display: flex;
  cursor: pointer;
}

.data {
  color: #919191;
  position: relative;
  left: 336px;
  top: 114px;
  width: 92px;
  height: 30px;
}

.rama2 {
  padding: 10px;
  box-shadow: 0px 2px 27px 0px #e6e6e680;
  border-radius: 10px;
  margin: 10px 20px;
  background: #ffffff;
  width: 460px;
  height: 361px;
  position: relative;
  display: flex;
}
.data2 {
  color: #919191;
  position: relative;
  left: 336px;
  top: calc(50% - 30px / 2 + 135.5px);
  width: 92px;
  height: 30px;
}
.text2 {
  left: 6.52%;
  right: 6.52%;
  top: 8.59%;
  bottom: 24.93%;
  position: absolute;
  color: #393939;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 187%;
}

.img-container img {
  width: 460px;
  height: 270px;
  position: absolute;
  left: 10px;
}
.rama3 {
  padding: 10px;
  box-shadow: 0px 2px 27px 0px #e6e6e680;
  border-radius: 10px;
  margin: 10px 20px;
  background: #ffffff;
  width: 460px;
  height: 392px;
  position: relative;
  display: flex;
}

.data3 {
  color: #919191;
  position: relative;
  left: 336px;
  top: 332px;
  width: 94px;
  height: 30px;
  left: 336px;
  top: calc(50% - 30px / 2 + 135.5px);
  width: 92px;
  height: 30px;
}
.text2 {
  left: 6.52%;
  right: 6.52%;
  top: 8.59%;
  bottom: 24.93%;
  position: absolute;
  color: #393939;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 187%;
}

.data3 {
  color: #919191;
  position: relative;
  left: 336px;
  top: 332px;
  width: 94px;
  height: 30px;
}
</style>