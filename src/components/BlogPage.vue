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
import { mapActions } from 'vuex'
export default {
  components: {
    Sidebar,
    MainContent
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  created () {
    this.getAllArticles()
  }
}
</script>

