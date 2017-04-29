<template>
  <div>
    <img :src="url">
    <router-link :to="{name: 'Hero', params: {id: hero.id}}">{{ hero.name }}</router-link>
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

</style>
