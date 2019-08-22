<template>
  <b-nav-item>
    <router-link :to="goToLink" class="link-a">
    <span :class="{'label-component': classStyle, 'label-component-menu-lateral': classStyleLateral }" :style="stylesContent">
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
    goToLink: '',
    classStyle: '',
    classStyleLateral: '',
    color: {
      type: String,
      default: '#ffffff'
    },
    fontSize: {
      type: String,
      default: '16'
    }
  },
  data () {
    return {
      stylesContent: {},
      classStyleData: ''
    }
  },
  mounted () {
    this.stylesContent = { 'color': this.color, 'font-size': this.fontSize.concat('px') }
  }
}
</script>

<style scoped>

</style>
