const state = {
  heroes: []
}

const mutations = {
  HEROES_INIT (state, heroes) {
    state.heroes = heroes
  }
}

const actions = {
  init ({state, commit}, heroes) {
    commit('HEROES_INIT', heroes)
  }
}

const getters = {
  heroes (state, getters, rootState) {
    return state.heroes
  },
  getHeroById: (state, getters, rootState) => (id) => {
    return state.heroes.find(hero => hero.id === parseInt(id))
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
