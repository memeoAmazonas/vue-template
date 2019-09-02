.<template>
  <view-container-component :label="label" :title="login">
    <form ref="form" class="form-control-lg">
      <input v-model="username" type="email" :placeholder="email" class="input-type">
      <input v-model="password" type="password" :placeholder="pass" class="input-type">
      <b-button class="btn-login" variant="light" @click.prevent="submit">{{access}} </b-button>
      <footer-login-component />
    </form>
  </view-container-component>
</template>

<script>
import { router } from '@/router/index.js'
import Strings from '@/components/strings.js'
import FooterLoginComponent from '@/components/FooterLoginComponent.vue'
import ViewContainerComponent from '@/components/ViewContainerComponent.vue'

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
    FooterLoginComponent,
    ViewContainerComponent
  },
  mounted () {
    if (localStorage.user) {
      router.push('/home')
    } else {
      router.push('/')
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
