import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('../assets/images/err.png'),
  loading: require('../assets/images/loading.gif'),
  attempt: 1,
  listenEvents: ['scroll']
});
