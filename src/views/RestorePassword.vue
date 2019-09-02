.<template>
  <view-container-component :label="label" :title="label">
    <form ref="form" class="form-control-lg">
      <input v-model="username" type="email" :placeholder="emailLabel + '*'" class="input-type">
      <b-button class="btn-login" variant="light" @click.prevent="submit" :disabled="isDisabled">{{send}} </b-button>
      <footer-restore-password-component />
    </form>
  </view-container-component>
</template>

<script>
import axios from 'axios'
import { router } from '@/router/index.js'
import { api } from '@/services/ApiRoutes'
import Strings from '@/components/strings.js'
import ViewContainerComponent from '@/components/ViewContainerComponent.vue'
import FooterRestorePasswordComponent from '@/components/FooterRestorePasswordComponent.vue'

export default {
  name: 'restorePassword',
  data () {
    return {
      error: '',
      fontSi: '70',
      username: '',
      isVisible: false,
      emailLabel: Strings.email,
      send: Strings.send,
      loginLabel: Strings.loginLabel,
      registerLabel: Strings.newOnWay,
      label: Strings.recoveryPassword,
      registerNow: Strings.registerNow,
      accountExist: Strings.accountExist,
      classStyleBo: 'register-login-register-link'

    }
  },
  computed: {
    isDisabled () {
      return this.username === ''
    }
  },
  methods: {
    submit () {
      var email = {
        email: this.username
      }
      axios.post(api.restorePassword, email, { headers: { 'Content-Type': 'application/json' } }).then(response => {
        if (response.status === 200) {
          this.$notify({
            title: 'Email valido.',
            type: 'success',
            text: ''
          })
          router.push({ name: 'newPassword', params: { token: response.data.token } })
        }
      }).catch(error => {
        if (error) {
          this.error = error.response.data.error
          this.$notify({
            title: 'Error durante el proceso.',
            type: 'error',
            text: this.error + ' Intente nuevamente'
          })
        }
      })
    }
  },
  components: {
    Strings,
    ViewContainerComponent,
    FooterRestorePasswordComponent
  }
}
</script>

<style scoped>
</style>
