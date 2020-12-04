<template>
  <div class="hello">
    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
  </div>
</template>

<script>

export default {
  data() {
    this.chartSettings = {
      area: true
    }
    return {
      chartData: {
        columns: ['date', '票房', 'Order', 'OrderRate'],
        rows: [
          {'date': '1/1', '票房': 1393, 'Order': 566, 'OrderRate': 0.32},
          {'date': '1/2', '票房': 3530, 'Order': 1566, 'OrderRate': 0.26},
          {'date': '1/3', '票房': 2923, 'Order': 526, 'OrderRate': 0.76},
          {'date': '1/4', '票房': 1723, 'Order': 2566, 'OrderRate': 0.49},
          {'date': '1/5', '票房': 3792, 'Order': 766, 'OrderRate': 0.323},
          {'date': '1/6', '票房': 4593, 'Order': 566, 'OrderRate': 0.78}
        ]
      }
    }
  }
}
</script>