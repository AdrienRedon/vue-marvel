<template>
  <div>
    <img :src="url">
    <router-link :to="{name: 'Hero', params: {id: hero.id}}" :class="{bookmarked: hero.bookmark}">{{ hero.name }}</router-link>
  </div>
</template>

<script>
  export default {
    props: ['hero'],
    computed: {
      url () {
        return `${this.hero.thumbnail.path}/standard_medium.${this.hero.thumbnail.extension}`
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #000;
    text-decoration: none;
  }
  .bookmarked {
    color: #BADA55;
  }
</style>
