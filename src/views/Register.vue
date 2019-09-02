.<template>
  <view-container-component :label="label" :title="register">
      <form ref="form" class="form-control-lg">
        <input v-model="username" type="text" :placeholder="usernameLable + '*'" class="input-type">
        <input v-model="email" type="email" :placeholder="emailLabel + '*'" class="input-type">
        <input v-model="password" type="password" :placeholder="pass + '*'" class="input-type">
        <input v-model="passwordConfirm" type="password" :placeholder="passConfir + '*'" class="input-type">
        <b-button class="btn-login" variant="light" @click.prevent="submit" :disabled="isDisabled">{{register}} </b-button>
        <footer-register-component />
      </form>
  </view-container-component>
</template>

<script>
import axios from 'axios'
import { router } from '@/router/index.js'
import { api } from '@/services/ApiRoutes'
import Strings from '@/components/strings.js'
import ViewContainerComponent from '@/components/ViewContainerComponent.vue'
import FooterRegisterComponent from '@/components/FooterRegisterComponent.vue'

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
    ViewContainerComponent,
    FooterRegisterComponent
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
.contenedor{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    background-color: blue;
    width: 60%;
    height: 80%;
  }

</style>
