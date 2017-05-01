<template>
  <div id="app">
    <clip-loader v-if="loading" color="#509ED1" size="80px"></clip-loader>
    <router-view v-show="!loading"></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapGetters, mapActions } from 'vuex'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

  export default {
    name: 'app',
    components: {
      ClipLoader
    },
    computed: {
      ...mapGetters(['loading'])
    },
    methods: {
      ...mapActions(['init', 'spinner_loading', 'spinner_loaded'])
    },
    created () {
      this.spinner_loading()
      /* Fetch list of characters and initialize the store with the data */
      axios.get('/characters')
        .then(res => {
          this.init(res.data)
          this.spinner_loaded()
        })
        .catch(error => {
          console.log(error)
          this.spinner_loaded()
        })
    }
  }
</script>

<!-- Global style -->
<style>
  body, html {
    box-sizing: border-box;
  }
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
</style>
