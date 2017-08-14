import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    articles: []
  },
  mutations: {
    increment (state, payload) {
      state.count = payload
    },
    setArticles (state, payload) {
      state.articles = payload
    }
  },
  actions
})
