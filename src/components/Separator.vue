<template>
  <div id="separator" :style="styles"/>
</template>
<script>
export default {
  name: 'Separator',
  props: {
    height: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      styles: {}
    }
  },
  mounted () {
    this.styles = { 'height': this.height.concat('% !important') }
  }
}
</script>
<style scoped></style>
