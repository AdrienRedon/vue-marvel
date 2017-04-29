<template>
  <div>
    <h1>Marvel Heroes</h1>
    <hero-thumbnail v-for="hero in heroes" :hero="hero" :key="hero.id"></hero-thumbnail>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '@/store'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
  import HeroThumbnail from '@/components/HeroThumbnail'

  export default {
    name: 'list',
    data () {
      return {
        heroes: []
      }
    },
    components: {
      ClipLoader,
      HeroThumbnail
    },
    mounted () {
      store.loading()
      axios.get('/characters')
        .then(res => {
          this.heroes = res.data
          store.loaded()
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
