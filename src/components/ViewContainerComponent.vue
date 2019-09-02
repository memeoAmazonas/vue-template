<template>
  <div>
    <notification-component :label="label" />
    <view-content-component>
      <content-child-component :width="width">
        <image-container-component :source="logo"/>
        <div :style="styles">
        <LabelComponent :fontSize="'200'" :color="'#DAB822'" :label="title"/>
        </div>
          <slot></slot>
      </content-child-component>
    </view-content-component>
  </div>
</template>

<script>
import LabelComponent from '@/components/LabelComponent.vue'
import ViewContentComponent from '@/components/ViewContentComponent.vue'
import ContentChildComponent from '@/components/ContentChildComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
import ImageContainerComponent from '@/components/ImageContainerComponent.vue'
export default {
  name: 'ViewContainerComponent',
  props: {
    label: '',
    title: '',
    width: {
      type: String,
      default: '50'
    },
    logo: {
      type: String,
      default: 'logo_1.png'
    },
    display: {
      type: String,
      default: 'flex'
    }
  },
  data () {
    return {
      styles: {}
    }
  },
  mounted () {
    this.styles = { 'display': this.display + ' !important' }
  },
  components: {
    LabelComponent,
    ViewContentComponent,
    ContentChildComponent,
    NotificationComponent,
    ImageContainerComponent
  }
}
</script>

<style scoped>

</style>
