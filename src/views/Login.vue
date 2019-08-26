.<template>
  <div>
    <notification-component :label="label" />
    <view-component>
      <content-component :width="'50'">
        <logo-component :source="'logo_1.png'" :width="'90'" :height="'80'"/>
        <LabelComponent :fontSize="'200'" :color="'#DAB822'" :label="login" />
        <form ref="form" class="form-control-lg">
          <input v-model="username" type="email" :placeholder="email" class="input-type">
          <input v-model="password" type="password" :placeholder="pass" class="input-type">
          <b-button class="btn-login" variant="light" @click.prevent="submit">{{access}} </b-button>
          <label-register-login-component/>
        </form>
      </content-component>
    </view-component>
  </div>
</template>

<script>
import Strings from '@/components/strings.js'
import { router } from '@/router/index.js'
import LogoComponent from '@/components/LogoComponent.vue'
import ViewComponent from '@/components/ViewComponent.vue'
import LabelComponent from '@/components/LabelComponent.vue'
import ContentComponent from '@/components/ContentComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
import LabelRegisterLoginComponent from '@/components/LabelRegisterLoginComponent.vue'

export default {
  name: 'login',
  data () {
    return {
      error: '',
      username: '',
      password: '',
      isVisible: false,
      label: Strings.login,
      email: Strings.email,
      pass: Strings.password,
      access: Strings.access,
      login: Strings.loginLabel,
      errors: Strings.errors.loginIncorrect
    }
  },
  components: {
    Strings,
    LogoComponent,
    ViewComponent,
    LabelComponent,
    ContentComponent,
    NotificationComponent,
    LabelRegisterLoginComponent
  },
  mounted () {
    if (localStorage.user) {
      router.push({ name: 'home' })
    } else {
      router.push({ name: 'login' })
    }
  },
  computed: {
    logginIn () {
      this.$store.dispatch('alert/clear')
      return this.$store.state.authentication.status.logginIn
    }
  },
  created () {
    this.$store.dispatch('authentication/logout')
  },
  methods: {
    submit () {
      const { username, password } = this
      const { dispatch } = this.$store
      if (username && password) {
        dispatch('authentication/login', { username, password })
          .then(() => {
            if (this.$store.state.alert.message) {
              this.$notify({
                title: this.errors,
                type: 'error',
                text: this.$store.state.alert.message
              })
            }
          })
      }
    }
  }

}
</script>

<style scoped>

</style>
