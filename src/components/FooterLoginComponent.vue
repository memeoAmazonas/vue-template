<template>
  <div class="footer-register-component">
    <div class="footer-register-component-content">
      <link-button-component :goToLink="'/restore-password'" :label="forgotPassword" :classStyle="classStyleBo" :fontSize="fontSi" :classDefault="'link-a'"/>
    </div>
    <div class="footer-register-component-content">
      <label-component  :color="'#879fa3'" :label="newOnWay" :fontSize="fontSi"/>
      <link-button-component :goToLink="'/register'" :label="registerNow" :classStyle="classStyleBo" :fontSize="fontSi" :classDefault="'link-a'"/>
    </div>
  </div>
</template>

<script>
import Strings from '@/components/strings.js'
import LabelComponent from '@/components/LabelComponent.vue'
import LinkButtonComponent from '@/components/LinkButtonComponent.vue'
export default {
  name: 'FooterLoginComponent',
  data () {
    return {
      fontSi: '80',
      newOnWay: Strings.newOnWay,
      registerNow: Strings.registerNow,
      forgotPassword: Strings.forgotPassword,
      classStyleBo: 'register-login-register-link'
    }
  },
  components: {
    Strings,
    LabelComponent,
    LinkButtonComponent
  }
}
</script>

<style scoped>

</style>
