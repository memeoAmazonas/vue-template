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
  name: 'BtcPayment',
  data () {
    return {
      label: Strings.withdrawBtc
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
