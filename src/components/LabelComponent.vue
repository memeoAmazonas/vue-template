<template>
<span :style="styles">{{label}}</span>
</template>

<script>
export default {
  name: 'LabelComponent',
  props: {
    label: String,
    fontSize: String,
    fontFamily: String,
    color: String
  },
  data () {
    return {
      styles: {}
    }
  },
  mounted () {
    this.styles = { 'font-size': this.fontSize.concat('px'), 'color': this.color }
  }
}
</script>

<style scoped>

</style>
