const mutations = {
  increment (state, payload) {
    state.count = payload
  },
  setArticles (state, payload) {
    state.articles = payload
  }
}

export default mutations
