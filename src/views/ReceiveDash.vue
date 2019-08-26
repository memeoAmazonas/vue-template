<template>
  <view-component :left="'10'">
    <notification-component :label="label" />
    <receive-cryptocurrency-component :source="source" :color="'#0080bf'" :label="labelSend" :disabled ="true" :currency="'$'"/>
  </view-component>
</template>

<script>
import Strings from '@/components/strings.js'
import ViewComponent from '@/components/ViewComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
import ReceiveCryptocurrencyComponent from '@/components/ReceiveCryptocurrencyComponent.vue'
export default {
  name: 'ReceiveDash',
  data () {
    return {
      source: 'logo_1.png',
      label: Strings.withdrawDash,
      labelSend: Strings.receiveDashLabel
    }
  },
  components: {
    Strings,
    ViewComponent,
    NotificationComponent,
    ReceiveCryptocurrencyComponent
  }
}
</script>

<style scoped>

</style>
