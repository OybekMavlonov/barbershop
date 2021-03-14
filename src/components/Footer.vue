<template>
  <v-footer style="background: rgb(32, 32, 32);">
    <v-container>
      <v-row>
        <v-col cols="12" md="5">
          <div class="footer-contact">
            <div>{{contact.name}}</div>
            <div>{{contact.address}}</div>
            <a href="#">КАК НАС НАЙТИ?</a>
            <div>{{contact.phone}}</div>
          </div>
        </v-col>
        <v-col cols="12" md="7" class="d-flex">
          <div class="social-networks">
            <div class="pr-4 pl-4 text-center">ДАВАЙТЕ ДРУЖИТЬ!</div>
            <div class="social-icons d-flex justify-space-between">
              <a href="#" class="vk">
                <img src="../assets/svg/vk.svg" />
              </a>
              <a href="#" class="fb">
                <img src="../assets/svg/facebook.svg" />
              </a>
              <a href="#" class="instagram">
                <img src="../assets/svg/instagram.svg" />
              </a>
            </div>
          </div>
          <v-spacer></v-spacer>
          <div class="madeBy">
            <div>РАЗРАБОТАНО:</div>
            <div class="html-academy general-btn">HTML ACADEMY</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: "БАРБЕРШОП «БОРОДИНСКИЙ",
        address: "АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, Б. КОНЮШЕННАЯ, Д. 19/8",
        phone: "ТЕЛЕФОН: +7 (495) 666-02-66"
      }
    };
  }
};
</script>

<style lang="scss">
@import "../mixins.scss";

.v-footer {
  padding-bottom: 36px !important;
  padding-top: 48px !important;
  @include for-phone-only {
    padding-bottom: 20px !important;
    padding-top: 22px !important;
  }
  .footer-contact {
    @extend .text;
    color: #fff;
    @include for-phone-only {
      font-size: 12px;
      text-align: center;
    }
    a {
      color: #fff !important;
      text-decoration: none;
    }
  }
  .social-networks {
    flex-direction: column;
    display: flex;
    @extend .text;
    color: #fff;
    @include for-phone-only {
      font-size: 12px;
    }

    .social-icons {
      margin-top: 20px;
      a {
        height: 42px;
        width: 42px;
        background: #000;
        @include for-phone-only {
          height: 36px;
          width: 36px;
        }
      }
      .vk {
        padding: 13px 8px;
        @include for-phone-only {
          padding: 11px 5px;
        }
      }
      .fb {
        padding: 10px 12px;
        @include for-phone-only {
          padding: 8px 10px;
        }
      }
      .instagram {
        padding: 11px;
        @include for-phone-only {
          padding: 9px;
        }
      }
    }
  }
  .madeBy {
    flex-direction: column;
    display: flex;
    text-align: center;
    @extend .text;
    color: #fff;
    @include for-phone-only {
      font-size: 12px;
    }
    .html-academy {
      padding: 12px 28px;
      margin-top: 20px;

      @extend .text;
      color: #fff;
      @include for-phone-only {
        font-size: 12px;
        padding: 8px 16px;
      }
    }
  }
}
</style>