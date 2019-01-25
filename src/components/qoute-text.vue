<template>
    <div class="qoute h-group">
      <slot></slot>
    </div>
</template>

<script>
    export default {
      name: "qoute-text",
    }
</script>

<style scoped>
  .qoute {
    justify-content: flex-start;
    line-height: 1.5;
    padding-left: 20rpx;
    border-left: 10rpx solid #f00;
  }
</style>
