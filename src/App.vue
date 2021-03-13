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
        <v-list-item v-for="item in items" :key="item.title" router :to="item.link" link>
          <v-list-item-content>
            <v-list-item-title class="nav-link">
              {{
              item.title
              }}
            </v-list-item-title>
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
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
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
          <v-btn text>
            <v-img src="../src/assets/svg/login.svg" class="mr-2"></v-img>
            <span class="mr-2">ВХОД</span>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: null,
    items: [
      { title: "ИНФОРМАЦИЯ", link: "/" },
      { title: "НОВОСТИ", link: "/news" },
      { title: "ПРАЙС-ЛИСТ", link: "/price" },
      { title: "МАГАЗИН", link: "/market" },
      { title: "КОНТАКТЫ", link: "/contacts" }
    ]
  })
};
</script>

<style lang="scss">
@import "./mixins.scss";
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
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0 !important;
}

.v-toolbar__content .v-btn.v-btn--icon.v-size--default {
  height: 56px !important;
}

.v-btn:not(.v-btn--round).v-size--default {
  font-family: "PTSansNarrowBold", serif;
  font-size: 16px;
  padding: 32px 16px !important;

  @include for-phone-only {
    padding: 27px 10px !important;
  }
  @include for-tablet-portrait-up {
    padding: 27px 10px !important;
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
