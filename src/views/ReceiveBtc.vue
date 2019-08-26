<template>
  <view-component :left="'25'">
    <notification-component :label="label" />
    <receive-cryptocurrency-component :source="source" :color="'#ebae34'" :label="labelSend" :disabled ="false" :currency="'$'"/>
  </view-component>
</template>

<script>
import Strings from '@/components/strings.js'
import ViewComponent from '@/components/ViewComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
import ReceiveCryptocurrencyComponent from '@/components/ReceiveCryptocurrencyComponent.vue'
export default {
  name: 'ReceiveBtc',
  data () {
    return {
      source: 'logo_1.png',
      label: Strings.withdrawBtc,
      labelSend: Strings.receiveBtcLabel
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
