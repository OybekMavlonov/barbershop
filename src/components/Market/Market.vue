<template>
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
</template>

<script>
import Categories from "./Categories.vue";
import Products from "./Products.vue";

export default {
  components: { Categories, Products }
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
  .header {
    margin-bottom: 55px;
    @media (max-width: 780px) {
      margin-bottom: 30px;
    }
    @include for-phone-only {
      margin-bottom: 15px;
    }
    h1 {
      font-family: "PTSansNarrowBold", sans-serif;
      font-size: 30px;
      text-transform: uppercase;
      line-height: 1.4;
      margin-bottom: 18px;
      @media (max-width: 780px) {
        font-size: 25px;
        margin-bottom: 8px;
      }
      @include for-phone-only {
        font-size: 18px;
        margin-bottom: 3px;
      }
    }
    .path {
      span {
        font-size: 14px;
        font-family: "PTSansNarrowBold", sans-serif;
        color: rgb(0, 0, 0);
        line-height: 1.429;
        @include for-phone-only {
          font-size: 12px;
        }
        &:last-child {
          color: rgb(171, 169, 167);
        }
      }
      img {
        margin: 0 13px;
        @include for-phone-only {
          margin: 0 7px;
        }
      }
    }
  }
}
</style>
