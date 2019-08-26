<template>
  <div id="logo-lateral">
  <img :src="require(`@/assets/images/${source}`)"  :style="styles">
  </div>
</template>

<script>
import Separador from '@/components/Separator.vue'
export default {
  name: 'LogoComponent',
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
    this.styles = { 'width': this.width.concat('%'), 'height': this.height.concat('%') }
  }
}
</script>

<style scoped>

</style>
