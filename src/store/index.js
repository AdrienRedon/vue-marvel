import Vue from 'vue'
import Vuex from 'vuex'
import spinner from '@/store/spinner'
import heroes from '@/store/heroes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    spinner,
    heroes
  }
})
