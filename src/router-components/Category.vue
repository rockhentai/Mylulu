<template>
  <div id="category">
    <category :category="category" as-title="true"></category>
    <albums-list :albums="albums"></albums-list>
  </div>
</template>

<script>
import Category from '../models/Category'
import Album from '../models/Album'

import CategoryItem from '../components/Category.vue'
import AlbumsList from '../components/AlbumsList.vue'

export default {
  name:'CategoryPage',

  data() {
    return {
      category:{},
      albums:[]
    }
  },

  ready() {
    Promise.all([
      Category.loadIfNotInit()
        .then(() => Category.search('name',this.$route.params.name))
        .then(result => result[0]),
      Album.fetchByCategory(this.$route.params.name)
    ])
      .then(([category,albums]) => {
        this.category = category
        this.albums = albums
      })
  },

  components:{
    Category:CategoryItem,
    AlbumsList
  }
}
</script>

<style scoped>
  
</style>
