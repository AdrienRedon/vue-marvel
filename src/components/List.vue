<template>
  <div>
    <h1>Marvel Heroes</h1>
    <hero-thumbnail v-for="hero in heroes" :hero="hero" :key="hero.id"></hero-thumbnail>
  </div>
</template>

<script>
  import axios from 'axios'
  import HeroThumbnail from '@/components/HeroThumbnail'

  export default {
    name: 'list',
    data () {
      return {
        heroes: []
      }
    },
    components: {
      HeroThumbnail
    },
    mounted () {
      axios.get('/characters')
        .then(res => { this.heroes = res.data })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
