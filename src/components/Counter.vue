<template>
  <div>
    <h1>{{ count }}</h1>
    <button type="button" @click="increment">+ 2</button>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('actionInc', 2)
    }
  }
}
</script>

<style>
  
</style>
