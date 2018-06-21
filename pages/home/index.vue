<template>
  <div class="home">
    <div class="m_layout">
      <!-- 头部区 -->
      <HeaderView></HeaderView>
      <!-- 轮播图-->
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in bannerArr">
            <img :src="banner">
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>

      <!--商品区-->
      <div class="home_m">
        <main class="m_product">
          <div class="left_share_quality_content clearfix">
            <div class="share_quality">
              <div class="share_quality_top">
                <div class="share_title">
                  <p class="share_text"><i class="hot"></i>热门推荐</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <ul>
          <li class="not_eng_item" v-for="item in homeDatas">
            <router-link class="not_eng_link" :to="'/detail/'+item.goods_id">
              <img v-lazy="fileHost+item.image_url" alt="" class="not_eng_pic lazy-img-fadein">
              <div class="not_eng_info">
                <p class="not_eng_title blue">{{item.product_name}} <span class="black">{{item.gg}}</span>
                </p>
                <p class="not_eng_text">
                  <span class="more_info_price_txt grey">{{item.company_name}}</span>
                  <i class="fr"><span
                    class="red">¥ {{item.price_scale.length != 0?item.price_scale.level1:item.price}}</span>{{item.unit}}/天
                    <div class="ico_price_scale fr" v-show="item.price_scale.length != 0"></div>
                  </i>
                </p>
              </div>
            </router-link>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../../static/js/axios';
  import config from '../../assets/js/config.js';
  import HeaderView from '../../components/Header.vue';
  import {bindEvent} from '../../assets/js/index';

  import banner1 from '../../assets/images/banner1.png';
  import banner2 from '../../assets/images/banner2.png';
  import banner3 from '../../assets/images/banner3.png';

  export default {
    data() {
      return {
        fileHost: config.imagePath,
        bannerArr: [banner2, banner3],
        swiperOption: {
          autoplay: 5000,
          initialSlide: 1,
          loop: true,
          pagination: '.swiper-pagination',
          onSlideChangeEnd: swiper => {
            console.log('onSlideChangeEnd', swiper.realIndex)
          }
        }
      }
    },
    components: {
      HeaderView
    },
    mounted() {
      bindEvent();
    },
    async asyncData ({context}) {
      let postData = {
        action: 'getHotGoodsInfo',
        params: {
          "leaseBl": 5,
          "leaseZc": 7,
          "leaseZj": 6,
          "cacheTime": 1800,
          "myCompanyId": 0
        }
      };
      let [testMsg] = await Promise.all([
        api.getData('/index/interfaceAjax',postData)
      ]);
      return {
        homeDatas:testMsg.data
      };
    },
    methods: {

    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
