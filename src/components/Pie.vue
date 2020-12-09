<template>
  <div class="pie" v-if="currentTabIndex === 1">
    <c-heading as="h3" size="lg">各年份票房占比</c-heading>
    <ve-pie :data="chartData_y" :extend="extend"></ve-pie>
    <c-heading as="h3" size="lg">各地区票房占比</c-heading>
    <ve-ring :data="chartData_c" :extend="extend" :settings="{radius: [60, 100]}"></ve-ring>
    <c-heading as="h3" size="lg">不同电影类型票房占比</c-heading>
    <ve-ring :data="chartData_t" :extend="extend" :settings="{roseType: 'radius'}"></ve-ring>
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
      chartType_m: 've-pie',
      chartType_y: 've-pie',
      switch: false
    }
  },
  computed: {
    currentTabIndex: () => state.currentTabIndex,
    chartsData() {
      return state.chartsContent.two
    },
    chartData_y() {
      return {columns: ['年份', '票房'], rows: this.chartsData.year}
    },
    chartData_c() {
      return {columns: ['国家', '票房'], rows: this.chartsData.country}
    },
    chartData_t() {
      return {columns: ['类型', '票房'], rows: this.chartsData.type}
    }
  }

}
</script>