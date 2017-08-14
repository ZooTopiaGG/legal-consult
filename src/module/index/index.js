import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { Cell, Checklist, Loadmore } from 'mint-ui'
import ElementUI from 'element-ui'
import store from '../../store/store'

//Element 样式表
import 'element-ui/lib/theme-default/index.css'

//Mint 样式表
import 'mint-ui/lib/style.min.css'
import 'mint-ui/lib/font/style.css'

Vue.use(VueRouter)
Vue.use(VueResource)
//加载 ElementUI
//Vue.component(Button.name,Button)
//Vue.component(Select.name,Select)
Vue.use(ElementUI)

//按需加载 Mint-UI
Vue.component(Cell.name,Cell)
Vue.component(Checklist.name,Checklist)
Vue.component(Loadmore.name,Loadmore)

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

import 'common/css/reset.css'
import 'common/css/common.css'
import 'common/css/animate.css'
import 'common/js/device.js'

import Intro from 'components/LawyerInfo/Intro'
import Solution from 'components/LawyerInfo/Solution'
import Evaluate from 'components/LawyerInfo/Evaluate'

const routes = [
	{
		path:'/intro',
		component:Intro
	},
	{
		path:'/solution',
		component:Solution
	},
	{
		path:'/evaluate',
		component:Evaluate
	},
	{
		path:'*',
		redirect:'/solution'
	}
]

const router = new VueRouter({
	routes
})

//axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  axios,
  store,
  render: h => h(App)
})