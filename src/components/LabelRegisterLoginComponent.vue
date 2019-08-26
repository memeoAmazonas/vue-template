<template>
  <div class="register-login">
    <link-button-component :goToLink="'/'" :label="forgotPassword" :classStyle="classStyle" :fontSize="fontSize" />
    <div id="register-login-register">
      <label-component  :color="'#879fa3'" :label="newOnWay" :fontSize="fontSi"/>
      <link-button-component :goToLink="'/'" :label="registerNow" :classStyle="classStyleBo" :fontSize="fontSi" />
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
      forgotPassword: Strings.forgotPassword,
      registerNow: Strings.registerNow,
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
