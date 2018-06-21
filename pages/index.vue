<template>
  <section class="container">
    {{list1}}
    {{list2}}
    {{list3}}
  </section>
</template>

<script>
  import api from '../static/js/axios';

  export default {
    data() {
      return {
        list3:[]
      }
    },
    mounted() {
      this.getList();
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
      let [testMsg, testMsg2] = await Promise.all([
        api.getData('/index/interfaceAjax',postData),
        api.getData('/index/interfaceAjax',postData)
      ]);
      return {
        list1:testMsg,
        list2:testMsg2
      };
    },
    methods:{
      getList(){
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
        api.getData('/index/interfaceAjax',postData)
          .then((res) => {
            this.list3=res.data;
          })
      }
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
