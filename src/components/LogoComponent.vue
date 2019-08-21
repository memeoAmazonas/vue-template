<template>
  <div id="logo-lateral">
  <img :src="require(`@/assets/images/${source}`)"  :style="styles">
  <separador v-if="isVisible"/>
  </div>
</template>

<script>
import Separador from '@/components/Separator.vue'
export default {
  name: 'LogoComponent',
  props: {
    width: '',
    source: '',
    height: '',
    isVisible: {
      type: Boolean,
      require: true,
      default: function () { return false }
    }
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
    this.styles = { 'width': this.width, 'height': this.height, 'margin': this.isVisible ? ' 20% auto 15% 24%' : '4% auto 0 auto' }
  }

}
</script>

<style scoped>

</style>
