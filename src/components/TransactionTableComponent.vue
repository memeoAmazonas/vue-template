<template>
  <div class="table-container">
    <div class="table-container-img">
    <logo-component :source="source" :width="'80'" :height="'80'" />
      <separator />
    </div>
    <b-table class="table-t" striped hover small :items="items" :fields="labels" >
      <template slot="code" slot-scope="data">
        <router-link  :to="{ name: 'transactionDetail', params: { code: data.value } }" style="text-decoration: none; color: white !important;">
          {{ data.value.substring(0,7).concat("...").concat(data.value.substring(data.value.length- 7,data.value.length)) }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import moment from 'moment'
import LogoComponent from '@/components/LogoComponent.vue'
import Separator from '@/components/Separator.vue'
export default {
  name: 'TransactionTableComponent',
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    labels: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      fields: [],
      source: 'btc.png'
    }
  },
  methods: {
    getDate (date) {
      return moment(date * 1000).format('DD-MM-YYYY')
    }
  },
  components: {
    Separator,
    LogoComponent
  }
}
</script>

<style scoped>

</style>
