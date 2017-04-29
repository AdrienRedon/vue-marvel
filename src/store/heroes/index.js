const state = {
  heroes: [],
  nbBookmarked: 0
}

const mutations = {
  HEROES_INIT (state, heroes) {
    state.heroes = heroes
  },
  HEROES_BOOKMARK (state, heroBookmarked) {
    if (state.nbBookmarked < 5) {
      state.heroes = state.heroes.map(hero => {
        if (hero.id === heroBookmarked.id) {
          return { ...hero, bookmark: true }
        } else {
          return hero
        }
      })
      state.nbBookmarked++
    }
  },
  HEROES_UNBOOKMARK (state, heroBookmarked) {
    state.heroes = state.heroes.map(hero => {
      if (hero.id === heroBookmarked.id) {
        delete hero.bookmark
        return hero
      } else {
        return hero
      }
    })
    state.nbBookmarked--
  }
}

const actions = {
  init ({state, commit}, heroes) {
    commit('HEROES_INIT', heroes)
  },
  heroes_bookmark ({state, commit}, hero) {
    commit('HEROES_BOOKMARK', hero)
  },
  heroes_unbookmark ({state, commit}, hero) {
    commit('HEROES_UNBOOKMARK', hero)
  }
}

const getters = {
  heroes (state, getters, rootState) {
    return state.heroes
  },
  getHeroById: (state, getters, rootState) => (id) => {
    return state.heroes.find(hero => hero.id === parseInt(id))
  },
  getPrevHeroById: (state, getters, rootState) => (id) => {
    return state.heroes[state.heroes.indexOf(getters.getHeroById(id)) - 1]
  },
  getNextHeroById: (state, getters, rootState) => (id) => {
    return state.heroes[state.heroes.indexOf(getters.getHeroById(id)) + 1]
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
