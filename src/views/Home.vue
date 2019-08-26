<template>
  <div>
    <notification-component :label="label" />
    <view-component :left="'23'" v-for="item in cryptocurrencyList" :key="item.icon">
      <div v-for="item in cryptocurrencyList" :key="item.icon" class="home-cryptocurrency">
      <cryptocurrency-component  :source="item.icon" :labelUsd="item.priceUsd" :labelEur="item.priceEuro" :color="item.color" :url="item.url" :labelCryptocurrency="item.labelCryptocurrency"/>
      </div>:
    </view-component>
  </div>
</template>

<script>
import axios from 'axios'
import { router } from '@/router/index.js'
import { api } from '@/services/ApiRoutes'
import Strings from '@/components/strings.js'
import ViewComponent from '@/components/ViewComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
import CryptocurrencyComponent from '@/components/CryptocurrencyComponent.vue'
export default {
  name: 'Home',
  data () {
    return {
      label: Strings.home,
      cryptocurrencyList: {},
      dash: {
        priceUsd: '',
        priceEuro: '',
        icon: 'dash.png',
        color: '#0080bf',
        url: '/dash/receive',
        labelCryptocurrency: Strings.receiveDash
      },
      btc: {
        priceUsd: '',
        priceEuro: '',
        icon: 'btc.png',
        color: '#ebae34',
        url: '/btc/receive',
        labelCryptocurrency: Strings.receiveBtc
      }
    }
  },
  components: {
    axios,
    Strings,
    ViewComponent,
    NotificationComponent,
    CryptocurrencyComponent
  },
  mounted () {
    if (localStorage.user) {
      this.actualUser = JSON.parse(localStorage.user)
      this.token = this.actualUser.token
    } else {
      router.push({ name: 'login' })
    }
    axios.get(api.getPriceBtc).then(response => {
      if (response.status === 200) {
        this.btc.priceUsd = response.data.result.USD
        this.btc.priceEuro = response.data.result.EUR
      }
    })
    axios.get(api.getPriceDash).then(response => {
      if (response.status === 200) {
        this.dash.priceUsd = response.data.result.USD
        this.dash.priceEuro = response.data.result.EUR
      }
    })
    this.cryptocurrencyList = [ this.btc, this.dash ]
  }
}
</script>

<style scoped>

</style>
