<template>
<div class="menu-lateral">
  <div class="logo-menu-lateral">
  <logo-component :source="'logo_1.png'" :width="'150px'" :height="'150px'" :isVisible="isVisible"/>
  </div>
    <div class="content-menu-lateral">
    <link-button-component :goToLink="'/home'" :label="home" :classStyle="false" :classStyleLateral="true" :fontSize="'20'"/>
    <link-button-component  :goToLink="'/btc/retirement'" :label="withdrawBtc" :classStyle="false" :classStyleLateral="true" :fontSize="'20'"/>
    <link-button-component  :goToLink="'/'" :label="withdrawDash" :classStyle="false" :classStyleLateral="true" :fontSize="'20'"/>
    <link-button-component  :goToLink="'/transaction'" :label="transactions" :classStyle="false" :classStyleLateral="true" :fontSize="'20'"/>
    <link-button-component  :goToLink="'/'" :label="logout" :classStyle="false" :classStyleLateral="true" :fontSize="'20'"/>
    </div>
  </div>
  </template>

<script>
import strings from '@/components/strings.js'
import Separator from '@/components/Separator.vue'
import LinkButtonComponent from '@/components/LinkButtonComponent.vue'
import LogoComponent from '@/components/LogoComponent.vue'
export default {
  name: 'MenuLateral',
  data () {
    return {
      home: strings.home,
      withdrawBtc: strings.withdrawBtc,
      withdrawDash: strings.withdrawDash,
      transactions: strings.transactions,
      logout: strings.exit,
      logo: 'logo_1.png',
      isVisible: true
    }
  },
  components: {
    Separator,
    LinkButtonComponent,
    LogoComponent
  }
}

</script>

<style scoped>
h1{
color: white}
</style>
