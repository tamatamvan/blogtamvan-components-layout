<template>
  <div class="container">
    <div class="row">
      <sidebar 
      :articles="articles"
      ></sidebar>
      <router-view 
      :articles="articles"
      ></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import MainContent from '@/components/MainContent'
export default {
  components: {
    Sidebar,
    MainContent
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles () {
      this.$http.get('/articles')
      .then(({data}) => {
        this.articles = data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>

