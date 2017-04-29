<template>
  <div>
    <h1>Marvel Heroes</h1>
    <hero-thumbnail v-for="hero in heroes" :hero="hero" :key="hero.id"></hero-thumbnail>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
  import HeroThumbnail from '@/components/HeroThumbnail'

  export default {
    name: 'list',
    computed: {
      ...mapGetters(['heroes'])
    },
    components: {
      ClipLoader,
      HeroThumbnail
    },
    methods: {
      ...mapActions(['init', 'loaded', 'loading'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
