<template>
  <body>
    <section class="register-page">
      <div class="register">
        <!-- <img src="assets/app-view/logo.png" alt="logo" /> -->
        <form>
          <input
            v-model="userName"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
          />

          <input
            v-model="fullName"
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full name"
            required
          />

          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />

          <input
            v-model="confirmPassword"
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirm Password"
            required
          />

          <div class="buttons">
            <button
              @click="onRegisterClick($event)"
              class="register-button registerButton"
            >
              Register
            </button>

            <button
              @click="onLoginClick($event)"
              class="register-button loginButton"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  </body>
</template>



<script>
import axios from "axios";

export default {
  name: "registerPage",

  props: {},

  data() {
    return {
      userName: "",

      fullName: "",

      password: "",

      confirmPassword: ""
    };
  },

  methods: {
    async onRegisterClick(event) {
      if (this.userName === "") {
        alert("Username empty");
      } else if (this.fullName === "") {
        alert("Full name empty");
      } else if (this.password === "") {
        alert("Password empty");
      } else if (this.confirmPassword === "") {
        alert("Confirm Password empty");
      } else if (this.password.length < 6) {
        alert("Ppassword too short (minimum of 6 digits)");
      } else if (this.password !== this.confirmPassword) {
        alert("Thhe passwords don't match");
      } else {
        var data = {
          userName: "",

          fullName: "",

          password: "",

          confirmPassword: ""
        };

        try {
          //axios.post("dsadsa", data)
        } catch (error) {}
        // alert("registration succeded")
      }
    },

    onLoginClick(event) {
      this.$router.push(`/login`);
    }
  }
};
</script>



<style scoped>
.register-page {
  display: flex;

  align-item: center;

  juify-content: center;

  height: 100vh;

  margin: auto;

  width: 50%;

  padding: 10px;

  font-family: "Roboto", sans-serif;
}

.register {
  height: 473px;

  width: 352px;

  border: 2px #2ea1f8 solid;

  border-radius: 5px;

  background: white solid;
}

.register img {
  margin: 25px 115px 25px 114px;
}

.register form {
  display: flex;

  align-items: center;

  justify-content: center;

  flex-direction: column;
}

.register form input {
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

.registerButton {
  background: #2ea1f8;

  border: #2eaaa1f8;

  color: #ffffff;
}

.loginButton {
  background-color: #ffffff;

  border: none;

  color: #278df6;
}
</style>