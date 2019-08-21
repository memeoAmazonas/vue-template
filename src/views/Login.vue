<template>
  <div>
    <notification-component :label="label" />
    <div class="content-component">
      <div class="content">
        <logo-component :source="'logo_1.png'" :width="'140px'" :height="'140px'" :is-visible="isVisible" />
        <LabelComponent :fontSize="'40'" :color="'#DAB822'" :label="login" />
        <form ref="form" class="form-control-lg">
          <input v-model="username" type="email" :placeholder="email" class="input-type">
          <input v-model="password" type="password" :placeholder="pass" class="input-type">
          <b-button variant="primary border-0">Button</b-button>

        </form>

      </div>
    </div>
  </div>
</template>

<script>
import Strings from '@/components/strings.js'
import LogoComponent from '@/components/LogoComponent.vue'
import LabelComponent from '@/components/LabelComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      isVisible: false,
      label: Strings.login,
      login: Strings.loginLabel,
      email: Strings.email,
      pass: Strings.password
    }
  },
  components: {
    Strings,
    LogoComponent,
    LabelComponent,
    NotificationComponent
  }
}
</script>

<style scoped>

</style>
