<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <div class="top d-flex align-center">
        <router-link to="/">
          <h2>Logo</h2>
        </router-link>
        <v-spacer></v-spacer>
        <v-btn text>
          <v-img src="../src/assets/svg/login.svg" class="mr-2"></v-img>
          <span class="mr-2">ВХОД</span>
        </v-btn>
      </div>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.link"
          link
        >
          <v-list-item-content>
            <v-list-item-title class="nav-link">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="social-icons d-flex justify-center">
        <a href="#" class="vk">
          <img src="./assets/svg/vk.svg" />
        </a>
        <a href="#" class="fb">
          <img src="./assets/svg/facebook.svg" />
        </a>
        <a href="#" class="instagram">
          <img src="./assets/svg/instagram.svg" />
        </a>
      </div>
    </v-navigation-drawer>

    <v-app-bar app color="#000" dark fixed>
      <v-container>
        <v-row>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            class="hidden-sm-and-up"
          ></v-app-bar-nav-icon>
          <v-btn
            text
            v-for="item in items"
            :key="item.title"
            router
            :to="item.link"
            class="hidden-xs-only"
          >
            <span class="mr-2 nav-link">{{ item.title }}</span>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text @click="close()" class="enter">
            <v-img src="../src/assets/svg/login.svg" class="mr-2"></v-img>
            <span class="mr-2">ВХОД</span>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <transition name="slide" type="animation">
      <div class="bg-modal" v-if="isActive" :class="{ open: isActive }">
        <div class="modal-contents">
          <div class="close" @click="close()"></div>
          <h1>ЛИЧНЫЙ КАБИНЕТ</h1>
          <p class="text">ВВедите пожалуйста свой логин и пароль</p>
          <v-form>
            <div class="form-item">
              <input
                class="input"
                placeholder="ЛОГИН"
                type="email"
                id="email"
                v-model="email"
                name
              />
              <img src="./assets/login.png" alt />
            </div>
            <div class="form-item">
              <input
                class="input"
                placeholder="ПАРОЛЬ"
                id="password"
                type="password"
                v-model="password"
                name
              />
              <img src="./assets/password.png" alt />
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
                <button class="enter-btn register-btn" @click="close()">
                  Register
                </button>
              </router-link>

              <button @click="login" type="submit" class="enter-btn">
                ВОЙТИ
              </button>
            </div>
          </v-form>
        </div>
      </div>
    </transition>
  </v-app>
</template>

<script>
// import router from "./router";
import firebase from "firebase";

export default {
  name: "App",
  data: () => ({
    isActive: false,
    drawer: null,
    items: [
      { title: "ИНФОРМАЦИЯ", link: "/" },
      { title: "НОВОСТИ", link: "/news" },
      { title: "ПРАЙС-ЛИСТ", link: "/price" },
      { title: "МАГАЗИН", link: "/market" },
      { title: "КОНТАКТЫ", link: "/contacts" },
    ],
    email: "",
    password: "",
  }),
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    close() {
      this.isActive = !this.isActive;
    },
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
            this.$router.push("/dashboard"),
          
          // (user) => {
          //   alert(`You are logged in as ${user.email}`);
          //   this.$router.go({ path: this.$router.path });
          // },
          (err) => {
            alert(err.message);
          }
        );
      e.preventDefault();
      this.isActive = !this.isActive;
      
    },
  },
};
</script>

