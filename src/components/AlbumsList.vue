<template>
  <div id="category-albums">
    <div v-if="albums.length > 0" class="album" v-for="album in albums" v-link="{path:`/album/${album._key}`}">
      <div class="album-image">
        <img class="lazyload" :data-src="album.photos[0] | thumbnail">
        <span class="album-titile">{{album.title}}</span>
      </div>
    </div>
    <span v-if="albums.length == 0" id="empty">暂无相册</span>
    <span id="eof">EOF</span>
  </div>
</template>

<script>
import 'lazysizes/lazysizes.min'

export default {
  props:['albums'],

  filters:{
    thumbnail(photo) {
      return `${photo}?imageMogr2/thumbnail/!500x500r`
    }
  }
}
</script>

<style scoped>
  #category-albums {
    width: 100%;
  }

  .album {
    position: relative;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .album-image {
    height: 65vw;
  }

  .album-image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .album-title {
    position: absolute;
    left: 1.5rem;
    bottom: 0.8rem;
    color: whitesmoke;
    font-size: 1.4rem;
    text-shadow: 0 0 2px gray;
    font-family: "Lantinghei SC", "Lantinghei TC", Arial, serif;
  }

  @media only screen and (min-width:500px) {
    #category-albums {
      width: 99vw;
      margin:0 auto;
    }

    #category {
      display: block;
      margin: 0 auto;
      overflow: hidden;
    }

    .album {
      float: left;
      width: 23.95vw;
      height: 23.95vw;
      margin: .4vw;
    }

    .album-image {
      width: 100%;
      height: 100%;
    }
  }

  #empty {
    display: block;
    width: 100%;
    color: #999;
    text-align: center;
    font-family: "Lantinghei SC", "Lantinghei TC", Arial, serif;
    clear: both;
  }

  #eof {
    display: block;
    width: 100%;
    height: 2.1rem;
    margin: 1rem 0 -1rem;
    text-align: center;
    color: #999;
    font-family: "Lantinghei SC", "Lantinghei TC", Arial, serif;
    clear: both;
  }

  #eof:before,#eof:after {
    display: inline-block;
    height: 0;
    padding: 0 .5rem;
    margin: .4rem .5rem;
    border-top: 1px solid #999;
    content: '';
  }
</style>
