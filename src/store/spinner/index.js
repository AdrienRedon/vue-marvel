const state = {
  loading: true
}

const mutations = {
  SPINNER_LOADING (state) {
    state.loading = true
  },
  SPINNER_LOADED (state) {
    state.loading = false
  }
}

const actions = {
  spinner_loading ({state, commit}) {
    commit('SPINNER_LOADING')
  },
  spinner_loaded ({state, commit}) {
    commit('SPINNER_LOADED')
  }
}

const getters = {
  /* Get the state of the spinner */
  loading (state, getters, rootState) {
    return state.loading
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
