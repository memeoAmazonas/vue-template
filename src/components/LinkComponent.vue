<template>
  <b-nav-item>
    <router-link :to="goToLink" class="link-a">
    <span :class="{'label-component': classStyle, 'label-component-menu-lateral': classStyleLateral }">
      {{label}}
    </span>
    </router-link>
  </b-nav-item>
</template>

<script>
export default {
  name: 'LabelHeader',
  props: {
    label: '',
    classStyle: '',
    classStyleLateral: '',
    goToLink: ''
  },
  data () {
    return {
      classStyleData: ''
    }
  },
  mounted () {
    console.log(this.goToLink)
  }
}
</script>

<style scoped>

</style>
