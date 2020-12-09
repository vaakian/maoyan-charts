<template>
  <div class="about">
    <c-flex justify="center" align="center" direction="column">
      <c-box mb="3" w="150px">
        <c-select v-model="type" placeholder="类别">
          <option :value="_type" v-for="_type in types" :key="_type">{{ _type }}</option>
        </c-select>
      </c-box>
      <c-box mb="3" w="150px">
        <c-select v-model="area" placeholder="地区">
          <option :value="_area" v-for="_area in areas" :key="_area">{{ _area }}</option>
        </c-select>
      </c-box>
      <c-box>
        <c-button @click="updateRecommends" :is-loading="isLoading" variant-color="blue">给我推荐⚡</c-button>
      </c-box>

    </c-flex>
    <film :film="film" v-for="film in films" :key="film._id"/>
  </div>
</template>
<script>
import film from '@/components/Film'

export default {
  name: 'recommend',
  components: {film},
  data() {
    return {
      isLoading: false,
      type: '爱情',
      area: '中国',
      types: ['爱情', '喜剧', '动画', '剧情', '恐怖', '惊悚', '科幻', '动作', '古装', '冒险', '战争', '奇幻', '纪录片'],
      areas: ['中国', '美国', '韩国', '日本', '泰国', '印度', '法国', '英国', '俄罗斯', '意大利', '西班牙', '德国'],
      films: []
    }
  },
  methods: {
    updateRecommends() {
      let {type, area} = this
      let searchParams = {type, area}
      this.isLoading = true
      fetch('http://192.168.123.60:8000/api/recommend?' + new URLSearchParams(searchParams))
          .then(response => {
            response.json().then(films => {
              this.films = films
              this.$toast({
                title: films.length ? '匹配成功' : `啊哦`,
                description: films.length ? `为您匹配到${films.length}部好电影~` : '啥也没匹配到~',
                status: films.length ? 'success' : 'warning',
                duration: 3000
              })
            })
          })
          .catch(err => {
            this.$toast({
              title: '失败',
              description: err,
              status: 'error',
              duration: 3000
            })
          }).finally(() => this.isLoading = false)
    }
  }
}
</script>