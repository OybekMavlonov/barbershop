<template>
  <div>
    <span class="bg"></span>
    <div class="home">
      <v-container>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-img
              justify="center"
              max-height="153"
              max-width="370"
              src="../assets/svg/index-logo.svg"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-container>

      <div class="advantages">
        <v-container>
          <v-row>
            <v-col
              v-for="n in advantages"
              :key="n.title"
              cols="12"
              sm="4"
              md="4"
            >
              <h1 class="advantages_title">{{ n.title }}</h1>
              <v-layout justify-center>
                <v-img
                  justify="center"
                  max-height="25"
                  max-width="25"
                  src="../assets/svg/shape.svg"
                ></v-img>
              </v-layout>
              <p class="advantages_text">{{ n.text }}</p>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <v-container style="background: #f7f4f1">
        <div class="news_photo">
          <v-row>
            <v-col sm="6" cols="12" md="6" class="border">
              <div class="news">
                <h1>НОВОСТИ</h1>
                <div class="news_item" v-for="item in news" :key="item.date">
                  <p class="news_item-text">{{ item.text }}</p>
                  <p class="date">{{ item.date }}</p>
                </div>
                <button class="news_btn">ВСЕ НОВОСТИ</button>
              </div>
            </v-col>

            <v-col sm="6" cols="12" md="6">
              <div class="gallery">
                <h1>ФОТОГАЛЕРЕЯ</h1>
                <VueSlickCarousel :arrows="true">
                  <img
                    class="gallery_img"
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.src"
                    alt=""
                  />
                </VueSlickCarousel>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>

      <v-container style="background: #f7f4f1" mt-9 mb-16>
        <div class="contacts">
          <v-row>
            <v-col cols="12" md="6" sm="6" class="border">
              <div class="contact-info">
                <h1>КОНТАКТНАЯ ИНФОРМАЦИЯ</h1>
                <div class="contact-info_item">
                  <p>{{ contact.name }}</p>
                  <p>{{ contact.address }}</p>
                  <p>{{ contact.phone }}</p>
                </div>
                <div class="contact-info_item">
                  <p>ВРЕМЯ РАБОТЫ:</p>
                  <p>ПН—ПТ: С 10:00 ДО 22:00</p>
                  <p>СБ—ВС: С 10:00 ДО 19:00</p>
                </div>
                <div class="buttons d-flex">
                  <div class="contact-info_btn back">КАК ПРОЕХАТЬ</div>
                  <div class="contact-info_btn">ОБРАТНАЯ СВЯЗЬ</div>
                </div>
              </div>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <div class="register">
                <h1>ЗАПИСАТЬСЯ</h1>
                <p class="register_text">
                  УКАЖИТЕ ЖЕЛАЕМУЮ ДАТУ И ВРЕМЯ И МЫ СВЯЖЕМСЯ С ВАМИ ДЛЯ
                  ПОДТВЕРЖДЕНИЯ БРОНИ
                </p>
                <v-form>
                  <div class="d-flex justify-space-between">
                    <div class="form-item">
                      <p class="form-text">ДАТА</p>
                      <v-menu
                        ref="menu1"
                        v-model="menu1"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <input
                            class="input"
                            v-model="dateFormatted"
                            label="Date"
                            persistent-hint
                            v-bind="attrs"
                            @blur="date = parseDate(dateFormatted)"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker
                          v-model="date"
                          no-title
                          @input="menu1 = false"
                        ></v-date-picker>
                      </v-menu>
                    </div>

                    <div class="form-item">
                      <p class="form-text">ВРЕМЯ</p>
                      <input class="input ml-5" placeholder="10:00" name />
                    </div>
                  </div>

                  <div class="d-flex justify-space-between">
                    <div class="form-item">
                      <p class="form-text">ВАШЕ ИМЯ</p>
                      <input
                        class="input"
                        placeholder="Name"
                        type="text"
                        name
                      />
                    </div>

                    <div class="form-item">
                      <p class="form-text">ТЕЛЕФОН</p>
                      <input
                        class="input ml-5"
                        placeholder="+7 123 456-78-90"
                        name
                      />
                    </div>
                  </div>
                </v-form>
                <button class="register_btn">ОТПРАВИТЬ</button>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "./Footer";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  data: (vm) => ({
    advantages: [
      {
        title: "БЫСТРО",
        text:
          "МЫ ДЕЛАЕМ СВОЮ РАБОТУ БЫСТРО! ДВА ЧАСА ПРОЛЕТЯТ НЕЗАМЕТНО И ВЫ — СЧАСТЛИВЫЙ ОБЛАДАТЕЛЬ СТИЛЬНОЙ СТРИЖКИ-МИНУТКИ!",
      },
      {
        title: "КРУТО",
        text:
          "ЗАБУДЬТЕ, КАК ВЫ СТРИГЛИСЬ РАНЬШЕ. МЫ СДЕЛАЕМ ИЗ ВАС ЗВЕЗДУ ФУТБОЛА ИЛИ КИНО! ВО ВСЯКОМ СЛУЧАЕ ВНЕШНЕ.",
      },
      {
        title: "ДОРОГО",
        text:
          "НАШИ МАСТЕРА — ПРОФЕССИОНАЛЫ СВОЕГО ДЕЛА И НЕ МОГУТ СТОИТЬ ДЕШЕВО. К ТОМУ ЖЕ, РАЗВЕ ЦЕНА НЕ ДАЕТ ОПРЕДЕЛЕНЫЙ СТАТУС?",
      },
    ],
    news: [
      {
        text:
          "НАМ НАКОНЕЦ ЗАВЕЗЛИ ЯГЕРМАЙСТЕР! ТЕПЕРЬ ВЫ МОЖЕТЕ ПРОПУСТИТЬ СТАКАНЧИК ВО ВРЕМЯ СТРИЖКИ",
        date: "11 января",
      },
      {
        text:
          "В НАШЕЙ КОМАНДЕ ПОПОЛНЕНИЕ, БОРИС «БРИТВА» СТРИГУНЕЦ, ОБЛАДAТЕЛЬ МНОЖЕСТВА ТИТУЛОВ И НАГРАД ПОПОЛНИЛ НАШИ СТРОЙНЫЕ РЯДЫ",
        date: "18 января",
      },
    ],
    contact: {
      name: "БАРБЕРШОП «БОРОДИНСКИЙ",
      address: "АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, Б. КОНЮШЕННАЯ, Д. 19/8",
      phone: "ТЕЛЕФОН: +7 (495) 666-02-66",
    },
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    items: [
      {
        src: require("../assets/gallery.png"),
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
  }),
  components: {
    Footer,
    VueSlickCarousel,
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}.${day}.${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>

<style lang="scss">
@import "../mixins.scss";

.border {
  background-image: url("../assets/border.png");
  background-position: right;
  background-repeat: no-repeat;
  display: block;
}

.input {
  border: 2px solid #000;
  padding: 12px 11px 12px 16px;
  width: 140px;
  margin: 0 0 15px 0;
  font-size: 14px;
  font-family: "PTSans";
  color: #716f6e;
  font-weight: bold;
  line-height: 1.714;
  opacity: 0.702;

  &:focus {
    outline: none;
  }
}
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("../assets/bg.png") no-repeat center center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-position: top;
}
.home {
  padding: 66px 0 0;
  position: relative;

  .advantages {
    padding: 50px 0;
    @media (max-width: 780px) {
      padding: 38px 0;
    }

    &_title {
      color: rgb(247, 244, 241);
      padding: 10px 0;
      text-align: center;
      @extend .title;
      @media (max-width: 780px) {
        font-size: 24px;
        padding: 5px 0;
      }
    }
    .v-image {
      max-height: 18px !important;
      max-width: 18px !important;
    }
    &_text {
      color: rgb(247, 244, 241);
      padding: 20px 20px 10px;
      text-align: center;
      @extend .text;
      @media (max-width: 780px) {
        font-size: 12px;
        padding: 10px 10px 4px;
      }
    }
  }

  .news_photo {
    padding: 38px 68px;
    @include for-tablet-landscape-up {
      padding: 28px 48px;
    }
    @include for-tablet-portrait-up {
      padding: 20px 38px;
    }
    @media (max-width: 780px) {
      padding: 18px 28px;
    }
    @include for-phone-only {
      padding: 8px;
    }
    .border {
      @include for-phone-only {
        background-image: none;
      }
    }
    .news {
      -webkit-border-image: url(../assets/border.png) 30 fill;
      @include for-phone-only {
        text-align: center;
      }
      h1 {
        margin-bottom: 28px;
        @extend .title;
        @media (max-width: 780px) {
          margin-bottom: 15px;
          font-size: 24px;
        }
        @include for-phone-only {
          font-size: 22px;
          margin-bottom: 5px;
        }
      }
      &_item {
        margin-bottom: 28px;
        @media (max-width: 780px) {
          margin-bottom: 16px;
        }
        @include for-phone-only {
          margin-bottom: 10px;
        }

        &-text {
          margin-bottom: 3px;
          padding-right: 20px;
          @extend .text;
          @media (max-width: 780px) {
            font-size: 12px;
            margin-bottom: 0px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
          }
          @include for-phone-only {
            padding-right: 0;
          }
        }
        .date {
          text-transform: lowercase;
          @extend .text;
          @media (max-width: 780px) {
            font-size: 12px;
            margin-bottom: 0px;
          }
        }
      }
      &_btn {
        padding: 10px 34px;
        @extend .general-btn;
        @media (max-width: 780px) {
          padding: 7px 25px;
          font-size: 12px;
        }
        @include for-phone-only {
          padding: 5px 15px;
        }
      }
    }
    .gallery {
      padding-left: 78px;
      position: relative;
      padding-bottom: 37px;
      @include for-tablet-portrait-up {
        padding-left: 38px;
      }
      @include for-phone-only {
        padding-left: 0px;
        padding-bottom: 17px;
        text-align: center;
      }
      h1 {
        margin-bottom: 30px;
        @extend .title;
        @media (max-width: 780px) {
          margin-bottom: 15px;
          font-size: 24px;
        }
        @include for-phone-only {
          margin-bottom: 5px;
          font-size: 22px;
        }
      }
      .slick-slider {
        position: static;

        .slick-prev,
        .slick-next {
          border-radius: 0;
          margin: 0;
          top: unset;
          height: unset;
          width: unset;
          bottom: 0;
          color: #000;

          &:before {
            opacity: 1;
            padding: 13px 52px;
            @extend .general-btn;
            @media (max-width: 780px) {
              padding: 7px 28px;
              font-size: 12px;
            }
          }
        }

        .slick-prev {
          left: 78px;
          @include for-tablet-portrait-up {
            left: 38px;
          }
          @include for-phone-only {
            left: 0;
          }
          &:before {
            content: "НАЗАД";
          }
        }

        .slick-next {
          right: 0;
          &:before {
            content: "ВПЕРЕД";
          }
        }
      }
      &_img {
        height: 178px;
        border: 7px solid #fff;
        margin-bottom: 45px;
        @media (max-width: 780px) {
          margin-bottom: 25px;
        }
      }
      &_btn {
        padding: 16px 50px;
        @extend .general-btn;

        @media (max-width: 780px) {
          padding: 10px 25px;
          font-size: 12px;
        }
        @include for-phone-only {
          padding: 5px 15px;
        }
      }
      .back {
        margin-right: 36px;
        @media (max-width: 780px) {
          margin-right: 20px;
        }
        @include for-phone-only {
          margin-right: 10px;
        }
      }
    }
  }

  .contacts {
    .border {
      @include for-phone-only {
        background-image: none;
      }
    }
    padding: 38px 68px;
    @include for-tablet-landscape-up {
      padding: 28px 48px;
    }
    @include for-tablet-portrait-up {
      padding: 20px 38px;
    }
    @media (max-width: 780px) {
      padding: 18px 28px;
    }
    @include for-phone-only {
      padding: 8px;
    }
    .contact-info {
      @include for-phone-only {
        text-align: center;
      }
      h1 {
        @extend .title;
        @include for-tablet-portrait-up {
          font-size: 25px;
        }
        @include for-phone-only {
          font-size: 22px;
        }
      }
      &_item {
        margin: 30px 0;
        @include for-tablet-portrait-up {
          margin: 20px 0;
        }
        @include for-phone-only {
        }
        p {
          margin: 0;
          @extend .text;
          @include for-tablet-portrait-up {
            font-size: 12px;
          }
          @include for-phone-only {
          }
        }
      }
      .buttons {
        @include for-phone-only {
          justify-content: center;
        }
      }
      &_btn {
        padding: 10px 28px;
        @extend .general-btn;
        @media (max-width: 780px) {
          padding: 7px 25px;
          font-size: 12px;
        }
        @media (max-width: 670px) {
          padding: 7px 18px;
          font-size: 11px;
        }
        @include for-phone-only {
          padding: 5px 15px;
        }
      }
      .back {
        margin-right: 20px;
        @media (max-width: 780px) {
          margin-right: 10px;
        }
      }
    }
    .register {
      padding-left: 78px;
      @include for-tablet-portrait-up {
        padding-left: 48px;
      }
      @media (max-width: 780px) {
        padding-left: 38px;
      }
      @include for-phone-only {
        text-align: center;
        padding-left: 0;
      }
      h1 {
        @extend .title;
        @include for-tablet-portrait-up {
          font-size: 25px;
        }
        @include for-phone-only {
          font-size: 22px;
        }
      }
      &_text {
        margin-top: 30px;
        @extend .text;
        @include for-tablet-portrait-up {
          margin: 20px 0;
          font-size: 12px;
        }
        @include for-phone-only {
        }
      }
      form {
        div {
          @include for-phone-only {
            justify-content: center !important;
          }
        }
      }
      .form-item {
        .form-text {
          margin-left: 16px;
          @extend .text;
          @include for-tablet-portrait-up {
            margin-bottom: 8px;
          }
          @include for-phone-only {
            margin-left: 0;
            text-align: center;
          }
        }
        .input {
          @include for-tablet-portrait-up {
            padding: 8px;
          }
          @media (max-width: 816px) {
            width: 85%;
            font-size: 10px;
          }
          @include for-phone-only {
            width: 140px;
          }
          @media (max-width: 326px) {
            width: 110px;
          }
        }
      }
      &_btn {
        padding: 10px 0;
        margin-top: 3px;
        width: 100%;
        @extend .general-btn;
        @media (max-width: 780px) {
          padding: 7px 25px;
          font-size: 12px;
        }
        @include for-phone-only {
          width: 63%;
        }
      }
    }
  }
}
</style>
