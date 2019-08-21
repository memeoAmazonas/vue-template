<template>
  <b-navbar toggleable="lg">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-brand href="#">
        <logo-component :source="'logo_1.png'" :width="'150px'" :height="'150px'" :isVisible="isVisible" />
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <label-component :goToLink="'/home'" :label="home" :classStyle="true" :classStyleLateral="false"/>
        <label-component :goToLink="'/'" :label="withdrawBtc" :classStyle="true" :classStyleLateral="false"/>
        <label-component  :goToLink="'/'" :label="withdrawDash" :classStyle="true" :classStyleLateral="false"/>
        <label-component  :goToLink="'/'" :label="transactions" :classStyle="true" :classStyleLateral="false"/>
        <label-component :goToLink="'/'" :label="logout" :classStyle="true" :classStyleLateral="false"/>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import strings from '@/components/strings.js'
import LabelComponent from '@/components/LinkComponent.vue'
import LogoComponent from '@/components/LogoComponent.vue'
export default {
  name: 'Header',
  data () {
    return {
      isVisible: true,
      home: strings.home,
      logout: strings.exit,
      withdrawBtc: strings.withdrawBtc,
      withdrawDash: strings.withdrawDash,
      transactions: strings.transactions
    }
  },
  components: {
    LabelComponent,
    LogoComponent
  }
}
</script>

<style scoped>

</style>
