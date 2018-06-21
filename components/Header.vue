<template>
  <div class="home_h">
    <header class="m_header">
      <div class="m_header_box" id="my_search">
        <a onclick="window.history.go(-1)" class="header_ic_return" v-if='back_ico'></a>
        <!-- <a href="#" class="address" v-if="!back_ico">武汉</a> -->
        <router-link to="/citylist" class="address" v-if='!back_ico'>{{city}}</router-link>
        <div class="search_input">
          <span class="icon_search"></span>
          <input type="search" class="search" placeholder="请输入商品名称或商家名称" @click="goSearch($event)"
                 @blur="doSearch" v-model="input" @keyup.13="doSearch">
        </div>
        <router-link to="/login" class="logo_btn" v-if='!state'>登录</router-link>

        <router-link to="" class="ic_message_home" v-if='state'></router-link>
      </div>
    </header>
  </div>
</template>
<script>
  export default {
    props: ['inputVal'],
    data() {
      return {
        input: "",
        state: "",
        back_ico: 1,
        city: ''
      }
    },
    mounted() {
      this.state = window.sessionStorage.state;
      if (this.$route.path == '/home') {
        this.back_ico = 0
      }
      this.city = window.sessionStorage.city ? window.sessionStorage.city : '武汉'
    },
    watch: {
      inputVal: function () {
        this.input = this.inputVal;
      }
    },
    methods: {
      //跳入搜索页面
      goSearch(event) {
        this.$router.push('/goodslist');
        window.event ? window.event.returnValue = false : event.preventDefault();
      },
      doSearch(ev) {
        this.$emit("keywords", this.input)
      }
    }
  }
</script>
<style type="text/css">
  .m_header_box .address {
    z-index: 999
  }

  .ic_message_home {
    position: absolute;
    right: 0.4rem;
    top: 0.2rem;
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url(../assets/images/navbar_ic_message.png) no-repeat;
    background-size: cover;
  }

  .header_ic_return {
    position: absolute;
    left: 10px;
    top: 0;
    display: block;
    width: 1.06666667rem;
    height: 1.06666667rem;
    background: url(../assets/images/navbar_ic_return_white.png) center no-repeat;
    background-size: 50% 50%;
    z-index: 999;
  }

  .address {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }
</style>
