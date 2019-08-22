<template>
  <div class="content-component">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentComponent',
  props: {
    isChild: {}
  }
}
</script>

<style scoped>

</style>
