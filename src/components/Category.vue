<template>
  <div class="content-category" :class="{'as-title':asTitle}">
    <div class="card-image">
      <img src="category.cover" alt="">
      <span class="card-title">{{category.title}}</span>
      <span class="card-desc">{{category.subtitle}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['category']
}
</script>

<style scoped>
  .content-category {
    position: relative;
    display: inline-block;
    float: left;
    height: 98vh;
    width:42.55vh;
    margin-bottom: 10px;
    background: white;
    color:white;
    text-shadow: 0 0 4px gray;
    transition-property: all;
    -moz-transition-property:all;
    -webkit-transition-property:all;
    -o-transition-property:all;
    cursor: pointer;
  }

  .content-category .card-image {
    width: 100%;
    height: 100%;
    padding: 0;
    margin:0;
    background: #333;
  }

  .content-category .card-image img {
    width: 100%;
    height: 100%;
    padding:0;
    margin:0;
    border: 0;
    object-fit: cover;
    -webkit-transition:all 2s ease;
    transition: all 2s ease;
  }

  .content-category:last-child {
    margin-right: 2.5vh;
  }

  .card-title {
    position: absolute;
    left:1.5rem;
    bottom: 0.8rem;
    font-size: 2rem;
    font-family: "Lantinghei SC", "Lantinghei TC", Arial, serif;
    -webkit-transition:all 1s ease;
    transition: all 1s ease;
  }

  .content-category.as-title {
    float: none;
  }

  .content-category.as-title .card-image img {
    opacity: 0.75;
  }

  .content-category.as-title .card-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
    font-size: 2.5rem;
    text-align: center;
    line-height: 20.275vh;
  }

  .card-desc {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 1.1rem;
    text-align: center;
    line-height: 30vh;
    font-family: "Lantinghei SC", "Lantinghei TC", Arial, serif;
    text-shadow: 0 0 2px gray;
  }

  .content-category.as-title .card-desc {
    display: block;
  }

  @media only screen and (min-width:500px) {
    .content-category.as-title {
      width: 100vw;
      height: 100vw;
      cursor: auto;
    }

    .content-category.as-title .card-title {
      margin-left: 18vw;
      text-align: left;
      line-height: 17vh;
    }

    .content-category.as-title .card-desc {
      text-align: left;
      margin-left: 18vw;
      line-height: 28vh;
    }
  }

  @media only screen and (max-width:900px) {
    .card-title {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width:500px) {
    .content-category {
      width:100vw;
      height: 42.55vw;
    }

    .content-category:last-child {
      margin-bottom: 2.5vh;
    }

    .card-title {
      font-size: 1.3rem;
    }
  }
</style>
