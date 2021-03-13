<template>
  <div>
    <div class="market">
      <v-container>
        <div class="header">
          <h1>Средства для ухода</h1>
          <div class="path">
            <span>ГЛАВНАЯ</span>
            <img src="../../assets/svg/rec.svg" alt />
            <span>МАГАЗИН</span>
            <img src="../../assets/svg/rec.svg" alt />
            <span>СРЕДСТВА ДЛЯ УХОДА</span>
          </div>
        </div>
        <v-row>
          <Categories></Categories>
          <Products></Products>
        </v-row>
      </v-container>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Categories from "./Categories.vue";
import Products from "./Products.vue";
import Footer from "../Footer.vue";

export default {
  components: { Categories, Products, Footer }
};
</script>

<style lang="scss">
@import "../../mixins.scss";
.market {
  background: #f2efec;
  padding: 48px 0 38px;

  @media (max-width: 780px) {
    padding: 28px 0 18px;
  }

  @include for-phone-only {
    padding: 8px 0 0px;
  }
}
</style>
