<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary>
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
      { title: "ИНФОРМАЦИЯ", link: "/info" },
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
  
  @include for-phone-only  {
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
