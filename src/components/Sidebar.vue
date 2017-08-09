<template>
  <div class="col-md-3">
    <widget-articles :articles="articles"></widget-articles>
  </div>
</template>

<script>
import WidgetArticles from '@/components/WidgetArticles'
export default {
  props: ['articles'],
  components: {
    WidgetArticles
  }
}
</script>

