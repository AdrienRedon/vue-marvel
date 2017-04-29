<template>
    <div>
      <h1>{{ hero.name }}</h1>
      <p>{{ hero.description }}</p>
      <img :src="url">
      <p>Nombre de comics: {{ hero.comics.available }}</p>
      <ul>
        <li v-for="comic in comics">{{ comic.name }}</li>
        <li v-if="hero.comics.available > 3">...</li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios'
  import store from '@/store'

  export default {
    data () {
      return {
        hero: {
          comics: {
            items: []
          },
          thumbnail: {}
        }
      }
    },
    computed: {
      url () {
        if (this.hero.thumbnail.path) {
          return `${this.hero.thumbnail.path}/standard_fantastic.${this.hero.thumbnail.extension}`
        } else {
          return ''
        }
      },
      comics () {
        return this.hero.comics.items.slice(0, 3)
      }
    },
    mounted () {
      store.loading()
      const characterId = this.$route.params.id
      axios.get(`/characters/${characterId}`)
        .then(res => {
          this.hero = res.data
          store.loaded()
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
