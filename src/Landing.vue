<template>
  <div class="container">
    <section id="hero-id">
      <div class="container-hero">
        <h1>Let your contemplations slide</h1>
        <p>
          Be the person who makes everything become animated. Be other people’s
          motivation for the every day life. Compose your own notes.
        </p>
      </div>
    </section>

    <section class="about">
      <h2>About Notes App</h2>

      <p>
        Notes is the perfect app when you want to schedule your life. You can
        keep count of your working out and sleep hours. You can track your
        calories just by writing everything down by yourself. In that way your
        lifestyle will be an organized and healthy one. Notes app may be the
        motivation that you need when you want to make a change in your daily
        routine.
      </p>
    </section>

    <section id="feature-boxes" class="features">
      <h2>Features</h2>
      <p>
        Notes is the perfect place to take advantage of the free time on your
        hands. It can give you a myriad of new opportunities in order to feel
        free with yourself. It may also remind you of forgotten moments you
        sometimes had and it will constantly bring back alluring memories from
        back in time.
      </p>
      <div class="feature-container">
        <div class="feature-box">
          <img
            src="https://image.flaticon.com/icons/svg/2921/2921226.svg"
            alt="create"
          />
          <h3>Create Personalized Notes</h3>
          <p>
            Using Notes you can effortlessly personalize your items. In other
            words, you are able to add photos, highlight or even add stickers to
            everything you write.
          </p>
        </div>
        <div class="feature-box">
          <img
            src="https://image.flaticon.com/icons/svg/2921/2921305.svg"
            alt="share"
          />
          <h3>Share Notes</h3>
          <p>
            The written notes can be easily shared with everyone else. It also
            allows them to give feedback and to react with emojis to your
            thoughts.
          </p>
        </div>
        <div class="feature-box">
          <img
            src="https://image.flaticon.com/icons/svg/2921/2921130.svg"
            alt="delete"
          />
          <h3>Fast Delete</h3>
          <p>
            One click and your notes can be deleted. This site offers the
            possibility to erase everything faster than you thought. It is
            uncomplicated to use and easy on hand.
          </p>
        </div>
      </div>
    </section>

    <section class="grid_container">
      <img src="/assets/pics/summer1.jpg" alt="images1" />
      <img src="/assets/pics/summer2.jpg" alt="images2" />

      <img src="/assets/pics/summer3.png" alt="images3" />
      <img src="/assets/pics/summer4.png" alt="images4" />

      <img src="/assets/pics/summer5.png" alt="images5" />
      <img src="/assets/pics/summer6.png" alt="images6" />

      <img src="/assets/pics/summer7.jpg" alt="images7" />
      <img src="/assets/pics/summer8.png" alt="images8" />
    </section>

    <section class="all-logos">
      <div class="logo">
        <a class="logo-container" href="https://mecc.gov.md/">
          <img
            src="/assets/partners/ministerul.png"
            alt="Ministerul Educației, Culturii și Cercetării al Republicii Moldova"
          />
        </a>

        <a class="logo-container" href="https://md.mfa.lt/">
          <img
            src="/assets/partners/lithuania.png"
            alt="Embassy of the Republic of Lithuania to the Republic of Moldova"
          />
        </a>

        <a class="logo-container" href="https://www.crunchyroll.com/en-gb">
          <img src="/assets/partners/crunchyroll.svg" alt="Crunchyroll" />
        </a>

        <a class="logo-container" href="https://youngfeministfund.org/">
          <img src="/assets/partners/frida.svg" alt="Frida" />
        </a>

        <a class="logo-container" href="https://facebook.com/atelier99.org/">
          <img src="/assets/partners/atelier99.svg" alt="Atelier99" />
        </a>

        <a class="logo-container" href="https://www.tekedu.org/">
          <img src="/assets/partners/tekedu.png" alt="Tekedu" />
        </a>

        <a class="logo-container" href="https://www.orange.md/">
          <img src="/assets/partners/orange.svg" alt="Orange" />
        </a>

        <a class="logo-container" href="https://www.goparrot.ai/">
          <img src="/assets/partners/goparrot.png" alt=" GoParrot" />
        </a>

        <a class="logo-container" href="https://atomate.net/">
          <img src="/assets/partners/atomate.png" alt="Atomate" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Landing",
  components: {}
};
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
}
/* HERO */
.container-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}
#hero-id {
  min-height: 400px;
  background: url("/assets/hero-background.jfif") no-repeat 0 -200px;
  background-position: center;
  background-size: cover;
  width: 100%;
  text-align: center;
  color: white;
}
#hero-id h1 {
  margin-top: 100px;
  margin-bottom: 10px;
}
@media only screen and (max-width: 1180px) {
  #hero-id {
    height: 100px;
  }
  #hero-id h2 {
    margin-top: 40px;
  }
}
@media only screen and (max-width: 320px) {
  #hero-id {
    height: 100px;
  }
  #hero-id h2 {
    margin-top: 40px;
  }
}
/* ABOUT */
.about {
  margin: 0 auto;
  max-width: 900px;
  text-align: center;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
}
.about p {
  color: #6a6a6a;
  line-height: 2;
  padding: 25px;
  margin: 0;
}
@media only screen and (max-width: 1180px) {
  .about p {
    padding: 15px;
  }
}
@media only screen and (max-width: 960px) {
  .about p {
    padding: 7px;
  }
}
/* FEATURES */
.feature-all {
  display: flex;
  justify-content: center;
}
.feature-container {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.features {
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #fafafa;
}
.features p {
  color: #6a6a6a;
  line-height: 2;
  padding: 25px;
  margin: 0;
}
#feature-boxes {
  margin-top: 20px;
  background-color: #fafafa;
}
#feature-boxes .feature-box {
  text-align: center !important;
  width: 30%;
  padding: 10px;
}
#feature-boxes .feature-box img {
  width: 90px;
}
@media only screen and (max-width: 1180px) {
  .features {
    max-width: 100%;
    padding: 0;
  }
  .feature-all {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .feature-container {
    flex-direction: column;
    align-items: center;
  }
  .features p {
    padding: 15px;
  }
  #feature-boxes .feature-box {
    text-align: center;
    width: 90%;
  }
}
/* PHOTOS */
.grid_container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, auto);
}
.grid_container img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: all 0.2s ease-in;
}
.grid_container img:hover {
  transform: scale(1.1);
}
@media screen and (max-width: 1200px) {
  .grid_container {
    display: grid;
    grid-template-columns: repeat(2, auto);
  }
}
@media screen and (max-width: 900px) {
  .grid_container {
    display: grid;
    grid-template-columns: auto;
  }
}
/* SPONSORS */
img {
  width: 200px;
}
.all-logos {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: #fafafa;
  position: relative;
}
.all-logos::after {
  content: "";
  border-bottom: 1px solid #979797;
  position: absolute;
  bottom: 0;
  left: 20%;
  right: 20%;
}
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  display: grid;
  grid-gap: 30px 250px;
  justify-content: center;
  grid-template-columns: repeat(3, 150px);
}
@media only screen and (max-width: 960px) {
  .logo {
    grid-template-columns: 150px 150px;
  }
}
@media only screen and (max-width: 480px) {
  .logo {
    grid-template-columns: 150px;
  }
}
</style>