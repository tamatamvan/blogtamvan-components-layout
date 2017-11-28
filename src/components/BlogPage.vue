<template>
  <div class="container">
    <div class="row">
      <SideBar 
      :articles="articles"/>
      <router-view 
      :articles="articles"/>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import MainContent from '@/components/MainContent'
export default {
  components: {
    SideBar,
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

