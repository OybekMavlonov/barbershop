<template>
  <div>
    <div class="market">
      <v-container>
        <div class="header">
          <h1>набор для путешествий «Baxter of California»</h1>
          <div class="path">
            <span>ГЛАВНАЯ</span>
            <img src="../../assets/svg/rec.svg" alt="rec" />
            <span>МАГАЗИН</span>
            <img src="../../assets/svg/rec.svg" alt="rec" />
            <span>СРЕДСТВА ДЛЯ УХОДА</span>
            <img src="../../assets/svg/rec.svg" alt="rec" />
            <span>набор для путешествий «Baxter of California»</span>
          </div>
        </div>
        <v-row>
          <v-col cols="12" md="6">
            <v-img src="../../assets/baxter1.png" style="box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;"></v-img>
            <div class="other-images d-flex justify-space-between">
              <v-img
                v-for="(img, index) in productInfo.other_images"
                :key="index"
                :src="productInfo.other_images[index]"
              ></v-img>
              <!-- <v-img src="../../assets/baxter2.png"></v-img>
              <v-img src="../../assets/baxter3.png"></v-img>
              <v-img src="../../assets/baxter4.png"></v-img> -->
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="product-info">
              <div class="cash d-flex justify-space-between">
                <span class="text">есть в наличии</span>
                <span class="text" style="color: grey">Артикул: dexter-ae</span>
              </div>
              <div
                class="kit text"
              >{{productInfo.info}}</div>
              <div class="d-flex" style="width: 50%">
                <div class="products__info-price">{{productInfo.price}} ₽</div>
                <button class="buy">КУПИТЬ</button>
              </div>
              <div class="set-includes">
                <h2>МЫ ИСПОЛЬЗУЕМ ТОЛЬКО ЛУЧШИЕ СРЕДСТВА:</h2>
                <ul>
                  <li v-for="(amenity, index) in productInfo.amenities" :key="index">
                    <img src="../../assets/svg/rec.svg" alt />
                    {{amenity}}
                  </li>
                  <!-- <li>
                    <img src="../../assets/svg/rec.svg" alt />Mr Natty
                  </li>
                  <li>
                    <img src="../../assets/svg/rec.svg" alt />Suavecito
                  </li>
                  <li>
                    <img src="../../assets/svg/rec.svg" alt />Malin+Goetz
                  </li>
                  <li>
                    <img src="../../assets/svg/rec.svg" alt />Malin+Goetz
                  </li> -->
                </ul>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../Footer.vue";
export default {
  data: () => ({}),
  components: {
    Footer
  },
  computed: {
    productInfo() {
      return this.$store.getters.getProduct;
    }
  }
};
</script>

<style lang="scss">
@import "../../mixins.scss";
.market {
  .other-images {
    margin-top: 20px;
    .v-image {
      box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
      @include for-phone-only {
        height: 140px;
        width: 80px;
      }
    }
    .v-image:not(:last-child) {
      margin-right: 20px;
      @include for-phone-only {
        margin-right: 8px;
      }
    }
  }

  .product-info {
    padding-left: 60px;
    @include for-phone-only {
      padding: 0px;
    }
    .cash {
      margin-top: 25px;
      @include for-phone-only {
        margin-top: 0;
      }
    }
    .kit {
      margin: 40px 0;
      @include for-phone-only {
        margin: 20px 0;
      }
    }
    .set-includes {
      margin-top: 60px;
      @include for-phone-only {
        margin-top: 30px;
      }
      ul {
        li {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>