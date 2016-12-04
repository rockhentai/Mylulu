<template>
  <div id="landing">
    <landing-view :config="config"></landing-view>
    <content :categories="categories"></content>
  </div>
</template>

<script>
import LandingView from '../components/LandingView.vue'
import Content from '../components/Content.vue'

export default {
  data() {
    return {
      config:{},
      categories:[]
    }
  },

  ready() {
    Promise.all([
      Config.load(),
      Category.load()
    ])
      .then(([config,categories]) => {
        this.config = config
        this.categories = categories
      })
  },
  
  components:{
    LandingView,
    Content
  }
}
</script>

<style lang="css">
</style>
