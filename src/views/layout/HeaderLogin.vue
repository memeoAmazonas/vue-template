<template>
  <b-navbar toggleable="lg">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto" >
        <link-button-component :goToLink="'/'"  :label="login" :classStyle="true" :classStyleLateral="false"/>
        <link-button-component :goToLink="'/'" :label="register" :classStyle="true" :classStyleLateral="false"/>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Strings from '@/components/strings.js'
import LinkButtonComponent from '@/components/LinkButtonComponent.vue'
export default {
  name: 'HeaderLogin',
  data () {
    return {
      login: Strings.login,
      register: Strings.register
    }
  },
  components: {
    Strings,
    LinkButtonComponent
  }
}
</script>

<style scoped></style>
