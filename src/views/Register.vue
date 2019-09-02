.<template>
  <div>
    <notification-component :label="label" />
    <view-component>
      <content-component :width="'50'">
        <logo-component :source="'logo_1.png'" :width="'90'" :height="'80'"/>
        <LabelComponent :fontSize="'200'" :color="'#DAB822'" :label="register" />
        <form ref="form" class="form-control-lg">
          <input v-model="username" type="text" :placeholder="usernameLable.concat('*')" class="input-type">
          <input v-model="email" type="email" :placeholder="emailLabel.concat('*')" class="input-type">
          <input v-model="password" type="password" :placeholder="pass.concat('*')" class="input-type">
          <input v-model="passwordConfirm" type="password" :placeholder="passConfir.concat('*')" class="input-type">
          <b-button class="btn-login" variant="light" @click.prevent="submit" :disabled="isDisabled">{{register}} </b-button>
          <div class="register-login-register">
            <div class="register-login-content">
              <label-component  :color="'#879fa3'" :label="accountExist" :fontSize="fontSi" :textAling="'right'"/>
            </div>
            <div class="register-login-content">
              <link-button-component :goToLink="'/'" :label="loginLabel" :classStyle="classStyleBo" :fontSize="fontSi" />
            </div>
          </div>
          <div class="register-login-register">
            <div class="register-login-content">
              <label-component  :color="'#879fa3'" :label="passwordLabel" :fontSize="fontSi"/>
            </div>
            <div class="register-login-content">
              <link-button-component :goToLink="'/restore-password'" :label="passwordLabelLink" :classStyle="classStyleBo" :fontSize="fontSi" />
            </div>
          </div>
        </form>
      </content-component>
    </view-component>
  </div>
</template>

<script>
import axios from 'axios'
import { router } from '@/router/index.js'
import { api } from '@/services/ApiRoutes'
import Strings from '@/components/strings.js'
import LogoComponent from '@/components/LogoComponent.vue'
import ViewComponent from '@/components/ViewComponent.vue'
import LabelComponent from '@/components/LabelComponent.vue'
import LinkButtonComponent from '@/components/LinkButtonComponent.vue'
import ContentComponent from '@/components/ContentComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'

export default {
  name: 'Register',
  data () {
    return {
      error: '',
      email: '',
      username: '',
      password: '',
      fontSi: '60',
      isVisible: false,
      passwordConfirm: '',
      access: Strings.access,
      pass: Strings.password,
      label: Strings.register,
      emailLabel: Strings.email,
      loginLabel: Strings.loginLabel,
      usernameLable: Strings.username,
      accountExist: Strings.accountExist,
      passConfir: Strings.passwordConfirm,
      register: Strings.registerNewAccount,
      errors: Strings.errors.loginIncorrect,
      passwordLabel: Strings.forgotPassword,
      classStyleBo: 'register-login-register-link',
      passwordLabelLink: Strings.recoveryPassword
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

  },
  computed: {
    isDisabled () {
      return ((this.username === '') || (this.email === '') || (this.password === '') || (this.passwordConfirm === ''))
    }
  },
  methods: {
    submit () {
      let user = {
        email: this.email,
        user: this.username,
        pass: this.password,
        confirmPass: this.passwordConfirm
      }
      axios.post(api.signup, user, { headers: { 'Content-Type': 'application/json' } }).then(response => {
        if (response.status === 200) {
          this.$notify({
            title: 'Registro exitoso.',
            type: 'success',
            text: response.data.message
          })
          router.push({ name: 'login' })
        }
      }).catch(error => {
        if (error.response) {
          this.error = error.response.data.error
          this.$notify({
            title: 'Error durante el registro',
            type: 'error',
            text: this.error
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.content { padding: 1% 0 !important;}
.register-login-register { height: 100% !important;}
</style>
