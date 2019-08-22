<template>
  <div>
    <notification-component :label="label" />
    <view-component>

    </view-component>
  </div>
</template>

<script>
import Strings from '@/components/strings.js'
import NotificationComponent from '@/components/NotificationComponent.vue'
import ViewComponent from '@/components/ViewComponent.vue'
export default {
  name: 'Home',
  data () {
    return {
      label: Strings.home
    }
  },
  components: {
    Strings,
    ViewComponent,
    NotificationComponent

  }
}
</script>

<style scoped>

</style>
