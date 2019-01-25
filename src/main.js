import Vue from 'vue'
import App from './App'

import './utils/class-component-hooks'
import '../static/style/iconfont.css'

import MpvueRouterPatch from 'mpvue-router-patch'; // 使用vue-router跳转，但是配置路由还在原生的方式

Vue.use(MpvueRouterPatch);

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()