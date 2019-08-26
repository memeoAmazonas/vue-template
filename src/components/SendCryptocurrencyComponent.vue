<template>
  <content-component :width="'40'" :padding="'0'">
    <div class="logo-menu-lateral">
      <logo-component :source="source" :width="'100'" :height="'100'" />
    </div>
    <separator />
    <div class="content-cryptocurrency">
      <label-component :label="label" :color="color" :fontSize="'220'"  />
      <input :v-model="wallet" :placeholder="placeholder" class="input-type"/>
      <input-component v-model="realValue" :currency=currency></input-component>
      <b-button variant="light" :style="styles" :disabled="disabled"  @click.prevent="sendPayment">{{labelCryptocurrency}}</b-button>
    </div>
  </content-component>
</template>

<script>
import axios from 'axios'
import { router } from '@/router/index.js'
import { api } from '@/services/ApiRoutes'
import Strings from '@/components/strings.js'
import Separator from '@/components/Separator.vue'
import LogoComponent from '@/components/LogoComponent.vue'
import InputComponent from '@/components/InputComponent.vue'
import LabelComponent from '@/components/LabelComponent.vue'
import ContentComponent from '@/components/ContentComponent.vue'
export default {
  name: 'SendCryptocurrencyComponent',
  props: {
    source: '',
    label: '',
    color: '',
    currency: '',
    placeholder: '',
    walletSymbol: '',
    disabled: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      wallet: 0,
      realValue: 0,
      styles: {},
      token: '',
      labelCryptocurrency: Strings.send
    }
  },
  mounted () {
    this.styles = {'color': '#000000', 'background-color': this.color.concat(' !important'), 'margin-top': '5%'}
    if (localStorage.user) {
      this.actualUser = JSON.parse(localStorage.user)
      this.token = this.actualUser.token
    } else {
      router.push({name: 'login'})
    }
  },
  methods: {
    sendPayment () {
      var data = {
        transactionAddress: this.wallet,
        transactionAmount: this.realValue,
        transactionToken: this.token
      }
      let url = this.currency === 'BTC' ? api.sendBtc : ''
      axios.post(url, data, {headers: {'Content-Type': 'application/json'}}).then(response => {
        if (response.status === 200) {
          this.$notify({
            title: 'Transacción realizada.',
            type: 'success',
            text: response.data.message
          })
          this.realValue = '0'
          this.loading = false
          router.push({name: 'home'})
        }
      }).catch(error => {
        if (error.response) {
          this.error = error.response.data.message
          this.$notify({
            title: 'Error durante la transacción.',
            type: 'error',
            text: this.error
          })
        }
        this.loading = false
      })
    }
  },
  components: {
    Strings,
    Separator,
    LogoComponent,
    LabelComponent,
    InputComponent,
    ContentComponent
  }
}
</script>

<style scoped>

</style>
