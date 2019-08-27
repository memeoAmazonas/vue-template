<template>
    <div>
        <notification-component :label="label" />
        <view-component :left="'22'">
            <content-component :width="'100'">
              <div class="table-container">
                <div class="table-container-img">
                  <logo-component :source="source" :width="'80'" :height="'80'" />
                  <separator :height="'4'"/>
                </div>
                <b-table class="table-t" striped hover small :items="items" :fields="fields" ></b-table>
              </div>
        </content-component>
      </view-component>
    </div>
</template>

<script>
import axios from 'axios'
import { router } from '@/router/index.js'
import { api } from '@/services/ApiRoutes.js'
import Strings from '@/components/strings.js'
import Separator from '@/components/Separator.vue'
import LogoComponent from '@/components/LogoComponent.vue'
import ViewComponent from '@/components/ViewComponent.vue'
import ContentComponent from '@/components/ContentComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
import TransactionTableComponent from '@/components/TransactionTableComponent.vue'
export default {
  name: 'TransactionDetail',
  components: {
    Strings,
    Separator,
    LogoComponent,
    ViewComponent,
    ContentComponent,
    NotificationComponent,
    TransactionTableComponent
  },
  data () {
    return {
      items: [],
      detail: '',
      actualUser: {},
      source: 'btc.png',
      label: Strings.transactionDetail,
      fields: Strings.headerTransactionDetail
    }
  },
  mounted () {
    if (localStorage.user) {
      this.actualUser = JSON.parse(localStorage.user)
    } else {
      router.push({ name: 'login' })
    }
    var data = { token: this.actualUser.token, code: this.$route.params.code }
    axios.post(api.transactionDetailService, data).then(response => {
      if (response.status === 200) {
        this.detail = response.data.data
        var sizeCode = this.detail.payment_code.length
        this.detail.payment_transactions = this.detail.payment_transactions.length === 0 ? 'vacio' : this.detail.payment_transactions.length
        // TODO es necesario validar el objeto detail para ver que hacer con items
        this.items.push({
          payment_address: this.detail.payment_address,
          payment_amount: this.detail.payment_amount,
          payment_amount_total: this.detail.payment_amount_total,
          payment_code: this.detail.payment_code.substring(0, 6).concat('...').concat(this.detail.payment_code.substring(sizeCode - 5, sizeCode)),
          payment_status: this.detail.payment_status,
          payment_transactions: this.detail.payment_transactions
        })
        // TODO es necesario validar el campo payment_transactions.length
        /*        if (this.items[0].payment_transactions.length > 1){
                  this.tableContainer.top = '500px';
                  this.tableContainer.height = '155%';

                } */
      }
    }).catch(() => {
      router.push({ name: 'transaction' })
    })
  }
}
</script>

<style scoped>
  .table-container-img {
      margin-top: 0%;
  }
</style>
