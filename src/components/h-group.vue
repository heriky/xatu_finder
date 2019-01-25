<template>
    <div class="h-group"
         :class="className"
         :style="{justifyContent: horizontalAlign, alignItems: verticalAlign}">
      <slot/>
    </div>
</template>

<script>
  // 使用不同的思路解决样式合并的问题
  // h-group使用纯class的方式合并
  // v-group使用动态style的方式
    export default {
      name: "h-group",
      props: {
        className: String,
        horizontalAlign: {
          type: String,
          default: 'center'
        },
        verticalAlign: {
          type: String,
          default: 'center'
        }
      }
    }
</script>

<style scoped>
  .h-group {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
</style>
