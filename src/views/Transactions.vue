<template>
  <div>
    <notification-component :label="label" />
    <div class="content-component">

    </div>
  </div>
</template>

<script>
import Strings from '@/components/strings.js'
import NotificationComponent from '@/components/NotificationComponent.vue'

export default {
  name: 'Transactions',
  data () {
    return {
      label: Strings.transactions,
      column: {template: `<h1>other</h1>`}
    }
  },
  components: {
    Strings,
    NotificationComponent
  }
}
</script>

<style scoped>

</style>
