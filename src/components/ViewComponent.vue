<template>
  <div >
    <b-container :style="styles">
    <slot></slot>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ViewComponent',
  props: {

    left: {
      type: String,
      default: '10'
    }
  },
  data () {
    return {
      styles: {
      }
    }
  },
  mounted () {
    this.styles = { 'left': this.left.concat('% !important') }
  }
}
</script>

<style scoped>

</style>
