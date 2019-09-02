<template>
  <div class="footer-register-component">
    <div class="footer-register-component-content">
      <label-component  :color="'#879fa3'" :label="accountExist" :fontSize="fontSi" :textAling="'right'"/>
      <link-button-component :goToLink="'/'" :label="loginLabel" :classStyle="classStyleBo" :fontSize="fontSi" :classDefault="'link-a'" />
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
  name: 'FooterRestorePasswordComponent',
  data () {
    return {
      fontSi: '80',
      loginLabel: Strings.loginLabel,
      accountExist: Strings.accountExist,
      passwordLabel: Strings.forgotPassword,
      classStyleBo: 'register-login-register-link',
      passwordLabelLink: Strings.recoveryPassword,
      newOnWay: Strings.newOnWay,
      registerNow: Strings.registerNow
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
