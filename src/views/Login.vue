<template>
  <div>
    <notification-component :label="label" />
    <div class="content-component">
      <div class="content">
        <logo-component :source="'logo_1.png'" :width="'120px'" :height="'120px'" :is-visible="isVisible" />
        <label>Iniciar Sesion</label>
      </div>
    </div>
  </div>
</template>

<script>
import Strings from '@/components/strings.js'
import LogoComponent from '@/components/LogoComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
export default {
  name: 'login',
  data () {
    return {
      label: Strings.login,
      isVisible: false
    }
  },
  components: {
    Strings,
    LogoComponent,
    NotificationComponent
  }
}
</script>

<style scoped>

</style>
