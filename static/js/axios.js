import axios from 'axios';
import qs from 'qs';

axios.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

axios.defaults.baseURL = 'http://lease.bmmyou.com';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  getData (url, params) {
    return fetch(url, params)
  }
}
