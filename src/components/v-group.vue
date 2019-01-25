<template>
  <div class="v-group" :class="classNameStr"
       :style="{alignItems: horizontalAlign, justifyContent: verticalAlign}">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "v-group",
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
    },
    computed: {
      classNameStr() {
        return this.className || '';
      }
    }
  }
</script>

<style scoped>
  .v-group {
    display: flex;
    height: 100%;
    width: 100%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
</style>
