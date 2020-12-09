<template>
  <div class="hello" v-if="currentTabIndex === 0">
    <c-heading as="h3" size="lg">按年份统计电影票房、数量、评分</c-heading>
    <component :data="chartData_y" :extend="extend" :settings="{area: true}" :is="chartType_y"></component>
    <c-heading as="h3" size="lg">按月份统计电影票房、数量、评分</c-heading>
    <component :data="chartData_m" :extend="extend" :settings="{area: true}" :is="chartType_m"></component>
  </div>
</template>

<script>

import {state} from '../store'
import {arraySortBy, arrayItemValueToString} from "@/utils";

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
      chartType_m: 've-line',
      chartType_y: 've-line',
      switch: false
    }
  },
  computed: {
    currentTabIndex: () => state.currentTabIndex,
    chartsData() {
      return state.chartsContent.one
    },
    chartData_y() {
      return {columns: ['年份', '数量', '平均分', '票房'], rows: arraySortBy(this.chartsData.year, '年份')}
    },
    chartData_m() {
      return {
        columns: ['月份', '数量', '平均分'],
        rows: arraySortBy(arrayItemValueToString(this.chartsData.month, '月份'), '月份')
      }
    }
  }

}
</script>