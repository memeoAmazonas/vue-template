<template>
  <b-navbar toggleable="lg">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto" >
        <label-component :goToLink="'/'"  :label="login" :classStyle="true" :classStyleLateral="false"/>
        <label-component :goToLink="'/'" :label="register" :classStyle="true" :classStyleLateral="false"/>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import strings from '@/components/strings.js'
import LabelComponent from '@/components/LinkComponent.vue'
export default {
  name: 'HeaderLogin',
  data () {
    return {
      login: strings.login,
      register: strings.register
    }
  },
  components: {
    LabelComponent
  }
}
</script>

<style scoped>

</style>
