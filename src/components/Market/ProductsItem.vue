<template>
  <v-col cols="12" sm="6" md="4">
    <div class="products" @click="buy(product)">
      <div class="products__img">
        <v-img src="../../assets/baxter.png"></v-img>
      </div>
      <div class="products__info">
        <div class="products__info-name">{{product.name}}</div>
        <div class="products__info-manufacturer">«{{manufacturers[product.manufacturerId].title}}»</div>
        <div class="d-flex">
          <div class="products__info-price">{{product.price}} ₽</div>
          <button class="buy">КУПИТЬ</button>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
import { manufacturers } from "../../db.js";
export default {
  data() {
    return {
      show: true,
      manufacturers: manufacturers
    };
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    // addToCart(product) {
    //   // EventBus.$emit("add-to-cart", product);
    // }
  }
};
</script>

<style lang="scss">
@import "../../mixins.scss";

.name {
  font-family: "PTSansNarrowBold", sans-serif;
  font-size: 14px;
  color: rgb(0, 0, 0);
  line-height: 1.286;
}
.products {
  margin-bottom: 17px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &__info {
    padding: 17px;
    @include for-phone-only {
      padding: 10px;
      text-align: center;
    }
    &-name {
      @extend .name;
    }
    &-manufacturer {
      text-transform: uppercase;
      margin-bottom: 17px;
      @extend .name;
      @include for-phone-only {
        margin-bottom: 10px;
      }
    }
    &-price {
      font-family: "PTSansNarrowBold", sans-serif;
      display: inline;
      padding: 15px 0px;
      width: 100%;
      text-align: center;
      background: #e5e5e5;
      font-size: 14px;

      @include for-phone-only {
        padding: 8px 0;
      }
    }
    .buy {
      font-family: "PTSansNarrowBold", sans-serif;
      font-size: 14px;
      width: 100%;
      color: rgb(255, 255, 255);
      line-height: 1.286;
      background: #000;
      padding: 15px 0px;
      text-align: center;
      @include for-phone-only {
        padding: 8px 0;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>