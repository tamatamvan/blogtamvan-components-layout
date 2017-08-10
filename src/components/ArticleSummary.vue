<template>
  <router-link :to="'/blog/' + article.id" class="list-group-item">
    <div class="row">
      <div class="col-md-4">
        <img :src="article.image" class="img-responsive"/>
      </div>
      <div class="col-md-8">
        <router-link :to="'/blog/' + article.id">
          <h4 class="list-group-item-heading">
            {{ article.title }}
          </h4>
        </router-link>
        <p class="list-group-item-text">
          {{ article.content.substring(0, 150) }} . . .
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['article']
}
</script>

