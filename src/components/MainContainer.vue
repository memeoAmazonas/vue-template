<template>
  <div>
    <div v-if="this.visible">
      <menu-lateral />
      <Header></Header>
    </div>
    <HeaderLogin v-else />
  </div>
</template>

<script>
import Header from '@/views/layout/Header.vue'
import HeaderLogin from '@/views/layout/HeaderLogin.vue'
import MenuLateral from '@/components/MenuLateral.vue'
export default {
  name: 'MainContainer',
  components: {
    Header,
    HeaderLogin,
    MenuLateral
  },
  data () {
    return {
      visible: true
    }
  },
  mounted () {
    if (localStorage.user) {
      this.visible = true
    }
  }
}
</script>

<style scoped>

</style>
