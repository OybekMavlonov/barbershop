<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p v-if="isLoggedIn">
      Your email address: {{ currentUser }}
    </p>

    <button @click="logout" type="submit" class="logout-btn">
      Logout
    </button>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
    };
  },
  computed: {
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    },
    password() {
      return !this.$store.getters.user
        ? false
        : this.$store.getters.user.password;
    },
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../mixins.scss";
h1,
p {
  text-align: center;
}

p {
  color: red;
}

.logout-btn {
  margin: 0 auto;
  display: block;
  padding: 10px 20px;
  @extend .general-btn;
}
</style>
