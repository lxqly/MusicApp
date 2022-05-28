<template>
  <div>
      <MusicBanners :bannerJson='bannerJson'></MusicBanners>
  </div>
</template>

<script>
import { getBanner } from '@/api/request';
import MusicBanners from '../../components/MusicBanners/index.vue'
export default {
    name:'AppHome',
    components: {
      MusicBanners
    },
    data() {
      return {
        bannerJson: []
      }
    },
    mounted() {
       this.getBannerData();
    },
    methods: {
      getBannerData() {
         getBanner().then(res=>{
           console.log(res)
            this.bannerJson = res.data.data
         })
      }
    }
}
</script>

<style>

</style>