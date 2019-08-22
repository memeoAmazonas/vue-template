<template>
  <b-navbar toggleable="lg">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-brand href="#">
        <logo-component :source="'logo_1.png'" :width="'150px'" :height="'150px'" :isVisible="isVisible" />
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <link-button-component :goToLink="'/home'" :label="home" :classStyle="true" :classStyleLateral="false"/>
        <link-button-component :goToLink="'/'" :label="withdrawBtc" :classStyle="true" :classStyleLateral="false"/>
        <link-button-component  :goToLink="'/'" :label="withdrawDash" :classStyle="true" :classStyleLateral="false"/>
        <link-button-component  :goToLink="'/'" :label="transactions" :classStyle="true" :classStyleLateral="false"/>
        <link-button-component :goToLink="'/'" :label="logout" :classStyle="true" :classStyleLateral="false"/>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Strings from '@/components/strings.js'
import LogoComponent from '@/components/LogoComponent.vue'
import LinkButtonComponent from '@/components/LinkButtonComponent.vue'
export default {
  name: 'Header',
  data () {
    return {
      isVisible: true,
      home: Strings.home,
      logout: Strings.exit,
      withdrawBtc: Strings.withdrawBtc,
      withdrawDash: Strings.withdrawDash,
      transactions: Strings.transactions
    }
  },
  components: {
    Strings,
    LogoComponent,
    LinkButtonComponent
  }
}
</script>

<style scoped>

</style>
