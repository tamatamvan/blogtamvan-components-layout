<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      Latest Articles
    </div>
    <div class="panel-body">
      <div class="list-group">
        <router-link 
        v-for="(article, index) in articles" 
        :to="'/blog/' + article.id" 
        class="list-group-item"
        :key="index"
        >
          {{ article.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    articles () {
      return this.$store.state.articles
    }
  }
}
</script>

<style scoped>
.panel-body {
  padding: 0;
}
.list-group {
  margin-bottom: 0;
}
.list-group-item {
  cursor: pointer;
}
</style>
