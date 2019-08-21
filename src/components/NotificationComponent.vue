<template>
    <div>
      <notifications position="top left"/>
      <vue-headful :title="label"/>
    </div>
</template>

<script>
export default {
  name: 'NotificationComponent',
  props: {
    label: ''
  }
}

</script>

<style scoped>

</style>
