/**
 * Created by hankang on 2018/5/23
 */
import Component from 'vue-class-component';

Component.registerHooks([
  // 小程序相关
  'onPullDownRefresh',
  'onPageScroll',

  // 路由相关
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
]);
