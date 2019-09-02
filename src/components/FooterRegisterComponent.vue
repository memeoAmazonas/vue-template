<template>
  <div class="footer-register-component">
    <div class="footer-register-component-content">
    <label-component  :color="'#879fa3'" :label="accountExist" :fontSize="fontSi" :textAling="'right'"/>
      <link-button-component :goToLink="'/'" :label="loginLabel" :classStyle="classStyleBo" :fontSize="fontSi" :classDefault="'link-a'" />
    </div>
    <div class="footer-register-component-content">
      <label-component  :color="'#879fa3'" :label="passwordLabel" :fontSize="fontSi"/>
      <link-button-component :goToLink="'/restore-password'" :label="passwordLabelLink" :classStyle="classStyleBo" :fontSize="fontSi" :classDefault="'link-a'"/>
    </div>
  </div>
</template>

<script>
import Strings from '@/components/strings.js'
import LabelComponent from '@/components/LabelComponent.vue'
import LinkButtonComponent from '@/components/LinkButtonComponent.vue'
export default {
  name: 'FooterRegisterComponent',
  data () {
    return {
      fontSi: '80',
      loginLabel: Strings.loginLabel,
      accountExist: Strings.accountExist,
      passwordLabel: Strings.forgotPassword,
      classStyleBo: 'register-login-register-link',
      passwordLabelLink: Strings.recoveryPassword
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
