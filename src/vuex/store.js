import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

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
  actions: {
    actionInc ({ commit, state }, payload) {
      const newCount = state.count + payload
      commit('increment', newCount)
    },
    getAllArticles ({ commit }) {
      http.get('/articles')
      .then(({ data }) => {
        commit('setArticles', data)
      })
      .catch((err) => console.log(err))
    }
  }
})
