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
    },
    padding: {
      type: String,
      default: '5'
    }
  },
  data () {
    return {
      styles: {}
    }
  },
  mounted () {
    this.styles = { 'width': this.width.concat('%'), padding: this.padding.concat('% 0') }
  }
}
</script>
<style scoped>

</style>
