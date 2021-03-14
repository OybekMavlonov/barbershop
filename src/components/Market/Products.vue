<template>
  <v-col cols="9" md="9">
    <v-row>
      <ProductsItem
        v-for="product in pageList"
        :key="product.id"
        :product="product"
      ></ProductsItem>
    </v-row>
    <paginate
      v-model="page"
      :page-count="this.showManufacturer.length / 6"
      :page-range="this.showManufacturer.length / 6"
      :margin-pages="this.showManufacturer.length / 6"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :next-class="'d-none'"
      :prev-class="'d-none'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </paginate>
  </v-col>
</template>

<script>
import { products } from "../../db.js";
import ProductsItem from "./ProductsItem";

const customStyles = {
  li: {
    display: "inline-block",
    margin: "0 3px",
  },

  a: {
    color: "#fff",
    background: "#000",
    border: "1px solid #000",
    padding: "10px 17px",
    fontSize: "14px",
    fontFamily: "PTSansNarrowBold, Arial",
    textTransform: "uppercase",
    textAlign: "center",
  },
};
export default {
  data() {
    return {
      page: 1,
      products: products,
      customStyles,
    };
  },
  components: {
    ProductsItem,
  },
  computed: {
    pageList() {
      return this.showManufacturer.slice(
        (this.page - 1) * 6,
        (this.page - 1) * 6 + 6
      );
    },
    categoryId() {
      return this.$store.getters.categoryId;
    },
    manufacturersId() {
      return this.$store.state.manufacturersId;
    },
    isIncluded() {
      return this.products.filter((product) => {
        return product.productId.includes(this.categoryId);
      });
    },
    showManufacturer() {
      return this.isIncluded.filter((item) => {
        return this.manufacturersId.includes(item.manufacturerId);
      });
    },
    selectedProducts() {
      return this.$store.state.selectedProducts;
    },
  },
  methods: {
    clickCallback(pageNum) {
      console.log(pageNum);
      this.page = pageNum;
    },
  },
};
</script>

<style lang="scss">
.pagination {
  list-style-type: none;
  padding: 0 !important;
  display: flex;
  margin-top: 20px;
  li {
    margin: 0 3px;

    a {
      padding: 13px 19px;
      background: #000;
      color: #fff;
      text-align: center;
      border: 1px solid #000;
      font-size: 14px;
      font-family: "PTSansNarrowBold", serif;
    }
  }
  .active {
    a {
      background: #fff !important;
      border: 1px solid #fff !important;
      color: #000 !important;
    }
  }
}
</style>
