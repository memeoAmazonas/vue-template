<template>
  <div>
  <router-link :to="goToLink" class="link-to-a">
    {{label}}
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'LinkComponent',
  props: {
    goToLink: {
      type: String,
      default: '/'
    },
    label: ''
  }
}
</script>

<style scoped>

</style>
