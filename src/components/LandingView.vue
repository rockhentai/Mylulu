<template>
  <div id="landing">
    <div id="landing-background" :style="backgroundStyle"></div>
    <div id="landing-content">
      <h1 id="landing-title" v-if="config.title">{{config.title}}</h1>
      <p id="landing-desc">{{{config.description}}}</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
