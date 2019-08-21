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
  name: 'Home',
  data () {
    return {
      label: Strings.home
    }
  },
  components: {
    NotificationComponent,
    Strings

  }
}
</script>

<style scoped>

</style>
