.<template>
  <div>
    <notification-component :label="label" />
    <view-component>
      <content-component :width="'50'">
        <logo-component :source="'logo_1.png'" :width="'90'" :height="'80'"/>
        <LabelComponent :fontSize="'200'" :color="'#DAB822'" :label="label" />
        <form ref="form" class="form-control-lg">
          <input v-model="username" type="email" :placeholder="email" class="input-type">
          <b-button class="btn-login" variant="light" @click.prevent="submit">{{send}} </b-button>
            <div class="register-login-register">
              <div class="register-login-content res">
                <label-component  :color="'#879fa3'" :label="accountExist" :fontSize="fontSi" :textAling="'right'"/>
              </div>
              <div class="register-login-content">
                <link-button-component :goToLink="'/'" :label="loginLabel" :classStyle="classStyleBo" :fontSize="fontSi" />
              </div>
            </div>
            <div class="register-login-register">
              <div class="register-login-content">
                <label-component  :color="'#879fa3'" :label="registerLabel" :fontSize="fontSi"  :textAling="'right'"/>
              </div>
              <div class="register-login-content">
                <link-button-component :goToLink="'/register'" :label="registerNow" :classStyle="classStyleBo" :fontSize="fontSi" />
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
import ContentComponent from '@/components/ContentComponent.vue'
import LinkButtonComponent from '@/components/LinkButtonComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'

export default {
  name: 'restorePassword',
  data () {
    return {
      error: '',
      fontSi: '70',
      username: '',
      isVisible: false,
      send: Strings.send,
      email: Strings.email,
      loginLabel: Strings.loginLabel,
      registerLabel: Strings.newOnWay,
      label: Strings.recoveryPassword,
      registerNow: Strings.registerNow,
      accountExist: Strings.accountExist,
      register: Strings.registerNewAccount,
      classStyleBo: 'register-login-register-link'

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
  .register-login-register { height: 100% !important;}
  .res {
    margin-left: 10%;
  }
  .btn {
    margin: 4% 0;
  }
</style>
