<template>
  <view-component :left="'28'">
    <notification-component :label="label" />
    <send-cryptocurrency-component :label="label" :source="source" :color="'#0080bf'" :currency="symbol" :placeholder="placeholder.concat(symbol)" :disabled="true"  />
  </view-component>
</template>

<script>
import Strings from '@/components/strings.js'
import ViewComponent from '@/components/ViewComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
import SendCryptocurrencyComponent from '@/components/SendCryptocurrencyComponent.vue'
export default {
  name: 'SendDash',
  data: function () {
    return {
      symbol: 'DASH',
      source: 'logo_1.png',
      placeholder: Strings.walletAddres,
      label: Strings.removeDash
    }
  },
  components: {
    Strings,
    ViewComponent,
    NotificationComponent,
    SendCryptocurrencyComponent
  }
}
</script>

<style scoped>

</style>
