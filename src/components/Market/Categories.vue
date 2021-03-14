<template>
  <v-col cols="3" md="3">
    <div class="manufacturers">
      <h2>ПРОИЗВОДИТЕЛИ:</h2>
      <label
        class="manufacturers-item"
        v-for="item in manufacturers"
        :key="item.id"
        @change="sendManufacturersId(manufacturerArray)"
      >
        {{ item.title }}
        <input type="checkbox" :value="item.id" v-model="manufacturerArray" />
        <span class="checkmark"></span>
      </label>
    </div>

    <div class="categories">
      <h2>ГРУППЫ ТОВАРОВ:</h2>
      <label class="categories-item" v-for="item in categories" :key="item.id">
        {{ item.title }}
        <input
          type="radio"
          name="radio"
          :value="item.id"
          v-model="categoryId"
          @click="getCategoryId(item.id)"
        />
        <span class="checkmark"></span>
      </label>
    </div>

    <button class="show" @click="selected()">Показать</button>
  </v-col>
</template>

<script>
import { categories } from "../../db.js";
import { manufacturers } from "../../db.js";
import { products } from "../../db.js";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      categories: categories,
      products: products,
      manufacturers: manufacturers,
      manufacturerArray: [],
      categoryId: NaN,
    };
  },
  computed: {
    isIncluded() {
      return this.products.filter((product) => {
        return product.productId.includes(this.categoryId);
      });
    },
    showManufacturer() {
      return this.isIncluded.filter((item) => {
        return this.manufacturerArray.includes(item.manufacturerId);
      });
    },
  },
  methods: {
    ...mapActions(["getCategoryId", "sendManufacturersId"]),

    // sendManufacturersId(mArray) {
    //   this.$store.commit("sendManufacturersId", mArray)
    // }
    selected() {
      this.$store.commit("selected", this.showManufacturer);
    },
  },
};
</script>

<style lang="scss">
@import "../../mixins.scss";

.manufacturers {
  h2 {
    font-family: "PTSansNarrowBold", sans-serif;
    line-height: 1.25;
    margin-bottom: 32px;
    font-size: 24px;
    @media (max-width: 780px) {
      font-size: 20px;
      margin-bottom: 20px;
    }
    @include for-phone-only {
      font-size: 15px;
      margin-bottom: 15px;
    }
  }

  &-item {
    @extend .text;
    line-height: 1.286;
    display: block;
    position: relative;
    padding-left: 42px;
    margin-bottom: 20px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: 780px) {
      margin-bottom: 15px;
      padding-left: 32px;
    }
    @include for-phone-only {
      font-size: 12px;
      margin-bottom: 10px;
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
      }
    }
  }
  .checkmark:after {
    content: "\d7";
    position: absolute;
    display: none;
    font-size: 22px;
    font-weight: bold;
  }

  .manufacturers-item,
  input:checked ~ .checkmark:after {
    display: block;
  }

  .manufacturers-item .checkmark:after {
    top: -6px;
    left: 1px;
    @include for-phone-only {
      top: -8px;
      left: 0px;
    }
  }
}

.categories {
  margin-bottom: 46px;
  @media (max-width: 780px) {
    margin-bottom: 30px;
  }
  @include for-phone-only {
    margin-bottom: 20px;
  }
  h2 {
    font-family: "PTSansNarrowBold", sans-serif;
    font-size: 24px;
    line-height: 1.25;
    margin-bottom: 32px;
    margin-top: 50px;

    @media (max-width: 780px) {
      margin-bottom: 20px;
      margin-top: 30px;
      font-size: 20px;
    }
    @include for-phone-only {
      font-size: 18px;
      margin-bottom: 15px;
      margin-top: 20px;
    }
  }

  &-item {
    display: block;
    position: relative;
    padding-left: 42px;
    margin-bottom: 20px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    line-height: 1.286;
    @extend .text;
    @media (max-width: 780px) {
      margin-bottom: 15px;
      padding-left: 32px;
    }
    @include for-phone-only {
      font-size: 12px;
      margin-bottom: 10px;
      padding-left: 20px;
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      border: 2px solid #000;
      border-radius: 50%;
      background-color: #fff;
      @include for-phone-only {
        height: 15px;
        width: 15px;
        border: 1.5px solid #000;
      }
    }
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .categories-item,
  input:checked ~ .checkmark:after {
    display: block;
  }

  .categories-item .checkmark:after {
    left: 5px;
    top: 5px;
    width: 7px;
    height: 7px;
    background: #000;
    border-radius: 50%;

    @include for-phone-only {
      top: 2px;
      left: 2px;
    }
  }
}

.show {
  padding: 15px 27px;
  text-transform: uppercase;
  @extend .general-btn;
  @media (max-width: 780px) {
    padding: 12px 20px;
  }
}
</style>
