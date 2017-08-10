<template>
  <div>
    <h1>{{ count }}</h1>
    <button type="button">+</button>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style>
  
</style>
