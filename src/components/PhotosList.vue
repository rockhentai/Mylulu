<template>
  <section id="album-photos">
    <img v-for="photo in photos" :src="photo" class="album-photo">
  </section>
</template>

<script>
export default {
  props:['photos']
}
</script>

<style scoped>
  #album-photos {
    width: 100%;
    background: white;
  }

  .album-photo {
    width: 100%;
    margin-top: .8rem;
  }

  @media only screen and (min-width:500px) {
    #album-photos {
      width:63.75vw;
    }
  }
</style>
