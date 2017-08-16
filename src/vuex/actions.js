import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const actions = {
  actionInc ({ commit, state }, payload) {
    const newCount = state.count + payload
    commit({
      type: 'increment',
      newCount: newCount
    })
  },
  getAllArticles ({ commit }) {
    http.get('/articles')
    .then(({ data }) => {
      commit({
        type: 'setArticles',
        data
      })
    })
    .catch((err) => console.log(err))
  }
}

export default actions
