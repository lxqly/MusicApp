<template>
  <div class="banner">
    <div class="swipe">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item,index) in bannerJson" :key="index">
            <img class="img"  :src="item.pic">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicBanners",
  props: {
    bannerJson: []
  }
};
</script>                                                                                                           

<style>
.banner {
   height: 240px;
   background-color:lightblue;
   max-width: 768px;
}
.swipe {
  height: 220px;
}
.img {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    max-width: 748px;
    overflow: hidden;
}
</style>