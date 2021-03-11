<template>
  <v-col cols="9" md="9">
    <v-row>
      <ProductsItem
        v-for="(product, index) in isIncluded.slice(0, Math.ceil(isIncluded.length/3))"
        :key="index"
        :product="product"
      ></ProductsItem>
      <ProductsItem
        v-for="(product, index) in isIncluded.slice(Math.ceil(isIncluded.length/3), Math.ceil(isIncluded.length/2 + 1))"
        :key="index"
        :product="product"
      ></ProductsItem>
      <ProductsItem
        v-for="(product, index) in isIncluded.slice(Math.ceil(isIncluded.length/2 + 1), isIncluded.length)"
        :key="index"
        :product="product"
      ></ProductsItem>
    </v-row>
  </v-col>
</template>

<script>
import { products } from "../../db.js";
import ProductsItem from "./ProductsItem";

export default {
  data() {
    return {
      products: products
    };
  },
  components: {
    ProductsItem
  },
  computed: {
    categoryId() {
      return this.$store.getters.categoryId;
    },
    isIncluded() {
      return this.products.filter(product => {
        return product.productId.includes(this.categoryId);
      });
    }
  }
};
</script>