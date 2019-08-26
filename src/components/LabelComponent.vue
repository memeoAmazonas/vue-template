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
    color: String,
    textAling: {
      default: 'center ',
      type: String
    }
  },
  data () {
    return {
      styles: {}
    }
  },
  mounted () {
    this.styles = { display: 'flex', 'font-size': this.fontSize.concat('%'), 'color': this.color, 'text-align': this.textAling.concat(' !important') }
  }
}
</script>

<style scoped>

</style>