<style lang="scss">
@import "./mixins.scss";
@media (min-width: 1264px) {
  .container {
    max-width: 960px !important;
  }
}
// MODAL STARTS HERE //
.open {
  display: flex !important;
}
.bg-modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  display: none;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-contents {
  width: 400px;
  max-height: 406px;
  margin-top: 40px;
  background-color: #f7f4f1;
  padding: 40px 50px;
  position: fixed;
  top: 70px;

  @media (max-width: 780px) {
    padding: 30px 40px;
    width: 60%;
    max-height: 330px;
  }
  @include for-phone-only {
    padding: 25px 34px;
    margin-top: 90px;
  }
  @media (max-width: 560px) {
    margin-top: 70px;
    width: 77%;
    max-height: 310px;
  }
  @media (max-width: 360px) {
    padding: 15px 20px;
    width: 70%;
    max-height: 310px;
  }

  h1 {
    margin-bottom: 26px;
    text-transform: uppercase;
    @extend .title;
    @media (max-width: 780px) {
      font-size: 24px;
      margin-bottom: 10px;
    }
    @media (max-width: 300px) {
      font-size: 18px;
      margin-bottom: 5px;
    }
  }

  .v-form {
    div {
      @media (max-width: 780px) {
        align-items: unset !important;
      }
      @include for-phone-only {
        display: block !important;
        text-align: center;
      }
      @media (max-width: 560px) {
        display: flex !important;
        text-align: unset;
      }
      @media (max-width: 380px) {
        display: block !important;
        text-align: center;
      }
    }
    .form-item {
      position: relative;
      .input {
        padding: 12px 28px 12px 16px;

        color: #000;
        width: 100%;
        @media (max-width: 780px) {
          padding: 8px 28px 8px 8px;
          font-size: 12px;
        }
        @media (max-width: 380px) {
          padding: 4px 22px 4px 4px;
        }
        &::-webkit-input-placeholder {
          color: #000;
          @media (max-width: 780px) {
            font-size: 12px;
          }
        }

        &:-ms-input-placeholder {
          color: #000;
          @media (max-width: 780px) {
            font-size: 12px;
          }
        }

        &::placeholder {
          color: #000;
          @media (max-width: 780px) {
            font-size: 12px;
          }
        }
      }
      img {
        position: absolute;
        right: 4%;
        top: 40%;

        @media (max-width: 560px) {
          top: 25%;
        }
      }
    }
    .rememberMe {
      line-height: 1.286;
      display: block;
      position: relative;
      padding-left: 32px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      @extend .text;
      @media (max-width: 780px) {
        margin-bottom: 15px;
        padding-left: 32px;
      }
      @include for-phone-only {
        font-size: 12px;
        margin-bottom: 6px;
        padding-left: 20px;
      }

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        border: 2px solid #000;
        @include for-phone-only {
          height: 15px;
          width: 15px;
          border: 1.5px solid #000;
          left: 50px;
        }
        @media (max-width: 560px) {
          left: 0;
        }
        @media (max-width: 380px) {
          left: 54px;
        }
        @media (max-width: 360px) {
          left: 44px;
        }
        @media (max-width: 324px) {
          left: 34px;
        }
        @media (max-width: 300px) {
          left: 26px;
        }
      }
    }
    .checkmark:after {
      content: "\d7";
      position: absolute;
      display: none;
      font-size: 22px;
      font-weight: bold;

      @include for-phone-only {
        font-size: 19px;
      }
    }

    .rememberMe,
    input:checked ~ .checkmark:after {
      display: block;
    }

    .rememberMe .checkmark:after {
      top: -6px;
      left: 2px;
      @include for-phone-only {
        top: -7px;
        left: 1px;
      }
    }

    .forget {
      float: right;
      color: #000;
      font-weight: bold;
      text-decoration: none;
      font-size: 14px;
      // border-bottom: 2px solid #9d9b99;
      position: relative;

      @include for-phone-only {
        font-size: 12px;
        margin-bottom: 10px;
        float: unset;
      }

      &:hover {
        &:before {
          transform: scaleX(1);
        }
      }
      &:before {
        content: "";
        width: 100%;
        height: 2px;
        background: #9d9b99;
        top: 100%;
        position: absolute;
        transform: scaleX(0);
        transition: all 0.2s ease-in-out;
      }
    }
  }

  .enter-btn {
    padding: 12px 40px;
    // width: 100%;
    margin-top: 20px;
    @extend .general-btn;
    @media (max-width: 780px) {
      padding: 10px 25px;
      font-size: 12px;
      margin-top: 0;
    }
    @include for-phone-only {
      padding: 5px 15px;
      margin-top: 10px;
    }
    @media (max-width: 380px) {
      float: right;
    }
  }
  .register-btn {
    @media (max-width: 380px) {
      float: left;
    }
  }
}

input {
  margin: 15px auto;
  display: block;
  width: 50%;
  padding: 8px;
  border: 1px solid gray;
}

.close {
  position: absolute;
  top: 10px;
  right: -50px;
  font-size: 42px;
  color: #d0d0d0;
  cursor: pointer;
  width: 32px;
  height: 32px;
  @media (max-width: 560px) {
    right: -30px;
  }

  &:after,
  &:before {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 5px;
    background-color: #d0d0d0;

    @include for-phone-only {
      height: 24px;
    }
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}

// Animations
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 700ms ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 700ms ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(-500px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-500px);
  }
}

.top {
  padding: 16px 16px 0;
  a {
    text-decoration: none;
    color: #000 !important;
  }
}
.social-icons {
  margin-top: 20px;
  justify-content: center;
  a {
    background: #000;
    width: 36px;
    height: 36px;
    margin: 0 10px;
  }
  .vk {
    padding: 11px 5px;
  }
  .fb {
    padding: 8px 10px;
  }
  .instagram {
    padding: 9px;
  }
}
.v-toolbar {
  height: 70px !important;
  @include for-tablet-portrait-up {
    height: 56px !important;
  }
}
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0 !important;
  height: 70px !important;
  @include for-tablet-portrait-up {
    height: 56px !important;
  }
}

.v-toolbar__content .v-btn.v-btn--icon.v-size--default {
  height: 56px !important;
}

.v-btn:not(.v-btn--round).v-size--default {
  font-family: "PTSansNarrowBold", serif;
  font-size: 16px;
  padding: 35px 10px !important;

  @include for-phone-only {
    padding: 27px 10px !important;
  }
  @include for-tablet-portrait-up {
    padding: 28px 10px !important;
    font-size: 13px;
  }
}
.theme--dark.v-btn:hover::before {
  opacity: 0.18 !important;
}
.v-btn:before {
  border-radius: 0 !important;
}
@font-face {
  font-family: PTSansNarrowBold;
  src: url(./assets/fonts/web/ptsansnarrowbold.woff);
}
@font-face {
  font-family: PTSansNarrow;
  src: url(./assets/fonts/web/ptsansnarrow.woff);
}
</style>
