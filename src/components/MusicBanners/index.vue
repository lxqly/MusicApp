<template>
  <div id="banner">
    <div id="swipe">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item,index) in bannerJson" :key="index">
          <router-link :to="{path: 'detail', query:{'id': item.id}}">
            <img id="img"  :src="item.pic">
          </router-link>
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
#banner {
   height: 160px;
   background-color:lightblue;
}
#swipe {
  height: 140px;
}
#img {
    margin-top: 10px;
}
</style>