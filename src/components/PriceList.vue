<template>
  <div class="price-list">
    <v-container>
      <div class="header">
        <h1>ПРАЙС-ЛИСТ</h1>
        <div class="path">
          <span>ГЛАВНАЯ</span>
          <img src="../assets/svg/rec.svg" alt />
          <span>ПРАЙС-ЛИСТ</span>
        </div>
      </div>

      <div class="price-list_title d-flex">
        <div class="line"></div>
        <h1>ИСТИННО МУЖСКАЯ КЛАССИКА</h1>
        <div class="line"></div>
      </div>

      <v-row>
        <v-col cols="12" sm="6" md="6">
          <div class="set-includes">
            <h2>МЫ ИСПОЛЬЗУЕМ ТОЛЬКО ЛУЧШИЕ СРЕДСТВА:</h2>
            <ul>
              <li>
                <img src="../assets/svg/rec.svg" alt />Baxter of California
              </li>
              <li>
                <img src="../assets/svg/rec.svg" alt />Mr Natty
              </li>
              <li>
                <img src="../assets/svg/rec.svg" alt />Suavecito
              </li>
              <li>
                <img src="../assets/svg/rec.svg" alt />Malin+Goetz
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <div class="set-includes">
            <h2>ЦЕНЫ НА УСЛУГИ НАШИХ МАСТЕРОВ:</h2>
            <table>
              <tr>
                <td>СТРИЖКА</td>
                <td>1500 ₽</td>
              </tr>
              <tr>
                <td>СТРИЖКА БОРОДЫ</td>
                <td>500 ₽</td>
              </tr>
              <tr>
                <td>НАКРУТКА УСОВ</td>
                <td>350 ₽</td>
              </tr>
            </table>
          </div>
        </v-col>
        <v-col cols="12">
            <h2>НЕСКОЛЬКО СЛОВ О НАС:</h2>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <div class="set-includes">
            <div class="aboutUs">
              Наша парикмахерская занимается исключительно мужскими стрижками.
              Стрижка каждого клиента для нас - это уникальная и продуманная до
              мелочей работа. Мы не работаем на количество, мы делаем качество.
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <div class="set-includes">
            <div class="aboutUs">
              Наша парикмахерская занимается исключительно мужскими стрижками.
              Стрижка каждого клиента для нас - это уникальная и продуманная до
              мелочей работа. Мы не работаем на количество, мы делаем качество.
            </div>
          </div>
        </v-col>
      </v-row>
      
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer";
export default {
  components: { Footer }
};
</script>

<style lang="scss">
@import "../mixins.scss";

.price-list {
  background: #f7f4f1;
  padding: 48px 0 0;
  @include for-tablet-portrait-up {
    padding-top: 20px;
  }

  &_title {
    align-items: center;
    justify-content: space-between;
    margin-bottom: 70px;
    @include for-tablet-portrait-up {
      margin-bottom: 40px;
    }
    @include for-phone-only {
      margin-bottom: 20px;
    }
    .line {
      width: 200px;
      height: 2px;
      background: #000;

      @include for-phone-only {
        width: 130px;
      }
      
    }
    h1 {
      font-size: 48px;
      line-height: 1;
      text-align: center;
      @extend .title;
      @include for-tablet-portrait-up {
      font-size: 36px;
    }
      @include for-phone-only {
        font-size: 25px;
      }
    }
  }
  .row {
    margin-bottom: 64px;
    @include for-tablet-portrait-up {
      margin-bottom: 20px !important;
    }
  }
}
</style>
