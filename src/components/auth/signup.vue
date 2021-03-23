<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input-box">
          <label for="email">Mail</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="input-box">
          <label for="age">Your Age</label>
          <input type="number" id="age" v-model.number="age" />
        </div>
        <div class="input-box">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div class="input-box">
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            v-model="confirmPassword"
          />
        </div>
        <div class="input-box">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="uzbekistan">Uzbekistan</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
          </select>
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>

    <transition name="slide" type="animation">
      <div class="bg-modal" v-if="isActive" :class="{ open: isActive }">
        <div class="modal-contents">
          <div class="close" @click="close()"></div>
          <h4>Последовательно зарегистрированы. Пожалуйста, войдите в свой ЛИЧНЫЙ КАБИНЕТ</h4>
          <p class="text">ВВедите пожалуйста свой логин и пароль</p>
          <v-form @submit.prevent="onSubmitSignin">
            <div class="form-item">
              <input
                class="input"
                placeholder="ЛОГИН"
                type="email"
                id="email"
                v-model="signinEmail"
                name
              />
              <img src="../../assets/login.png" alt />
            </div>
            <div class="form-item">
              <input
                class="input"
                placeholder="ПАРОЛЬ"
                id="password"
                type="password"
                v-model="signinPassword"
                name
              />
              <img src="../../assets/password.png" alt />
            </div>
            <div class="d-flex justify-space-between align-center">
              <label class="rememberMe">
                ЗАПОМНИТЕ МЕНЯ
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <a href="#" class="forget">Я ЗАБЫЛ ПАРОЛЬ!</a>
            </div>
            <div class="buttons d-flex justify-space-between">
              <router-link to="/signup">
                <button class="enter-btn" @click="close()">Register</button>
              </router-link>

              <button type="submit" class="enter-btn">ВОЙТИ</button>
            </div>
          </v-form>
        </div>
      </div>
    </transition>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../Footer'
export default {
  data() {
    return {
      email: "",
      age: null,
      password: "",
      confirmPassword: "",
      country: "uzbekistan",
      isActive: false,
      signinEmail: "",
      signinPassword: ""
    };
  },
  components: {
    Footer
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword,
        country: this.country,
      };
      console.log(formData);
      this.$store.dispatch("signup", formData);
      // this.$router.push("/dashboard");
      this.isActive = !this.isActive;
    },
    onSubmitSignin() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData);
      this.$store.dispatch("login", {
        email: formData.email,
        password: formData.password,
      });
      this.$router.push("/dashboard");
      this.isActive = !this.isActive;
    },
    close() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-contents {
  h4 {
    text-transform: uppercase;
  }
}
.signup-form {
  width: 800px;
  margin: 30px auto;
  border: 1px solid #000;
  padding: 20px;
  box-shadow: 0 2px 3px #000;
}

.input-box {
  margin: 10px auto;
}

.input-box label {
  display: block;
  color: #000;
  margin-bottom: 6px;
}

.input-box.inline label {
  display: inline;
}

.input-box input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #000;
}

.input-box.inline input {
  width: auto;
}

.input-box input:focus {
  outline: none;
  border: 1px solid #000;
  background-color: #eee;
}

.input-box select {
  border: 1px solid #000;
  font: inherit;
}

.submit button {
  border: 1px solid #000;
  color: #000;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #000;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #000;
  background-color: transparent;
  color: #000;
  cursor: not-allowed;
}
</style>
