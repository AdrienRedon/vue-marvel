<template>
  <div id="app">
    <clip-loader v-if="store.loading" color="#509ED1" size="80px"></clip-loader>
    <router-view v-show="!store.loading"></router-view>
  </div>
</template>

<script>
  import store from '@/store'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

  export default {
    name: 'app',
    components: {
      ClipLoader
    },
    data () {
      return {
        store: store.state
      }
    }
  }
</script>

<!-- Global style -->
<style>

</style>
