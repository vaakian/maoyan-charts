<template>
  <div class="home">
    <my-line />
  </div>
</template>

<script>
// @ is an alias to /src
import Line from '@/components/Line.vue'

export default {
  name: 'Home',
  components: {
    myLine: Line
  }
}
</script>
