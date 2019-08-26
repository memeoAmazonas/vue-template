<template>
  <b-navbar toggleable="lg">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-brand href="#">
        <logo-component :source="logo" :width="'60'" :height="'50'" />
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto"  v-for="item in items" :key="item.label">
        <link-button-component :goToLink="item.route" :label="item.label" :classStyle="classStyle" :fontSize="fontSize" />
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
      fontSize: '90',
      logo: 'logo_1.png',
      classStyle: 'label-component',
      items: [
        {
          route: '/home',
          label: Strings.home
        },
        {
          route: '/btc/retirement',
          label: Strings.withdrawBtc
        },
        {
          route: '/',
          label: Strings.withdrawDash
        },
        {
          route: '/transaction',
          label: Strings.transactions
        },
        {
          route: '/',
          label: Strings.exit
        }
      ]
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
