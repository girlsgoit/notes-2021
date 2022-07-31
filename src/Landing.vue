<template>
  <div class="container">
    <section id="hero-id">
      <div class="container-hero">
        <h1 v-if="$route.params.lang === 'ro'">Urmărește complet scalabil</h1>
        <h1 v-else>                Следуйте прямо за расширением</h1>

        <p v-if="$route.params.lang === 'ro'">
          Utilizați cadrele agile pentru a oferi un rezumat solid pentru prezentări de ansamblu la nivel înalt.
        </p>
        <p v-else>Используйте гибкие интегрированные системы для обеспечения мощного краткого обзора для проведения
          анализа на высоком уровне.</p>
      </div>
    </section>

    <section class="about">
      <h2 v-if="$route.params.lang === 'ro'">Despre aplicația Notițe </h2>
      <h2 v-else>                О приложении «Заметки»</h2>

      <p v-if="$route.params.lang === 'ro'">Implementați în mod fosfluorescent metodologiile din întreaga lume cu tehnologie activată web. Coordonați
        interactiv comerțul electronic proactiv prin gândire centrată pe proces. Urmăriți complet servicii scalabile
        pentru clienți prin potențialități sustenabile</p>
      <p v-else> Фосфлуоресцентно задействуйте мировые методологии с помощью веб-технологий. Интерактивно координируйте
        опереждающую электронную коммерцию с помощью процессно-ориентированного мышления. Полностью реализуйте
        масштабируемое обслуживание клиентов за счет устойчивых возможностей
      </p>
    </section>

    <section id="feature-boxes" class="features">
      <h2 v-if="$route.params.lang === 'ro'">Features</h2>
      <h2 v-else>Особенности</h2>
      <p v-if="$route.params.lang === 'ro'">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum error blanditiis debitis pariatur deserunt
        sapiente eius repudiandae. Laboriosam doloribus unde officiis, consequatur expedita at sunt eligendi culpa
        deserunt molestiae voluptas.
      </p>
      <p v-else>Человек в поисках комфортного, удобного, безопасного существования создает технические средства.</p>
      <div class="feature-container">
        <div class="feature-box">
          <img
            src="/assets/ro/landing/features1.png"
            alt="create"
          />
          <h3 v-if="$route.params.lang === 'ro'">Prima Caracteristica</h3>
          <h3 v-else>Первая особенность</h3>
          <p v-if="$route.params.lang === 'ro'">Imersiunea în nanotehnologie de-a lungul autostrăzii informaționale va închide bucla concentrându-se
            doar pe linia de jos.</p>
          <p v-else>Погружение в нанотехнологии вдоль информационной магистрали замкнет петлю
            фокусирования исключительно на конечном результате.
          </p>
        </div>
        <div class="feature-box">
          <img
            src="/assets/ro/landing/feature2.png"
            alt="share"
          />
          <h3 v-if="$route.params.lang === 'ro'">A doua Caracteristica</h3>
          <h3 v-else>Вторая особенность</h3>
          <p v-if="$route.params.lang === 'ro'">Valorificați fructele care nu se potrivesc pentru a identifica o activitate cu valoare adăugată la
            testul beta. Depășiți decalajul digital.</p>
          <p v-else>Извлечение выгоды из легко-доступных материалов для определения приблизительно
            добавленную стоимость бета-теста. Преодоление цифрового разрыва.</p>
        </div>
        <div class="feature-box">
          <img
            src="/assets/ro/landing/features3.png"
            alt="delete"
          />
          <h3 v-if="$route.params.lang === 'ro'">Robotica</h3>
          <h3 v-else>Робототехника</h3>
          <p v-if="$route.params.lang === 'ro'"> Aduceți la masă strategii de supraviețuire câștig-câștig pentru a asigura dominația proactivă. La
            sfârșitul zilei, mergi mai departe.</p>
          <p v-else>Внесение беспроигрышного вклада в групповую работу для стратегии выживания и
            обеспечения упреждающего доминирования. Итог- движение вперед.</p>
        </div>
      </div>
    </section>

    <section class="grid_container">
      <img src="/assets/ro/landing/images1.png" alt="images1" />
      <img src="/assets/ro/landing/images2.png" alt="images2" />

      <img src="/assets/ro/landing/images3.png" alt="images3" />
      <img src="/assets/ro/landing/images4.png" alt="images4" />

      <img src="/assets/ro/landing/images5.png" alt="images5" />
      <img src="/assets/ro/landing/images10.png" alt="images6" />

      <img src="/assets/ro/landing/images7.png" alt="images7" />
      <img src="/assets/ro/landing/images8.png" alt="images8" />
    </section>

    <section class="all-logos">
      <div class="logo">
        <a class="logo-container" href="https://www.led.md/">
          <img
            src="/assets/partners/led.png"
            alt="Lichtenstein Development Service"
          />
        </a>

        <a class="logo-container" href="https://www.crunchyroll.com/en-gb">
          <img src="/assets/partners/crunchyroll.png" alt="Crunchyroll" />
        </a>

        <a class="logo-container" href="https://youngfeministfund.org/">
          <img src="/assets/partners/frida.svg" alt="Frida" />
        </a>

        <a class="logo-container">
          <img src="/assets/partners/slovakaid.png" alt="SlovakAid" />
        </a>

        <a class="logo-container" href="https://facebook.com/atelier99.org/">
          <img src="/assets/partners/atelier99.svg" alt="Atelier99" />
        </a>

        <a class="logo-container" >
          <img src="/assets/partners/fablab.png" alt="FabLab" />
        </a>

        <a class="logo-container" href="https://www.tekedu.org/">
          <img src="/assets/partners/tekedu.png" alt="Tekedu" />
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
  height: 34rem;
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
