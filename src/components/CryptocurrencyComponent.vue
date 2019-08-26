<template>
  <content-component :width="'60'" :padding="'0'">
    <div class="logo-menu-lateral">
    <logo-component :source="source" :width="'90'" :height="'90'" />
    <separator />
    </div>
    <div class="content-cryptocurrency">
    <label-component :label="'USD '.concat(labelUsd)" :color="color" :fontSize="'220'"  />
    <label-component :label="'EUR '.concat(labelEur)" :color="color" :fontSize="'220'"  :textAlign="'left'" />
    <b-button variant="light" :style="styles" @click.prevent="redirectTo">{{labelCryptocurrency}}</b-button>
    </div>
  </content-component>
</template>

<script>
import { router } from '@/helpers'
import Strings from '@/components/strings.js'
import Separator from '@/components/Separator.vue'
import LogoComponent from '@/components/LogoComponent.vue'
import LabelComponent from '@/components/LabelComponent.vue'
import ContentComponent from '@/components/ContentComponent.vue'
export default {
  name: 'CryptocurrencyComponent',
  props: {
    url: '',
    color: '',
    source: '',
    labelEur: '',
    labelUsd: '',
    labelCryptocurrency: ''

  },
  data: function () {
    return {
      styles: {}

    }
  },
  methods: {
    redirectTo () {
      router.push(this.url)
    }
  },
  mounted () {
    this.styles = {'color': '#000000', 'background-color': this.color.concat(' !important'), 'margin-top': '5%'}
  },
  components: {
    Strings,
    Separator,
    LogoComponent,
    LabelComponent,
    ContentComponent
  }
}
</script>

<style scoped>

</style>
