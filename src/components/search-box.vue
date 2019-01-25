<template>
  <h-group :className="`search-box ${className}`" horizontalAlign="flex-start">
    <img class="search-icon" :src="searchIcon">
    <span class="search-input" @click="handleClick"> 点击搜索 </span>
  </h-group>
</template>

<script>
  /* 搜索框 */

  import Vue from 'vue';
  import Component from 'vue-class-component';
  import searchIcon from './assets/search.svg';

  import HGroup from './h-group';

  const eType = {
    searchChange: 'search-change'
  };

  @Component({
    name: 'search-box',
    components: { HGroup },
    props: {
      className: String,
      placeholder: String
    }
  })
  export default class SearchBox extends Vue {

    searchIcon = searchIcon;

    handleClick() {
      this.$emit('click-search');
    }
  }
</script>

<style>

  .search-box {
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    height: 60rpx;
    border-radius: 8rpx;
  }
  .search-icon {
    padding: 5rpx 10rpx;
    width: 48rpx;
    height: 48rpx;
  }
  .search-input {
    flex: 1;
    border: 0;
    outline: none;
    text-align: center;
    line-height: 32rpx;
    font-size: 32rpx;
    color: #eee;
  }

</style>
