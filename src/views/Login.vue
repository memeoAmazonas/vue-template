<template>
  <div>
    <notification-component :label="label" />
    <view-component>
      <content-component :width="'60'">
        <logo-component :source="'logo_1.png'" :width="'140px'" :height="'140px'" :is-visible="isVisible" />
        <LabelComponent :fontSize="'40'" :color="'#DAB822'" :label="login" />
        <form ref="form" class="form-control-lg">
          <input v-model="username" type="email" :placeholder="email" class="input-type">
          <input v-model="password" type="password" :placeholder="pass" class="input-type">
          <b-button variant="light">{{access}}</b-button>
        </form>
      </content-component>
    </view-component>
  </div>
</template>

<script>
import Strings from '@/components/strings.js'
import LogoComponent from '@/components/LogoComponent.vue'
import ViewComponent from '@/components/ViewComponent.vue'
import LinkButtonComponent from '@/components/LinkButtonComponent.vue'
import LabelComponent from '@/components/LabelComponent.vue'
import ContentComponent from '@/components/ContentComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      isVisible: false,
      label: Strings.login,
      email: Strings.email,
      pass: Strings.password,
      access: Strings.access,
      login: Strings.loginLabel
    }
  },
  components: {
    Strings,
    LogoComponent,
    ViewComponent,
    LabelComponent,
    ContentComponent,
    LinkButtonComponent,
    NotificationComponent
  }
}
</script>

<style scoped>

</style>
