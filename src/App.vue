<template>
  <div id="app">
    <notifications group="custom-template" />
    <MainContainer />
    <router-view/>
  </div>
</template>

<script>
import '@/styles/views/index.css'
import MainContainer from '@/components/MainContainer'
export default {
  name: 'App',
  components: {
    MainContainer
  }
}
</script>
