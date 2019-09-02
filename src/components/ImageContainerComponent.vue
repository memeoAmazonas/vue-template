<template>
  <div class="image-component">
    <img :src="require(`@/assets/images/${source}`)"  :style="styles">
  </div>
</template>

<script>
import Separador from '@/components/Separator.vue'
export default {
  name: 'ImageContainerComponent',
  props: {
    width: '',
    source: '',
    height: ''
  },
  data () {
    return {
      styles: {}
    }
  },
  components: {
    Separador
  },
  mounted () {
    this.styles = { 'width': this.width + '%', 'height': this.height + '%' }
  }
}
</script>

<style scoped>

</style>
