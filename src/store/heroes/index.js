const state = {
  heroes: [],
  nbBookmarked: 0
}

const mutations = {
  /* Init list of heroes */
  HEROES_INIT (state, heroes) {
    state.heroes = heroes
  },
  /* Bookmark a hero */
  HEROES_BOOKMARK (state, heroBookmarked) {
    if (state.nbBookmarked < 5) {
      state.heroes = state.heroes.map(hero => {
        if (hero.id === heroBookmarked.id && !hero.bookmark) {
          state.nbBookmarked++
          return { ...hero, bookmark: true }
        } else {
          return hero
        }
      })
    }
  },
  /* Unbookmark a hero */
  HEROES_UNBOOKMARK (state, heroBookmarked) {
    state.heroes = state.heroes.map(hero => {
      if (hero.id === heroBookmarked.id && hero.bookmark) {
        delete hero.bookmark
        state.nbBookmarked--
        return hero
      } else {
        return hero
      }
    })
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
  /* Get all the heroes */
  heroes (state, getters, rootState) {
    return state.heroes
  },
  /* Get the hero in the list by the given id */
  getHeroById: (state, getters, rootState) => (id) => {
    return state.heroes.find(hero => hero.id === parseInt(id))
  },
  /* Get the previous hero in the list by the given id of the selected hero */
  getPrevHeroById: (state, getters, rootState) => (id) => {
    return state.heroes[state.heroes.indexOf(getters.getHeroById(id)) - 1]
  },
  /* Get the next hero in the list by the given id of the selected hero */
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
