<template>
  <div class="container">
    <div class="row">
      <sidebar></sidebar>
      <router-view></router-view>
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
  created () {
    this.$store.dispatch('getAllArticles')
  }
}
</script>

