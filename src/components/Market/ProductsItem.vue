<template>
  <v-col cols="12" sm="6" md="4">
    <div class="products">
      <router-link :to="'/market/' + product.name">
        <div class="products__img" @click="sendProduct(product)">
          <v-img :src="product.card_img"></v-img>
        </div>
      </router-link>
      <div class="products__info">
        <div class="products__info-name">{{ product.name }}</div>
        <div class="products__info-manufacturer">
          «{{ manufacturers[product.manufacturerId].title }}»
        </div>
        <div class="d-flex">
          <div class="products__info-price">{{ product.price }} ₽</div>
          <button class="buy">КУПИТЬ</button>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
import { manufacturers } from "../../db.js";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      show: true,
      manufacturers: manufacturers,
      productId: (this.$route.params.id = this.product.id),
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["sendProduct"]),
  },
};
</script>

<style lang="scss">
@import "../../mixins.scss";
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
      @extend .text;
      @include for-tablet-landscape-up {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
    &-manufacturer {
      margin-bottom: 17px;
      @extend .text;
      @include for-phone-only {
        margin-bottom: 10px;
      }
    }
    &-price {
      font-family: "PTSansNarrowBold", sans-serif;
      display: inline;
      padding: 10px 0px;
      width: 100%;
      text-align: center;
      background: #e5e5e5;
      font-size: 14px;

      @include for-phone-only {
        padding: 8px 0;
      }
    }
  }
}
</style>
