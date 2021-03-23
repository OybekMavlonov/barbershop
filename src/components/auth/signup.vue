<template>
  <div id="signup">
    <div class="signup-form">
      <form>
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
          <button @click="register" type="submit">Submit</button>
        </div>
      </form>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../Footer";
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      age: null,
      password: "",
      confirmPassword: "",
      country: "uzbekistan",
      isActive: false,
    };
  },
  components: {
    Footer,
  },
  methods: {
    close() {
      this.isActive = !this.isActive;
    },
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log(user);
            // alert(`Account Created for ${user.email}`);
            // this.$router.go({ path: this.$router.path });
            this.$router.push("/dashboard");
            
          },
          (error) => {
            if (error) {
              alert(error.message);
            } else {
              this.isActive = !this.isActive;
            }
          }
        );
      // .catch((error) => {
      //   if (error) {
      //     alert(error.message);
      //   } else {
      //     this.isActive = !this.isActive;
      //   }
      // });

      e.preventDefault();
    }
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
