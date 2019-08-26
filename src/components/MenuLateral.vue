<template>
  <div class="menu-lateral" >
    <div class="logo-menu-lateral">
      <logo-component :source="logo" :width="'100%'" :height="'100%'"/>
      <separator />
    </div>
    <div class="content-menu-lateral" v-for="item in items" :key="item.label">
      <link-button-component :goToLink="item.route" :label="item.label" :classStyle="classStyle" :fontSize="fontSize" />
    </div>
  </div>
</template>

<script>
import Strings from '@/components/strings.js'
import Separator from '@/components/Separator.vue'
import LogoComponent from '@/components/LogoComponent.vue'
import LinkButtonComponent from '@/components/LinkButtonComponent.vue'
export default {
  name: 'MenuLateral',
  data () {
    return {
      fontSize: '125',
      logo: 'logo_1.png',
      classStyle: 'label-component-menu-lateral',
      items: [
        {
          route: '/home',
          label: Strings.home
        },
        {
          route: '/btc/send',
          label: Strings.removeBtc
        },
        {
          route: '/dash/send',
          label: Strings.removeDash
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
    Separator,
    Strings,
    LinkButtonComponent,
    LogoComponent
  },
  computed: {
    user: function () {
      return JSON.parse(localStorage.getItem('user'))
    }
  }

}

</script>

<style scoped>
</style>
