<template>
  <section class="tab-list-container">
    <h-group>
      <span class="tab-list-item"
            v-for="(item, index) in labels" :key="index"
            @click="switchIndex(index)"
            :style="{boxShadow: selectedIndex === index ? 'inset 0 -4rpx 0 red' : 'inset 0 -4rpx 0 transparent'}">
        {{item.text}}
      </span>
    </h-group>
    <v-group>
      <span>内容1</span>
      <span>内容3</span>
    </v-group>
  </section>
</template>

<script>
  import HGroup from './h-group';
  import VGroup from './v-group';

  export default {
    name: "tab-list",
    data: function() {
      const labels = [{
        text: '标签1',
        filter: 'aa'
      }, {
        text: '标签2',
        filter: 'bbb'
      }];
      return { labels, selectedIndex: 0 }
    },
    props: {
      // labels: {
      //   type: Array,
      //   // 验证： 必须位数组对象[{ text, filter }]
      //   validator(value) {
      //     return value.every(item => ('text' in item) && ('filter' in item) );
      //   }
      // }
    },
    components: { HGroup, VGroup },
    methods: {
      switchIndex(index) {
        this.selectedIndex = index;
      }
    }
  }
</script>

<style scoped>
  .tab-list-item {
    flex: 1;
    text-align: center;
    padding: 4px 0;
  }
</style>
