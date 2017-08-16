const mutations = {
  increment (state, payload) {
    state.count = payload.newCount
  },
  setArticles (state, payload) {
    state.articles = payload.data
  }
}

export default mutations
