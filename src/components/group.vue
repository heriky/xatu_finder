<template>
  <div class="group"
       :class="className"
       :style="{justifyContent: horizontalAlign, alignItems: verticalAlign}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "group",
    props: {
      className: String,
      verticalAlign: {
        type: String,
        default: 'center'
      },
      horizontalAlign: {
        type: String,
        default: 'center'
      }
    }
  }
</script>

<style scoped>
  .group {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
</style>
