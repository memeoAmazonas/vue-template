<template>
  <div class="content-child-component" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentChildComponent',
  props: {
    width: {
      type: String,
      default: '80'
    }
  },
  data () {
    return {
      styles: {}
    }
  },
  mounted () {
    this.styles = { 'width': this.width.concat('% !important') }
  }
}
</script>

<style scoped></style>
