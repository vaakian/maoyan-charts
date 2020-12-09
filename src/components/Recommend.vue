<template>
  <div class="about">
    <c-flex justify="center" align="center" direction="column">
      <Selection @change="handleSelectionChange"/>
      <c-box>
        <c-button @click="updateRecommends" :is-loading="isLoading" variant-color="blue">给我推荐⚡</c-button>
      </c-box>

    </c-flex>
    <film :film="film" v-for="film in films" :key="film._id"/>
  </div>
</template>
<script>
import film from '@/components/Film'
import Selection from "@/components/Selection";
import {buildParams} from "@/utils";

export default {
  name: 'recommend',
  components: {Selection, film},
  data() {
    return {
      isLoading: false,
      films: [],
      selection: {
        areas: [],
        types: [],
        gt: 8
      }
    }
  },
  methods: {
    handleSelectionChange(selection) {
      this.selection = selection
    },
    updateRecommends() {
      let {type, area, selection} = this
      this.isLoading = true
      fetch('http://192.168.123.60:8000/api/recommend?' + buildParams(selection))
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