<template>
  <div class="radar" v-if="currentTabIndex === 3">
    <c-heading as="h3" size="lg">电影类型雷达图</c-heading>
    <ve-radar :data="chartData_t"></ve-radar>
    <c-heading as="h3" size="lg">电影地区雷达图</c-heading>
    <ve-radar :data="chartData_a"></ve-radar>
  </div>
</template>

<script>

import {state} from '../store'

export default {

  data() {
    this.extend = {
      series: {
        label: {
          normal: {
            show: true
          }
        }
      }
    }
    return {
      switch: false
    }
  },
  computed: {
    currentTabIndex: () => state.currentTabIndex,
    chartsData() {
      const addRandom = target => {
        for (let i = 0; i < target.length; i++) {
          target[i]['评论'] = Math.floor(500 + Math.random() * 500)
          target[i]['观影次数'] = Math.floor(500 + Math.random() * 500)
          target[i]['电影时长'] = Math.floor(80 + Math.random() * 60)
        }
      }
      let data = state.chartsContent.four
      addRandom(data.type)
      addRandom(data.area)
      return data
    },
    chartData_t() {
      return {columns: ['类型', '平均分', '总票房', '评论', '观影次数', '电影时长'], rows: this.chartsData.type}
    },
    chartData_a() {
      return {columns: ['地区', '平均分', '总票房', '评论', '观影次数', '电影时长'], rows: this.chartsData.area}

    }
  }

}
</script>