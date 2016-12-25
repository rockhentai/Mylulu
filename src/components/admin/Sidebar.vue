<template>
  <div id="sidebar" v-el:sidebar>
    <h2>mylu Admin</h2>
    <ul class="nav nav-pills nav-stacked">
      <li role="presentation" :class="{active:active=='dashboard'}"><a href="#!/dashbord">{{'dashboard' | i18n}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
