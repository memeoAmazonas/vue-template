<template>
    <div class="content" :style="styles">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'ContentComponent',
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
    this.styles = { 'width': this.width.concat('%') }
  }
}
</script>
<style scoped>

</style>
