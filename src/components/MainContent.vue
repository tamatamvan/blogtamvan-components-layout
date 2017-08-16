<template>
  <div class="col-md-9">
    <div class="list-group">
      <article-summary 
      v-for="(article, index) in berita" 
      :article="article" 
      :key="index"
      ></article-summary>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleSummary from '@/components/ArticleSummary'
export default {
  components: {
    ArticleSummary
  },
  computed: {
    ...mapGetters({
      berita: 'articles',
      jumlahBerita: 'articlesCount'
    })
  }
}
</script>

