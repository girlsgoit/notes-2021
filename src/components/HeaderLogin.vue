<template>
  <header class="header">
    <div class="header-container">
      <div class="header-left">
        <a href="#" class="headerleft">
          {{ user.fullName || user.username }}
        </a>
      </div>
      <div class="header-middle">
        <router-link to="/dashboard">
          <img
            src="https://s3-alpha-sig.figma.com/img/eb24/ca1c/6b46f3629797526e406626fc13be7290?Expires=1629072000&Signature=DFPxeo1LPnVum8j3nD3Ykcg1wa3XgChaaHThZNMt1uSjuZ33HaSmZJns6C87ByrA8Pc0yleE-2xkB2FX-NyubBrzBWoKNYdQtY1LfTgeemenhsLzNRcFfgkdAmxAhlRsyAanTAD0ueuiEPJauYEmTgqpT0vFQuKG3mgBY0wCRiiopXsKKPFKtIbqbVZ6TBgzqr-iEdV4kABsKuTStrXEOcugmlRgg-7-AVKT1c-aJtLWTKDPwVO-e9gv9kJ1O7Bf1FTWOdY0P8BXCdgxQQW1WOoPvmWd3Pn7LKZzagEeq5gAFimAf1m11SZ6DL3BI3k-Tj3ZuFSgvG9x~iH8WSjbFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="Logo"
          />
        </router-link>
      </div>
      <div class="header-right">
        <nav>
          <ul>
            <li>
              <a href="#"> SETTINGS </a>
            </li>
            <li>
              <a href="#"> HELP </a>
            </li>
            <li>
              <a href="#"> SIGN OUT </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderLogin",
  props: {
    user: {}
  }
};
</script>

<style scoped>
.header {
  padding: 30px 0;
  font-family: "Roboto", sans-serif;
}

.header-container {
  max-width: 960px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 30px;
}

.header a {
  color: #393939;
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.4s ease;
}

.header-left,
.header-right {
  width: 40%;
}

.header-middle {
  width: 20%;
}

.header-middle {
  text-align: center;
}

.header-right ul {
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
}

.header-right a {
  margin-left: 40px;
}

.header-right ul li:first-child a {
  margin-left: 0;
}

.header a:hover {
  color: #278df6;
}

@media screen and (max-width: 900px) {
  .header {
    text-align: center;
  }

  .header-container {
    flex-direction: column;
  }

  .header-left,
  .header-right,
  .header-middle {
    width: 100%;
  }

  .header-middle {
    order: -1;
  }

  .header-right ul {
    justify-content: center;
  }

  .header-left,
  .header-middle {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 370px) {
  .header nav ul {
    flex-direction: column;
  }

  .header-right a {
    margin-left: 0;
  }

  .header-right nav ul li {
    margin-bottom: 10px;
  }

  .header-right nav ul li:last-child {
    margin-bottom: 0;
  }
}
</style>