<template>
  <div class="bar" v-if="currentTabIndex === 2">
    <c-heading as="h3" size="lg">国内外按年度票房对比</c-heading>
    <ve-bar :data="chartData_y" :extend="extend"></ve-bar>
    <c-heading as="h3" size="lg">国内外按电影类型票房对比</c-heading>
    <ve-bar :data="chartData_t" :extend="extend"></ve-bar>
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
      return state.chartsContent.three
    },
    chartData_y() {
      return {columns: ['年份', '国内', '国外'], rows: this.chartsData.year}
    },
    chartData_t() {
      return {
        columns: ['类型', '国内', '国外'],
        rows: this.chartsData.type
      }
    }
  }

}
</script>