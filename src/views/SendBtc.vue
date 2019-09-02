<template>
  <view-component :left="'28'">
    <notification-component :label="label" />
    <send-cryptocurrency-component :label="label" :source="source" :color="'#ebae34'" :currency="symbol" :placeholder="placeholder.concat(symbol)"  />
  </view-component>
</template>

<script>
import Strings from '@/components/strings.js'
import ViewComponent from '@/components/ViewComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
import SendCryptocurrencyComponent from '@/components/SendCryptocurrencyComponent.vue'
export default {
  name: 'SendBtc',
  data: function () {
    return {
      symbol: 'BTC',
      source: 'logo_1.png',
      placeholder: Strings.walletAddres,
      label: Strings.removeBtc
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
