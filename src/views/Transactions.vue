<template>
  <div>
    <notification-component :label="label" />
    <view-component :left="'22'">
      <content-component :width="'120'">
      <transaction-table-component  :labels="labels" :items="transactions"/>
      </content-component>
    </view-component>
  </div>
</template>

<script>
import axios from 'axios'
import { api } from '@/services/ApiRoutes.js'
import Strings from '@/components/strings.js'
import ViewComponent from '@/components/ViewComponent.vue'
import ContentComponent from '@/components/ContentComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
import TransactionTableComponent from '@/components/TransactionTableComponent.vue'
export default {
  name: 'Transactions',
  data () {
    return {
      transactions: [],
      label: Strings.transactions,
      labels: Strings.headerTransaction
    }
  },
  mounted () {
    var data = JSON.parse(localStorage.user)
    axios.post(api.transactions, data).then(response => {
      if (response.status === 200) {
        let result = response.data.data
        let total = result.length > 8 ? 8 : result.length
        for (let i = 0; i < total; i++) {
          this.transactions.push(result[i])
        }
        this.items = response.data.data.length
      }
    })
  },

  components: {
    Strings,
    ViewComponent,
    ContentComponent,
    NotificationComponent,
    TransactionTableComponent
  }
}
</script>

<style scoped>

</style>
