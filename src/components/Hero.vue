<template>
    <div v-if="!loading">
      <router-link :to="{name: 'List'}">Retour</router-link>
      <h1>{{ hero.name }}</h1>
      <button :class="{bookmark: hero.bookmark}" @click="handlebookmark">Bookmark</button>
      <router-link v-if="prevHero" :to="{name: 'Hero', params: {id: prevHero.id}}">{{ prevHero.name }}</router-link>
      <router-link v-if="nextHero" :to="{name: 'Hero', params: {id: nextHero.id}}">{{ nextHero.name }}</router-link>
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
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['getHeroById', 'getPrevHeroById', 'getNextHeroById', 'loading']),
      hero () {
        return this.getHeroById(this.$route.params.id)
      },
      prevHero () {
        return this.getPrevHeroById(this.$route.params.id)
      },
      nextHero () {
        return this.getNextHeroById(this.$route.params.id)
      },
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
    methods: {
      ...mapActions(['heroes_bookmark', 'heroes_unbookmark']),
      handlebookmark () {
        if (this.hero.bookmark) {
          this.heroes_unbookmark(this.hero)
        } else {
          this.heroes_bookmark(this.hero)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bookmark {
      background-color: #BADA55;
    }
</style>
