<template>
  <b-nav-item>
    <router-link :to="goToLink" :class="classDefault">
<!--
    <span :class="{'label-component': classStyle, 'label-component-menu-lateral': classStyleLateral }" :style="stylesContent">
-->
    <span :class="classStyle" :style="stylesContent">
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
    classDefault: {
      type: String,
      default: 'link-a-lateral'
    },
    classStyleLateral: '',
    color: {
      type: String,
      default: '#ffffff'
    },
    fontSize: {
      type: String,
      default: '100'
    }
  },
  data () {
    return {
      stylesContent: {},
      classStyleData: ''
    }
  },
  mounted () {
    this.stylesContent = { 'color': this.color, 'font-size': this.fontSize.concat('%') }
  }
}
</script>

<style scoped>

</style>
<!--'label-component': classStyle, 'label-component-menu-lateral': classStyleLateral-->
