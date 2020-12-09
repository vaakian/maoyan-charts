<template>
  <c-theme-provider>
    <c-reset/>
    <c-box class="app-container" w="600px">
      <c-tabs @change="tabChange" :defaultIndex="0" variant="enclosed-colored" variant-color="vue">
        <c-tab-list>
          <c-tab>折线图</c-tab>
          <c-tab>饼图</c-tab>
          <c-tab>条形图</c-tab>
          <c-tab>雷达图</c-tab>
          <c-tab>电影推荐</c-tab>
        </c-tab-list>

        <c-tab-panels>
          <c-tab-panel>
            <my-line/>
          </c-tab-panel>
          <c-tab-panel>
            <pie/>
          </c-tab-panel>
          <c-tab-panel>
            <bar/>
          </c-tab-panel>

          <c-tab-panel>
            <radar/>
          </c-tab-panel>
          <c-tab-panel>
            <recommend/>
          </c-tab-panel>
        </c-tab-panels>
      </c-tabs>
    </c-box>
  </c-theme-provider>
</template>

<script>

import {Pie, Radar, Recommend, MyLine, Bar} from "@/components";
import {actions} from "@/store";

export default {
  name: "App",
  components: {Pie, Radar, Recommend, MyLine, Bar},
  mounted() {
    actions.updateChartsContent()
  },
  methods: {
    tabChange(index) {
      actions.setCurrentTabIndex(index)
    }
  }
};
</script>
<style>
*::-webkit-scrollbar {
  display: none;
}
body {
  padding: 20px;
}
.app-container {
  margin: 0 auto;
}
h3 {
  text-align: center;
}
*[data-chakra-component="CTabPanels"] {
  padding: 20px 10px;
}
*:focus {
  outline: none !important;
}
</style>