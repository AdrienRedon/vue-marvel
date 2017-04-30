<template>
    <div class="container" v-if="!loading">
      <router-link :to="{name: 'List'}" class="back">Retour</router-link>
      <h1>{{ hero.name }} <button class="bookmark" :class="{bookmarked: hero.bookmark}" @click="handlebookmark">Bookmark</button></h1>
      <router-link v-if="prevHero" :to="{name: 'Hero', params: {id: prevHero.id}}" class="prevButton">{{ prevHero.name }}</router-link>
      <router-link v-if="nextHero" :to="{name: 'Hero', params: {id: nextHero.id}}" class="nextButton">{{ nextHero.name }}</router-link>
      <div class="description">
        <p>{{ hero.description }}</p>
        <img :src="url">
        <p>Nombre de comics: {{ hero.comics.available }}</p>
        <ul>
          <li v-for="comic in comics">{{ comic.name }}</li>
          <li v-if="hero.comics.available > 3">...</li>
        </ul>
      </div>
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
        return this.getPrevHeroById(this.hero.id)
      },
      nextHero () {
        return this.getNextHeroById(this.hero.id)
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
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "back ."
                         "name name"
                         "prev next"
                         "desc desc";
  }
  @media screen and (min-width: 1000px) {
    .container {
      display: grid;
      grid-template-columns: 100px 50px 1fr 50px 100px;
      grid-template-rows: 50px 50px 1fr;
      grid-row-align: center;
      grid-template-areas: "back . . . ."
                           "prev . name . next"
                           "prev desc desc desc next";
    }
  }
  .back {
    grid-area: back;
  }
  .bookmark {
    font-size: 1rem;
  }
  .bookmarked {
    background-color: #BADA55;
  }
  .prevButton {
    grid-area: prev;
    align-content: center;
  }
  .nextButton {
    grid-area: next;
    align-content: center;
  }
  h1 {
    text-align: center;
    grid-area: name;
  }
  .description {
    grid-area: desc;
  }
  img {
    width: 100%;
  }
</style>
