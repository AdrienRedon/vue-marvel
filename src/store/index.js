export default {
  state: {
    loading: true
  },
  loading () {
    this.state.loading = true
  },
  loaded () {
    this.state.loading = false
  }
}
