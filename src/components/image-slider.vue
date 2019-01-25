<template>
  <section class="image-slider" @touchstart="handleTouchStart" @touchend="handleTouchEnd" @touchmove="handleTouchMove">

    <div class="image-container" :style="{ width: containerWidth, transform: containerOffset }">
      <slot></slot>
    </div>

    <div class="indicator-container">
      <i v-for="(item, key) in validChildren"
         :key="key"
         :class="['indicator-item', { 'indicator-item-active': index === key }]"></i>
    </div>

  </section>
</template>

<script>
  /* 图片幻灯片 */

  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    name: 'image-slider'
  })
  export default class ImageSlider extends Vue {

    validChildren = []; // slots中有效值
    index = 0; // 当前条目的index
    itemLength = 0; // 传递项目的个数
    containerWidth = 0; // 容器宽度
    itemWidth = 0; // 单个项目的宽度

    get containerOffset() {
      return `translateX(-${this.index * (100 / this.itemLength)}%)`;
    }

    created() {
      this.itemLength = this.$slots.default.filter(item => item.tag === 'img').length;
      this.validChildren = new Array(this.itemLength).fill(1);
      this.containerWidth = `${this.itemLength * 100}%`;
      this.itemWidth = `${100 / this.itemLength}%`;
    }

    mounted() {
      setInterval(this.switchIndex, 5000);
    }

    switchIndex() {
      this.index = ( this.index + 1 ) % this.itemLength;
    }

    handleTouchStart() {

    }
    handleTouchMove() {

    }
    handleTouchEnd() {

    }
  }

</script>

<style>
  .image-slider {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .image-container {
    transition: transform .8s ease-in-out;
  }
  .indicator-container {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 60rpx;
    background: rgba(0, 0, 0, .5);
    width: 100%;
    text-align: center;
    line-height: 60rpx;
  }
  .indicator-item {
    display: inline-block;
    margin-right: 20rpx;
    height: 20rpx;
    width: 20rpx;
    border-radius: 50%;
    background: #eee;
  }
  .indicator-item-active {
    background: red;
  }
</style>
