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
              <link-button-component :goToLink="'/register'" :label="passwordLabelLink" :classStyle="classStyleBo" :fontSize="fontSi" />
            </div>
          </div>
        </form>
      </content-component>
    </view-component>
  </div>
</template>

<script>
import Strings from '@/components/strings.js'
import LogoComponent from '@/components/LogoComponent.vue'
import ViewComponent from '@/components/ViewComponent.vue'
import LabelComponent from '@/components/LabelComponent.vue'
import LinkButtonComponent from '@/components/LinkButtonComponent.vue'
import ContentComponent from '@/components/ContentComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
import LabelRegisterLoginComponent from '@/components/LabelRegisterLoginComponent.vue'

export default {
  name: 'Register',
  data () {
    return {
      error: '',
      username: '',
      password: '',
      email: '',
      fontSi: '60',
      isVisible: false,
      passwordConfirm: '',
      label: Strings.register,
      emailLabel: Strings.email,
      pass: Strings.password,
      access: Strings.access,
      usernameLable: Strings.username,
      passConfir: Strings.passwordConfirm,
      register: Strings.registerNewAccount,
      errors: Strings.errors.loginIncorrect,
      classStyleBo: 'register-login-register-link',
      passwordLabel: Strings.forgotPassword,
      passwordLabelLink: Strings.recoveryPassword,
      accountExist: Strings.accountExist,
      loginLabel: Strings.loginLabel
    }
  },
  components: {
    Strings,
    LogoComponent,
    ViewComponent,
    LabelComponent,
    ContentComponent,
    LinkButtonComponent,
    NotificationComponent,
    LabelRegisterLoginComponent
  },
  computed: {
    isDisabled () {
      return ((this.username === '') || (this.email === '') || (this.password === '') || (this.passwordConfirm === ''))
    }
  }

}
</script>

<style scoped>
.content { padding: 1% 0 !important;}
.register-login-register { height: 100% !important;}
</style>
