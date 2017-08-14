import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueResource)

//AXIOS
import axios from 'axios' 
//响应时间
axios.defaults.timeout = 5000;
//配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//配置接口地址
axios.defaults.baseURL = 'http://pay.lawyer-says.cn/';

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作
  return config;
},function(err){
  //Do something with request error
  return Promise.reject(error);
});

//添加一个响应拦截器
axios.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理
  return res;
},function(err){
  //Do something with response error
  return Promise.reject(error);
})

//Mint 样式表
import 'mint-ui/lib/style.min.css'
import 'mint-ui/lib/font/style.css'

import 'common/css/reset.css'
import 'common/css/common.css'
import 'common/js/device.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
