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
              <v-img src="../../assets/baxter2.png"></v-img>
              <v-img src="../../assets/baxter3.png"></v-img>
              <v-img src="../../assets/baxter4.png"></v-img>
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
              >Travel Kit – необходимый аксессуар во время любого путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки или отдыха: средство для умывания, увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор также может стать отличным подарком.</div>
              <div class="d-flex" style="width: 50%">
                <div class="products__info-price">{{productInfo.price}} ₽</div>
                <button class="buy">КУПИТЬ</button>
              </div>
              <div class="set-includes">
                <h2>МЫ ИСПОЛЬЗУЕМ ТОЛЬКО ЛУЧШИЕ СРЕДСТВА:</h2>
                <ul>
                  <li>
                    <img src="../../assets/svg/rec.svg" alt />Baxter of California
                  </li>
                  <li>
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
                  </li>
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
    }
    .v-image:not(:last-child) {
      margin-right: 20px;
    }
  }

  .product-info {
    padding-left: 60px;
    .cash {
      margin-top: 25px;
    }
    .kit {
      margin: 40px 0;
    }
    .set-includes {
      margin-top: 60px;
      ul {
        li {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>