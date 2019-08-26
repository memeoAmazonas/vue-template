<template>
  <div>
    <div v-if="user">
      <menu-lateral />
      <Header></Header>
    </div>
    <HeaderLogin v-else />
  </div>
</template>

<script>
import Header from '@/views/layout/Header.vue'
import MenuLateral from '@/components/MenuLateral.vue'
import HeaderLogin from '@/views/layout/HeaderLogin.vue'
export default {
  name: 'MainContainer',
  data () {
    return {
      visible: false
    }
  },
  computed: {
    user () {
      return this.$store.state.authentication.user
    }
  },
  components: {
    Header,
    HeaderLogin,
    MenuLateral
  }
}
</script>

<style scoped>

</style>
