<template>
  <div class="selection">
    <c-text as="ins" fontSize="xl">
      选择类别
      <c-icon name="arrow-forward"/>
    </c-text>
    <c-grid align="center" template-columns="repeat(7, 1fr)" gap="3">
      <c-box class="selection-item" @click="toggleSelection('types', index)" w="100%" v-for="(type, index) in types"
             :type="type" :key="type">
        <c-tag :variant="selectedIndex.types[index] ?'solid': 'outline'" :variant-color="`${colors[index % 8]}`">
          <c-tag-label>{{ type }}</c-tag-label>
          <c-tag-icon :icon="selectedIndex.types[index] ? 'check':'add'" size="12px"/>
        </c-tag>
      </c-box>
    </c-grid>

    <c-text as="ins" fontSize="xl">
      选择地区
      <c-icon name="arrow-forward"/>
    </c-text>
    <c-grid align="center" template-columns="repeat(7, 1fr)" gap="3">
      <c-box class="selection-item" @click="toggleSelection('areas', index)" w="100%" v-for="(area, index) in areas"
             :area="area" :key="area">
        <c-tag :variant="selectedIndex.areas[index] ?'solid': 'outline'" :variant-color="`${colors[index % 8]}`">
          <c-tag-label>{{ area }}</c-tag-label>
          <c-tag-icon :icon="selectedIndex.areas[index] ? 'check':'add'" size="12px"/>
        </c-tag>
      </c-box>
    </c-grid>
    <c-box maxW="sm" margin="10px auto" padding="20px" border-width="1px" rounded="lg" overflow="hidden">
      <c-text fontSize="4xl" text-align="center">最低评分[{{ gt }}]</c-text>
      <c-slider @change="handleGtChange" size="lg" :max="9" :min="4" :step="1" :default-value="8">
        <c-slider-track/>
        <c-slider-filled-track/>
        <c-slider-thumb/>
      </c-slider>
    </c-box>
  </div>
</template>

<script>
export default {
  name: "Selection",
  data() {
    return {
      colors: ['blue', 'vue', 'pink', 'orange', 'red', 'green', 'cyan', 'yellow'],
      types: ['爱情', '喜剧', '动画', '剧情', '恐怖', '惊悚', '科幻', '动作', '古装', '冒险', '战争', '奇幻', '纪录片'],
      areas: ['中国', '美国', '韩国', '日本', '泰国', '印度', '法国', '英国', '俄罗斯', '意大利', '西班牙', '德国'],
      gt: 8,
      selectedIndex: {
        types: [],
        areas: []
      }
    }
  },
  methods: {
    toggleSelection(item, index) {
      let value = this.selectedIndex[item][index]
      this.$set(this.selectedIndex[item], index, value ? null : true)
      this.emitNewSelection()
    },
    handleGtChange(v) {
      this.gt = v
      this.emitNewSelection()
    },
    emitNewSelection() {
      const {types, areas, gt, selectedIndex} = this
      const result = {
        gt,
        types: selectedIndex.types.map((val, i) => val && types[i]).filter(val => val),
        areas: selectedIndex.areas.map((val, i) => val && areas[i]).filter(val => val)
      }
      this.$emit('change', result)
      return result
    }
  }
}
</script>

<style scoped>
.selection-item {
  cursor: pointer;
}
</style>