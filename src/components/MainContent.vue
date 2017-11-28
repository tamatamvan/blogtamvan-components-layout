<template>
  <div class="col-md-9">
    <div class="list-group">
      <ArticleSummary
      v-for="(article, index) in articles" 
      :article="article" 
      :key="index"/>
    </div>
  </div>
</template>

<script>
import ArticleSummary from '@/components/ArticleSummary'
export default {
  components: {
    ArticleSummary
  },
  computed: {
    articles () {
      return this.$store.state.articles
    }
  }
}
</script>

