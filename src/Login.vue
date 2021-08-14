<template>
  <section class="login-page">
    <div class="login">
      <img
        src="https://s3-alpha-sig.figma.com/img/eb24/ca1c/6b46f3629797526e406626fc13be7290?Expires=1629072000&Signature=DFPxeo1LPnVum8j3nD3Ykcg1wa3XgChaaHThZNMt1uSjuZ33HaSmZJns6C87ByrA8Pc0yleE-2xkB2FX-NyubBrzBWoKNYdQtY1LfTgeemenhsLzNRcFfgkdAmxAhlRsyAanTAD0ueuiEPJauYEmTgqpT0vFQuKG3mgBY0wCRiiopXsKKPFKtIbqbVZ6TBgzqr-iEdV4kABsKuTStrXEOcugmlRgg-7-AVKT1c-aJtLWTKDPwVO-e9gv9kJ1O7Bf1FTWOdY0P8BXCdgxQQW1WOoPvmWd3Pn7LKZzagEeq5gAFimAf1m11SZ6DL3BI3k-Tj3ZuFSgvG9x~iH8WSjbFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt=""
      />
      <form>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          required
          v-model="input.username"
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          v-model="input.password"
        />
        <div class="buttons">
          <button
            @click.prevent="onloginButton($event)"
            class="register-button loginButton"
          >
            LOGIN
          </button>
          <button
            @click.prevent="onregisterButton($event)"
            class="register-button registerButton"
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  </section>
</template>


<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    async onloginButton(event) {
      if (this.input.username !== "" && this.input.password !== "") {
        const data = {
          username: this.input.username,
          password: this.input.password
        };

        try {
          let response = await axios.post(
            "https://notes-api.girlsgoit.org/users/login",
            data
          );

          let responseData = response.data;

          localStorage.setItem("NOTES_AUTH", responseData.token);

          localStorage.setItem("USER_NAME", this.input.username);
          response = await axios.get(
            "https://notes-api.girlsgoit.org/users/me"
          );
          responseData = response.data;
          localStorage.setItem("USER_ID", responseData.id);

          if (response.status === 200) {
            //console.log(response.data);
            this.gotoDashboard();
          }
        } catch (val) {
          alert("User nu exista");
        }

        this.$emit("authenticated", true);
      } else {
        console.log("A username and password must be present");
      }
    },
    gotoDashboard(event) {
      this.$router.push(`/Dashboard/`);
    },
    onregisterButton(event) {
      this.$router.push(`/Register/`);
    }
  }
};
</script>
      

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: auto;
  width: 50%;
  padding: 10px;
  font-family: "Roboto", sans-serif;
}

.login {
  height: 338px;
  width: 352px;
  border: 2px #2ea1f8 solid;
  border-radius: 5px;
  background: white solid;
}

.login img {
  margin: 25px 115px 25px 114px;
}

.login form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.login form input {
  width: 270px;
  height: 54px;
  margin-bottom: 19px;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 17px 0px 15px 21px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}

.register-button {
  width: 140px;
  height: 46px;
  margin: 0;
  margin-top: 10px;
  padding: 12px 16px 11px 17px;
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  left: 7px;
}

.loginButton {
  background: #2ea1f8;
  border: #2ea1f8;
  color: #ffffff;
}

.registerButton {
  background-color: #ffffff;
  border: none;
  color: #278df6;
}
</style>