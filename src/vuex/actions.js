import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

export default {
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
