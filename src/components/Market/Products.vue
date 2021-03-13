<template>
  <v-col cols="9" md="9">
    <v-row>
      <ProductsItem v-for="(product, index) in showManufacturer" :key="index" :product="product"></ProductsItem>
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
    manufacturersId() {
      return this.$store.state.manufacturersId;
    },
    isIncluded() {
      return this.products.filter(product => {
        return product.productId.includes(this.categoryId);
      });
    },
    showManufacturer() {
      return this.isIncluded.filter(item => {
        return this.manufacturersId.includes(item.manufacturerId);
      });
    }
  }
};
</script>