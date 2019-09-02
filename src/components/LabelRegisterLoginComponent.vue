<template>
  <div class="register-login">
    <link-button-component :goToLink="'/restore-password'" :label="forgotPassword" :classStyle="classStyle" :fontSize="fontSize" />
    <div class="register-login-register">
      <div class="register-login-content">
      <label-component  :color="'#879fa3'" :label="newOnWay" :fontSize="fontSi" :textAling="'right'"/>
      </div>
      <div class="register-login-content">
      <link-button-component :goToLink="'/register'" :label="registerNow" :classStyle="classStyleBo" :fontSize="fontSi" />
      </div>
    </div>
  </div>

</template>

<script>
import Strings from '@/components/strings.js'
import LabelComponent from '@/components/LabelComponent.vue'
import LinkButtonComponent from '@/components/LinkButtonComponent.vue'
export default {
  name: 'LabelRegisterLoginComponent',
  data () {
    return {
      fontSize: '79',
      fontSi: '60',
      newOnWay: Strings.newOnWay,
      registerNow: Strings.registerNow,
      forgotPassword: Strings.forgotPassword,
      classStyle: 'forgoot-password-label-login',
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
