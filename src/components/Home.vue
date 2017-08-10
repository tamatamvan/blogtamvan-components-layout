<template>
  <div>
    <h1>Welcome Everybody!</h1>
    <counter/>
    <counter-satu/>
  </div>
</template>

<script>
import Counter from '@/components/Counter'
import CounterSatu from '@/components/CounterSatu'
export default {
  components: {
    Counter,
    CounterSatu
  }
}
</script>