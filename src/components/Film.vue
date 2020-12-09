<template>
  <div class="film">
    <c-stack :spacing="5">
      <c-box :p="5" shadow="md" border-width="1px">
        <c-heading>{{ film.film_name }}</c-heading>
        <!--        电影评分-->
        <c-circular-progress class="score" :value="film.film_score * 10"
                             :color="[,,,,,,,'blue','green', 'red'][Math.floor(film.film_score)]" :thickness="0.2">
          <c-circular-progress-label>
            <c-text fontSize="lg">{{ film.film_score.toFixed(1) }}</c-text>
          </c-circular-progress-label>
        </c-circular-progress>
        <!--        地区|类型 标签-->
        <c-box>地区
          <c-badge mx="2" :variant-color="colors[i]" v-for="(_area, i) in film.area" :key="_area">{{ _area }}</c-badge>
        </c-box>
        <c-box>类型
          <c-badge mx="2" :variant-color="colors[i]" v-for="(_type, i) in film.type" :key="_type">{{ _type }}</c-badge>
        </c-box>

        <!--        电影介绍-->

        <c-text class="film-desc" :mt="4">{{ film.film_desc }}</c-text>
      </c-box>
    </c-stack>

  </div>
</template>

<script>
export default {
  name: "Film",
  props: ['film'],
  data() {
    return {
      colors: ['green', 'indigo', 'blue', 'red', 'cyan']
    }
  }
}
</script>

<style scoped>
.film {
  position: relative;
  margin-top: 10px;
}

.score {
  position: absolute;
  right: 10px;
  top: 10px;
}

.film-desc {
  text-indent: 2em;
  font-family: "宋体";
  color: #666;
}
</style>