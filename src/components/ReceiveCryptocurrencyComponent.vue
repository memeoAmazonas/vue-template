<template>
  <content-component :width="'40'" :padding="'0'">
    <div class="logo-menu-lateral">
      <logo-component :source="source" :width="'100'" :height="'100'" />
    </div>
      <separator />
      <div class="content-cryptocurrency">
        <label-component :label="label" :color="color" :fontSize="'220'"  />
        <input-component v-model="realValue" :currency=currency></input-component>
        <b-button variant="light" :style="styles" :disabled="isDisabled()"   @click.prevent="sendPayment">{{labelCryptocurrency}}</b-button>
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
  name: 'ReceiveCryptocurrencyComponent',
  props: {
    source: '',
    label: '',
    color: '',
    currency: '',
    disabled: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      value: 0,
      realValue: 0,
      styles: {},
      token: '',
      labelCryptocurrency: Strings.createPayment

    }
  },
  mounted () {
    this.styles = {'color': '#000000', 'background-color': this.color.concat(' !important'), 'margin-top': '5%'}
    if (localStorage.user) {
      this.actualUser = JSON.parse(localStorage.user)
      this.token = this.actualUser.token
    } else {
      router.push({ name: 'login' })
    }
  },
  methods: {
    sendPayment () {
      var data = {
        transactionAmount: this.realValue,
        transactionToken: this.token
      }
      console.log(data)
      axios.post(api.createPayment, data, { headers: { 'Content-Type': 'application/json' } }).then(response => {
        if (response.status === 200) {
          this.$notify({
            title: 'Transacción realizada.',
            type: 'success',
            text: response.data.message
          })
          this.realValue = '0'
          this.loading = false
          window.open(response.data.result.payment_url, '_blank')
          router.push({ name: 'home' })
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
    },
    isDisabled () {
      return this.realValue === 0 || this.disabled
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
